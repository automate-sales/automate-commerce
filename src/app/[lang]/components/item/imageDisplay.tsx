'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@prisma/client';
import { getIntl } from '@/utils/utils';

export interface ImageDisplayProps {
    product: Product;
    lang: 'en' | 'es';
    priority?: boolean;
}

export default function ImageDisplay({ product, lang = 'en', priority = false }: ImageDisplayProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [transitionClass, setTransitionClass] = useState('');

    const handleThumbnailClick = (index: number) => {
        const midpoint = product.images.length / 2;
        if (index < midpoint) {
            setTransitionClass('slide-in-left');
        } else {
            setTransitionClass('slide-in-right');
        }
        setSelectedImage(index);
    };

    const handleNext = () => {
        if (selectedImage < product.images.length - 1) {
            setSelectedImage((prev) => prev + 1);
            setTransitionClass('slide-in-right');
        }
    };

    const handlePrev = () => {
        if (selectedImage > 0) {
            setSelectedImage((prev) => prev - 1);
            setTransitionClass('slide-in-left');
        }
    };

    useEffect(() => {
        if (transitionClass !== '') {
            const timer = setTimeout(() => {
                setTransitionClass('');
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [transitionClass]);

    return (
        <div className="relative">
            <div className="relative h-96 overflow-hidden">
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${product?.images[selectedImage]}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 770px) 33vw, 35vw"
                    alt="Product Image"
                    className={`${transitionClass} transition-transform duration-500 ease-in-out transform object-contain`}
                    priority={priority}
                />
            </div>
            <div className="flex justify-center space-x-4 my-4">
                {product?.images.map((img, index) => (
                    <div key={index} className={`cursor-pointer w-24 h-full border-2 ${selectedImage === index ? 'border-blue-500' : ''}`} onClick={() => handleThumbnailClick(index)}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/products/${img}`}
                            width={100}
                            height={100}
                            className='object-cover'
                            alt={getIntl(product.description, lang)} 
                            priority={priority}
                        />
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 slider-prev-btn transform -translate-y-1/2 ">
                <button className="rounded-full p-2" onClick={handlePrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
            </div>
            <div className="absolute top-1/2 slider-next-btn transform -translate-y-1/2 ">
                <button className="rounded-full p-2" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
        </div>
    );
}