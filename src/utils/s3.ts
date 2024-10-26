import dotenv from 'dotenv';
const NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${NODE_ENV}`});
const S3_ENDPOINT = NODE_ENV == 'production' ? `https://${process.env.S3_BUCKET_NAME}.${process.env.AWS_REGION}.amazonaws.com` : process.env.MINIO_ENDPOINT;

import { 
    S3Client, 
    HeadBucketCommand, 
    CreateBucketCommand, 
    PutBucketPolicyCommand, 
    ListObjectsV2Command, 
    DeleteObjectCommand, 
    PutObjectCommand 
} from "@aws-sdk/client-s3";
import sharp from 'sharp';
import { readFileSync } from 'fs';

const s3ClientConfig = NODE_ENV !== 'production' ? {
    credentials: {
        accessKeyId: 'minio',
        secretAccessKey: 'password',
    },
    endpoint: S3_ENDPOINT,
    forcePathStyle: true,
    signatureVersion: 'v4'
} : {};

export const s3Client = new S3Client(s3ClientConfig);

export const bucketExists = async (bucketName: string) => {
    try {
        await s3Client.send(new HeadBucketCommand({ Bucket: bucketName }));
        return true;
    } catch (err: any) {
        if (err?.name && err.name === 'NoSuchBucket' || 'NotFound') return false;
        else throw new Error(err);
    }
}

export const createPublicBucket = async (bucketName: string) => {
    if (!await bucketExists(bucketName)) {
        console.log(`Creating a new public bucket: ${bucketName}`);
        await s3Client.send(new CreateBucketCommand({ Bucket: bucketName }));
        const policy = {
            Version: "2012-10-17",
            Statement: [{
                Sid: "PublicReadGetObject",
                Effect: "Allow",
                Principal: "*",
                Action: "s3:GetObject",
                Resource: [
                    `arn:aws:s3:::${bucketName}/*`,
                    `arn:aws:s3:::${bucketName}`
                ]
            }]
        };
        await s3Client.send(new PutBucketPolicyCommand({
            Bucket: bucketName,
            Policy: JSON.stringify(policy)
        }));
        console.log('done!');
    } else console.log(`bucket ${bucketName} already exists`);
};

export const wipeS3Bucket = async (bucketName: string) => {
    const listObjectsResult = await s3Client.send(new ListObjectsV2Command({ Bucket: bucketName })) || { Contents: [] };
    const objects = listObjectsResult.Contents ? listObjectsResult.Contents.map(object => ({ Key: object.Key })) : null;
    const deletePromises = objects ? objects.map(object => s3Client.send(new DeleteObjectCommand({ Bucket: bucketName, Key: object.Key }))) : null;
    deletePromises && await Promise.all(deletePromises);
}

export const getMimeFromPath = (path: string) => {
    const extension = path.split('.').pop()
    switch (extension) {
      case "jpg":
      case "jpeg":
        return "image/jpeg";
      case "png":
        return "image/png";
      case "mp4":
        return "video/mp4";
      case "pdf":
        return "application/pdf";
      case "csv":
        return "text/csv";
      case "webp":
        return "image/webp";
      case "ogg":
        return "audio/ogg";
      default:
        return "application/octet-stream";
    }
};

export const uploadImageToS3 = async (
    bucketName: string,
    key: string,
    imageBuffer: Buffer
) => {
    const mime_type = getMimeFromPath(key);
    return await s3Client.send(new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: imageBuffer,
        ContentDisposition: "inline",
        ...(mime_type && { ContentType: mime_type })
    }));
}

export const downloadImage = async (imageUrl: string) => {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to download image from URL: ${response.statusText}`);
    } else return Buffer.from(await response.arrayBuffer());
};

export const optimizeImage = async (imageBuffer: Buffer) => {
    const max_width = 1500
    const image = sharp(imageBuffer).jpeg({ mozjpeg: true })
    const metadata = await image.metadata()
    if(metadata?.width && metadata.width > max_width) return await image.resize(max_width).toBuffer()
    else return image.toBuffer()
};

export const uploadImageFromURL = async (
    bucketName: string,
    imageUrl: string,
    key: string
) => {
    try {
        const imageBuffer = await downloadImage(imageUrl);
        const optimizedImageBuffer = await optimizeImage(imageBuffer);
        return await uploadImageToS3(bucketName, key, optimizedImageBuffer);
    } catch (error) {
        console.error(`Error migrating image, ${imageUrl}, to S3: ${error}`);
    }
}

export const uploadImageFromLocalPath = async (
    bucketName: string,
    localPath: string,   // Local file path
    key: string          // S3 key
) => {
    try {
        // Read the image file from the local path
        const imageBuffer = readFileSync(localPath);
        
        // Optimize the image
        const optimizedImageBuffer = await optimizeImage(imageBuffer);
        
        // Upload the optimized image to S3
        return await uploadImageToS3(bucketName, key, optimizedImageBuffer);
    } catch (error) {
        console.error(`Error uploading image from local path, ${localPath}, to S3: ${error}`);
    }
}