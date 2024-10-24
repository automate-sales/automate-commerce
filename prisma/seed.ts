import dotenv from 'dotenv';
const NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${NODE_ENV}` });

import { Category, PrismaClient, Prisma, Product, Subcategory } from "@prisma/client"
import categories from "../data/categories.json"
import subcategories from "../data/subcategories.json"
import products from "../data/products.json";

import { createPublicBucket, uploadImageFromLocalPath, wipeS3Bucket } from "../src/utils/s3";
const prisma = new PrismaClient()

const bucketName = `${process.env.PROJECT_NAME}-media`

async function wipeRelatedEntities() {
  console.log('Wiping related entities')
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();
}

async function wipeProductsSubcategoriesAndCategories() {
  console.log('Wiping products')
  await prisma.product.deleteMany();
  console.log('Wiping subcategories')
  await prisma.subcategory.deleteMany();
  console.log('Wiping categories')
  await prisma.category.deleteMany();
  return true
}
interface BaseModel {
  id?: string | number;
  title?: Prisma.InputJsonValue;
  description?: Prisma.InputJsonValue;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  category?: Category;
  subcategory?: Subcategory;
}

function convertToCreateInput<T extends BaseModel>(data: T): T {
  if (data.title) {
    data.title = data.title as Prisma.InputJsonValue;
  }
  if (data.description) {
    data.description = data.description as Prisma.InputJsonValue;
  }
  if (data.createdAt && typeof data.createdAt === 'string') {
    data.createdAt = new Date(data.createdAt);
  }
  if (data.updatedAt && typeof data.updatedAt === 'string') {
    data.updatedAt = new Date(data.updatedAt);
  }
  if (data.id) delete data.id;
  return data;
}

async function seedCategories() {
  console.log('Seeding categories')
  const createCategoryPromises = categories.map(async (category) => {
    const data: Prisma.CategoryCreateInput = convertToCreateInput(category);
    await prisma.category.create({ data });
    if (Array.isArray(data.images)) {
      return Promise.all(
        data.images.map((image: string) => {
          return uploadImageFromLocalPath(
            bucketName,
            `./data/images/categories/${image}`,
            `categories/${image}`
          );
        })
      );
    }
    return null;
  });

  return await Promise.all(createCategoryPromises);
}

async function seedSubcategories() {
  console.log('Seeding subcategories')
  const createSubcategoryPromises = subcategories.map(async (subcategory) => {
    const { categorySlug, ...subcat } = subcategory;
    const data: Prisma.SubcategoryCreateInput = {
      ...convertToCreateInput(subcat),
      category: {
        connect: { slug: categorySlug },
      },
    };
    await prisma.subcategory.create({ data });
    if (Array.isArray(data.images)) {
      return Promise.all(
        data.images.map((image: string) => {
          return uploadImageFromLocalPath(
            bucketName,
            `./data/images/subcategories/${image}`,
            `subcategories/${image}`
          );
        })
      );
    }
    return null;
  });

  return await Promise.all(createSubcategoryPromises);
}

async function seedProducts() {
  console.log('Seeding products')
  const createProductPromises = products.map(async (product) => {
    const { subcategorySlug, ...prod } = product;
    const data: Prisma.ProductCreateInput = {
      ...convertToCreateInput(prod),
      subcategory: {
        connect: { slug: product.subcategorySlug },
      },
    };
    await prisma.product.create({ data })
    if (Array.isArray(data.images)) {
      return Promise.all(
        data.images.map((image: string) => {
          return uploadImageFromLocalPath(
            bucketName,
            `./data/images/products/${image}`,
            `products/${image}`
          );
        })
      );
    }
    return null;
  });

  return await Promise.all(createProductPromises);
}

async function wipeData() {
  return await Promise.all([
    wipeRelatedEntities(),
    wipeProductsSubcategoriesAndCategories(),
    wipeS3Bucket(bucketName)
  ]);
}

async function seedData() {
  await seedCategories();
  await seedSubcategories();
  await seedProducts();
}

async function seedTestData() {
  const qtys = {
    //shop
    'chair-vergex-bl': 0,
    'light-arm-bl': 0,
    'chair-xtc-gr': 1,
    'chair-stack-gr': 2,
    'chair-axis-wh': 3,
    'stand-arm-alum-single-bl': 20,
    'stand-arm-alum-double-gr': 18,
    'stand-laptop-adjus-sl': 30,
    //order
    'chair-executive-stratus-gr': 4,
    'frame-double-bl': 5,
    'anti-mat-shape1-bl': 3,
    // cart
    'stand-cpu-under-bl': 4
  };
  console.log('Updating data for testing');
  const qtyPromises = Object.entries(qtys).map(async ([q, qty]) => {
    await prisma.product.update({
      where: { sku: q },
      data: { stock: qty }
    });
  });
  const prices = {
    'anti-mat-shape1-bl': 0.72,
  };
  const pricePromises = Object.entries(prices).map(async ([p, price]) => {
    await prisma.product.update({
      where: { sku: p },
      data: { price: price }
    });
  });
  const users = [
    {
      name: "John Doe",
      username: "johndoe@doejohn.com",
      email: "johndoe@doejohn.com"
    }
  ];
  const userPromises = users.map(async (u) => {
    await prisma.user.create({ data: u });
  });
  await Promise.all([...qtyPromises, ...pricePromises, ...userPromises]);
}

async function main() {
  try {
    if (NODE_ENV !== 'production') {
      await createPublicBucket(bucketName)
    }
    await wipeData()
    await seedData()
    await seedTestData()
  } catch (err) {
    console.error(err)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


/*
SCRIPTS USED TO FORMAT THE SEED DATA 

import fs from 'fs';
import path from 'path';
import { createPublicBucket, downloadImage, optimizeImage, uploadImageFromURL } from "../src/utils/s3";
const oldImgHost = 'https://d1tnzngtf1n4as.cloudfront.net/public'
const exceptions = ['anti-mat-shape1-bl', 'chair-ajax-gr'];

// Function to create directories if they don't exist
const createDirIfNotExists = (dirPath: string): void => {
  if (!fs.existsSync(dirPath)) {
    console.log(`Creating directory: ${dirPath}`);
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Function to save the optimized image to disk
const saveImageToDisk = async (imageBuffer: Buffer, savePath: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(savePath, imageBuffer, (err) => {
      if (err) {
        reject(new Error(`Failed to save image: ${err.message}`));
      } else {
        console.log(`Image saved successfully to ${savePath}`);
        resolve();
      }
    });
  });
};

const processImages = async (item, type) => {
  const { sku, slug, images } = item;
  const folderName = sku || slug;
  const imageDir = path.join(`./data/images/${type}`, folderName);

  // Ensure image directory exists
  createDirIfNotExists(imageDir);

  const updatedImages = [];

  for (const image of images) {
    const imageUrl = `${oldImgHost}/${type}/${image}`;
    const imageSavePath = path.join(`./data/images/${type}`, image);

    try {
      console.log(`Downloading image: ${imageUrl}`);
      const imageBuffer = await downloadImage(imageUrl);

      if (!imageBuffer || imageBuffer.length === 0) {
        console.error(`Failed to download image from URL: ${imageUrl}`);
        continue;
      }

      console.log(`Optimizing image: ${image}`);
      const optimizedImage = await optimizeImage(imageBuffer);

      if (!optimizedImage || optimizedImage.length === 0) {
        console.error(`Image optimization failed for: ${image}`);
        continue;
      }

      console.log(`Saving image to: ${imageSavePath}`);
      await saveImageToDisk(optimizedImage, imageSavePath);

      updatedImages.push(imageSavePath);
    } catch (error) {
      console.error(`Error processing image ${image}: ${error.message}`);
    }
  }

  // Return updated images
  return updatedImages;
};

// Rename images in the folder
const renameImages = (folderName, type) => {
  const folderDir = path.join(`./data/images/${type}`, folderName);

  if (!fs.existsSync(folderDir)) {
    console.error(`Directory for ${folderName} does not exist: ${folderDir}`);
    return;
  }

  const files = fs.readdirSync(folderDir).filter(file => !fs.statSync(path.join(folderDir, file)).isDirectory());

  if (files.length === 0) {
    console.log(`No images found in directory for ${folderName}`);
    return;
  }

  files.forEach((file, index) => {
    const extension = path.extname(file);
    const newFileName = `${index + 1}${extension}`;
    const oldPath = path.join(folderDir, file);
    const newPath = path.join(folderDir, newFileName);

    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${oldPath} to ${newPath}`);
  });
};

