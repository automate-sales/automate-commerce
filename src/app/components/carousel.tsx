'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Item = {
  imageUrl: string;
  link?: string;
  heading?: string;
  subheading?: string;
};

type CarouselProps = {
  items: Item[];
  autoplay?: number; // Autoplay speed in milliseconds for changing slides
  size?: 'sm' | 'md' | 'lg';
}

const Carousel = ({ items, autoplay = 3000, size = 'md' }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const itemsRef = useRef([...items, ...items]); // Duplicate items for an infinite loop

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) =>
        prevIndex === itemsRef.current.length / 2 - 1 ? 0 : prevIndex + 1
      ),
      autoplay
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, autoplay]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Adjust item sizes based on the 'size' prop
  const itemSize = {
    'sm': { width: 150, height: 150, padding: 'p-2' },
    'md': { width: 200, height: 200, padding: 'p-4' },
    'lg': { width: 250, height: 250, padding: 'p-4' },
  }[size];

  return (
    <div className="w-full overflow-hidden p-8">
      <div className={`flex transition-transform ease-linear duration-1000`} style={{ transform: `translateX(-${currentIndex * (itemSize.width + 32)}px)` }}>
        {itemsRef.current.map((item, idx) => (
          <div
            className={`flex-none ${itemSize.padding} bg-white flex flex-col justify-center items-center text-center m-2 shadow-lg rounded-lg p-5`}
            key={idx}
            style={{ width: `${itemSize.width}px`, height: `${itemSize.height}px` }}
          >
            <Link className="flex items-center justify-center h-full" href={item.link || '#'}>

                <Image
                  src={item.imageUrl}
                  alt={item.heading || `Carousel item ${idx}`}
                  width={itemSize.width - 32} // Deduct padding for actual image size
                  height={itemSize.height - 32} // Deduct padding for actual image size
                  objectFit="contain"
                />

            </Link>
            <h2 className="text-sm font-semibold w-full">{item.heading}</h2>
            <p className="text-xs">{item.subheading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
