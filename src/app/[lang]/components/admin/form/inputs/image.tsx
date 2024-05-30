import React, { useState } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import Image from 'next/image';
import { s3Filename } from '../../utils/s3';
import { StarIcon, PhotoIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface ImagePickerProps {
  value: string[];
  name: string;
  model: string;
  item: { [key: string]: any };
  onChange: (ev: { target: { name: string; value: string[] } }) => void;
  label?: string;
  disabled?: boolean;
  imagesCount: number;
  newImages: File[];
  setNewImages: React.Dispatch<React.SetStateAction<File[]>>;
  imagesToDelete: string[];
  setImagesToDelete: React.Dispatch<React.SetStateAction<string[]>>;
}

const ImagePicker: React.FC<ImagePickerProps> = ({
  value,
  name,
  model,
  item,
  onChange,
  label,
  disabled = false,
  imagesCount,
  newImages,
  setNewImages,
  imagesToDelete,
  setImagesToDelete,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>(value);
  const path = `${item.slug || item.sku || item.id}/`;

  const onDrop: DropzoneOptions['onDrop'] = (acceptedFiles) => {
    const newFiles = [...files, ...acceptedFiles];
    setFiles(newFiles);
    const newImagesUrls = [...value, ...acceptedFiles.map((file) => URL.createObjectURL(file))];
    setPreviews(newImagesUrls);
    const newImagesPaths = [...value, ...acceptedFiles.map((file) => `${path}${s3Filename(file.name)}`)];
    onChange({ target: { name, value: newImagesPaths } });
    setNewImages((prevNewImages) => [...prevNewImages, ...acceptedFiles]);
  };

  const handleSetMainImage = (index: number, image: string) => {
    const newFiles = [...files];
    const newValues = [...value];
    const newPreviews = [...previews];
    setFiles(newFiles.splice(index, 1).concat(newFiles));
    setPreviews(newPreviews.splice(index, 1).concat(newPreviews));
    onChange({ target: { name, value: newValues.splice(index, 1).concat(newValues) } });
    if (image.startsWith('blob:')) {
      const newNewImages = [...newImages];
      setNewImages(newNewImages.splice(index, 1).concat(newNewImages));
    }
  };

  const handleRemoveFile = (index: number, image: string) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    const images = [...value];
    images.splice(index, 1);
    const newPreviews = [...previews];
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);
    onChange({ target: { name, value: images } });

    if (!image.startsWith('blob:')) {
      setImagesToDelete((prevImagesToDelete) => [...prevImagesToDelete, image]);
    } else setNewImages(newImages.splice(index - imagesCount, 1));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, disabled });

  return (
    <div className="w-full p-2">
      <div className="border rounded-md p-4">
        {label && (
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
          </div>
        )}
        <div
          className="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center cursor-pointer"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <PhotoIcon className="h-12 w-12 text-gray-500" />
          <p className="mt-2 text-sm text-gray-500">Drag and drop images here or click to select files</p>
        </div>
        {previews.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {previews.map((image, index) => (
              <div
                key={image}
                className="relative h-24 w-24 border rounded-md overflow-hidden flex items-center justify-center"
              >
                <Image
                  src={image.startsWith('blob:') ? image : `${process.env.NEXT_PUBLIC_IMAGE_HOST}/${model}/${image}`}
                  alt={image}
                  width={96}
                  height={96}
                />
                <div className="absolute top-1 right-1 flex gap-1">
                  <button
                    className={`bg-white rounded-full p-1 shadow-md ${index === 0 ? 'text-yellow-500' : ''}`}
                    disabled={disabled}
                    onClick={() => handleSetMainImage(index, image)}
                  >
                    <StarIcon className="h-4 w-4" />
                  </button>
                  <button
                    className="bg-white rounded-full p-1 shadow-md"
                    disabled={disabled}
                    onClick={() => handleRemoveFile(index, image)}
                  >
                    <XMarkIcon className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePicker;
