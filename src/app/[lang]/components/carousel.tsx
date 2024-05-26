'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay';

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
  infiniteScroll?:boolean;
  lang?: string;
}

const Carousel = ({ items, autoplay = 3000, size = 'md', infiniteScroll= true, lang = 'en' }: CarouselProps) => {
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


  const swiperStyle = {
    '--swiper-navigation-size': '20px !important',  
    '--swiper-theme-color': '#000 !important',
    '--swiper-navigation-color': 'var(--swiper-theme-color)',
    padding: '10px 30px !important',
  };

  return (
    <div className="w-full overflow-hidden p-8">
      <div >
        <Swiper
          style={swiperStyle}
          loop={infiniteScroll}
          navigation
          spaceBetween={20}
          slidesPerView={10}
          rewind
          autoplay={{
            delay: autoplay,
            disableOnInteraction: false // Ye line add karein
          }}
          modules={[Navigation, Autoplay]}
          className=' w-full rounded-lg'
          breakpoints={{
            320: {slidesPerView: 1},
            640: {slidesPerView: 2},
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4,},
            1170: { slidesPerView: 6,},
            1440: { slidesPerView: 8,},
            1920: { slidesPerView: 10,},
          }}
          
        >
          {itemsRef.current.map((item, idx) => (
            <SwiperSlide className={'swiper-slide'} key={idx}>
              <div
                className={`${itemSize.padding} swiper-slide-inner bg-white flex flex-col justify-center items-center text-center m-2 rounded-lg p-5`}
                key={idx}
                style={{ width: `${itemSize.width}px`, height: `${itemSize.height}px` }}
              >
                <Link className="flex items-center justify-center h-full" href={`/${lang}/${item.link}` || '#'}>

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
