'use client'

import { Product } from '@prisma/client';
import Image from 'next/image';
import { useState } from 'react';

export interface ImageDisplayProps {
    product: Product;
}

export default function ImageDipslay({product}: ImageDisplayProps) {
    const [selectedImage, setSelectedImage] = useState(0);
  return (
        <div>
          <div className="relative h-96">
            <Image src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${product?.images[selectedImage]}`} fill alt="Product Image" />
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            {product?.images.map((img, index) => (
              <div key={index} className={`cursor-pointer w-24 h-24 border-4 ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`} onClick={() => setSelectedImage(index)}>
                <Image src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${img}`} width={100} height={100} objectFit="cover" alt="Thumbnail" />
              </div>
            ))}
          </div>
        </div>
  );
};