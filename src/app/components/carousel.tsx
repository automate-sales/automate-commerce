'use client'

import { motion } from "framer-motion";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";



type Item = {
  imageUrl: string;
  link?: string;
  heading?: string;
  subheading?: string;
};

type CarouselProps = { 
    items: Item[], 
    autoplay?: number | null,
    size?: 'sm' | 'md' | 'lg'
}

const getSizes =(size: CarouselProps['size'])=> {
    switch(size){
        case 'sm':
            return {
                itemHeight: 200,
                itemWidth: 200,
            }
        case 'md':
            return {itemHeight: 300}
        case 'lg':
            return {itemHeight: 400}
    }
}
const Carousel = ({ items, autoplay, size='lg' }: CarouselProps) => {
  const constraintsRef = useRef(null);
  const itemCount = items.length-1;
  const itemWidth = 320; // Width of each item
  const gapWidth = 16; // Gap between each item
  const totalWidth = (itemWidth-gapWidth) * itemCount
 
  return (
    <div className="w-full bg-blue-500">
      <motion.div ref={constraintsRef} className="overflow-hidden w-full">
        <motion.div
          className="flex gap-4"
          transition={autoplay ? { ease: "linear", duration: itemCount*autoplay } : {}}
          animate={autoplay ? { x: -totalWidth } : {}}
          drag="x"
          dragConstraints={{
            left: -totalWidth,
            right: 0,
          }} // Set dragging constraints based on total items
          dragElastic={1}
        >
          {items.map((item, idx) => (
            <motion.div
              className="cursor-grab bg-white flex flex-shrink-0 flex-col items-center first-letter:p-10 h-"
              key={idx}
            >
                    <Link href={item.link as Url}>
                        <Image
                            src={item.imageUrl}
                            alt={item.heading || `carousel item ${idx}`}
                            width={200}
                            height={200}
                        />
                    </Link>
                    <h2>{item.heading}</h2>
                    <p>{item.subheading}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