// Limit the number of images (keeping only 1-2, unless exceptions)
const limitImages = (folderName, type) => {
  const folderDir = path.join(`./data/images/${type}`, folderName);

  if (!fs.existsSync(folderDir)) {
    console.error(`Directory for ${folderName} does not exist: ${folderDir}`);
    return;
  }

  const files = fs.readdirSync(folderDir).filter(file => !fs.statSync(path.join(folderDir, file)).isDirectory());

  if (exceptions.includes(folderName)) {
    console.log(`Skipping limit for ${folderName}, keeping all images.`);
    return;
  }

  if (files.length > 2) {
    files.slice(2).forEach(file => {
      const filePath = path.join(folderDir, file);
      fs.unlinkSync(filePath); // Delete the file
      console.log(`Deleted image: ${filePath}`);
    });
  }
};

// Update images paths in the JSON array
const updateImagesInJson = (item, type) => {
  const folderName = item.sku || item.slug;
  const imageDir = path.join(`./data/images/${type}`, folderName);

  const imageFiles = fs.readdirSync(imageDir).filter(file => !fs.statSync(path.join(imageDir, file)).isDirectory());

  if (imageFiles.length === 0) {
    console.log(`No images found for ${folderName}, setting images array to an empty array.`);
    item.images = []; // Set to an empty array if no images are found
  } else {
    // Update the images in the item (could be product, category, or subcategory)
    item.images = imageFiles.map(imageFile => `${folderName}/${imageFile}`);
    console.log(`Updated images for ${folderName}: ${item.images}`);
  }

  return item;
};

// Main function to process all items (products, categories, or subcategories)
const processAllItems = async (type: 'products' | 'categories' | 'subcategories') => {
  const itemsData = JSON.parse(fs.readFileSync(`./data/${type}.json`, 'utf8'));

  for (const item of itemsData) {
    const folderName = item.sku || item.slug;
    console.log(`Processing ${type}: ${folderName}`);

    // Download, optimize, and save images
    const updatedImages = await processImages(item, type);

    // Rename images
    renameImages(folderName, type);

    // Limit the number of images
    limitImages(folderName, type);

    // Update image paths in the JSON
    updateImagesInJson(item, type);
  }

  // Save updated JSON data back to the file
  fs.writeFileSync(`./data/${type}.json`, JSON.stringify(itemsData, null, 2), 'utf8');
  console.log('All items processed and updated.');
}; */