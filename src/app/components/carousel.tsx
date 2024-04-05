'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

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
  infiniteScroll?:boolean
}

const Carousel = ({ items, autoplay = 3000, size = 'md', infiniteScroll= true }: CarouselProps) => {
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
      <div >
        <Swiper
          loop={infiniteScroll}
          navigation
          spaceBetween={20}
          slidesPerView={6}
          rewind
          autoplay={{delay: autoplay}}
          modules={[Navigation]}
          onSwiper={swiper => console.log(swiper)}
          className='h-96 w-full rounded-lg'
        >
          {itemsRef.current.map((item, idx) => (
            <SwiperSlide key={idx}>
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
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Carousel;
