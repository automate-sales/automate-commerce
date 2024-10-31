'use client'

import { useState, useRef, useEffect } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';

type Item = {
  imageUrl: string;
  link?: string;
  heading?: string;
  subheading?: string;
};

type CarouselProps = {
  items: Item[];
  size?: 'sm' | 'md' | 'lg';
};

const Carousel = ({ items, size = 'md' }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemWidth = 200; // Set based on actual item width
  const isTransitioning = useRef(false); // Track if a transition is in progress

  // Calculate size classes for different item sizes
  const itemSizeClass = {
    sm: 'w-32 h-32 p-2',
    md: 'w-40 h-40 p-4',
    lg: 'w-48 h-48 p-4',
  }[size];

  // Prepare duplicated items array for infinite effect
  const itemsToDisplay = [...items, ...items]; // Duplicate items for looping effect
  const totalItems = itemsToDisplay.length;

  // Move to the next item
  const moveToNext = () => {
    if (isTransitioning.current) return; // Prevent overlapping transitions

    setCurrentIndex((prevIndex) => prevIndex + 1);
    isTransitioning.current = true;
  };

  // Move to the previous item
  const moveToPrev = () => {
    console.log('moveToPrev');
    console.log(currentIndex);
    if (isTransitioning.current) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);

    isTransitioning.current = true;
  };

  // Handle end of transition
  useEffect(() => {
    const handleTransitionEnd = () => {
      isTransitioning.current = false;
      console.log('PUITOU JOSE')
      // Seamlessly loop back to the start of the original items
      if (currentIndex === items.length) {
        setCurrentIndex(0);
        containerRef.current!.style.transition = 'none'; // Temporarily disable transition
        containerRef.current!.style.transform = `translateX(0px)`;
        // Force a reflow to apply styles immediately
        void containerRef.current!.offsetHeight;
        containerRef.current!.style.transition = 'transform 0.3s ease';
      } else if (!currentIndex || currentIndex<= 0) {
        console.log('PUPU JOSE')
        setCurrentIndex(items.length - 1);
        containerRef.current!.style.transition = 'none';
        containerRef.current!.style.transform = `translateX(-${items.length * itemWidth}px)`;
        void containerRef.current!.offsetHeight;
        containerRef.current!.style.transition = 'transform 0.3s ease';
      }
    };

    containerRef.current?.addEventListener('transitionend', handleTransitionEnd);
    return () => containerRef.current?.removeEventListener('transitionend', handleTransitionEnd);
  }, [currentIndex, items.length]);

  // Update the translate position when currentIndex changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }, [currentIndex]);

  // Start dragging
  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setDragImage(new Image(), 0, 0); // Hide ghost image
    event.dataTransfer.effectAllowed = 'move';
    containerRef.current!.style.transition = 'none';
  };

  // Dragging handler
  const handleDrag = (event: React.DragEvent) => {
    if (event.clientX === 0) return; // Ignore events with no position data

    const translateX = -currentIndex * itemWidth + event.clientX - event.clientX % itemWidth;
    containerRef.current!.style.transform = `translateX(${translateX}px)`;
  };
  const handleDragEnd = (event: React.DragEvent) => {
    containerRef.current!.style.transition = 'transform 0.3s ease';

    const draggedBy = event.clientX % itemWidth;
    const threshold = itemWidth / 4;

    if (draggedBy > threshold) {
      moveToNext();
    } else if (draggedBy < -threshold) {
      moveToPrev();
    } else {
      containerRef.current!.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  };

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex"
        ref={containerRef}
        draggable
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ transform: `translateX(-${currentIndex * itemWidth}px)`, transition: 'transform 0.3s ease' }}
      >
        {itemsToDisplay.map((item, idx) => (
          <div key={idx} className={`flex-shrink-0 ${itemSizeClass} bg-white m-2 rounded-lg`}>
            <Link href={item.link || '#'} className="flex items-center justify-center h-full">
              <NextImage
                src={item.imageUrl}
                alt={item.heading || `Carousel item ${idx}`}
                width={itemWidth}
                height={200}
                className="object-contain"
              />
            </Link>
            <h2 className="text-sm font-semibold">{item.heading}</h2>
            <p className="text-xs">{item.subheading}</p>
          </div>
        ))}
      </div>

      <div className="absolute inset-y-0 left-4 flex items-center">
        <button
          onClick={moveToPrev}
          className="bg-gray-300 p-2 rounded-full"
        >
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button
          onClick={moveToNext}
          className="bg-gray-300 p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
