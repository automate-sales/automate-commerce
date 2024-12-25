'use client'

import { useState, useRef, useEffect, useCallback } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type Item = {
  imageUrl: string;
  link?: string;
  heading?: string;
  subheading?: string;
};

type CarouselProps = {
  items: Item[];
  size?: 'sm' | 'md' | 'lg';
  autoScrollInterval?: number;
};

const Carousel = ({
  items,
  size = 'md',
  autoScrollInterval = 3000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  // For pointer-based dragging:
  const startPositionRef = useRef<number | null>(null);

  // Set each item's width (including margin if desired).
  // Adjust so items + margin/padding look nice in your layout.
  const itemWidth = 240; 

  // Apply different sizes for the grid item
  const itemSizeClass = {
    sm: 'w-32 h-32 p-2',
    md: 'w-40 h-40 p-4',
    lg: 'w-48 h-48 p-4',
  }[size];

  // Duplicate items for infinite loop
  const itemsToDisplay = [...items, ...items];

  // ========================
  // Navigation
  // ========================
  const moveToNext = useCallback(() => {
    if (isTransitioning.current) return;
    setCurrentIndex((prev) => prev + 1);
    isTransitioning.current = true;
  }, []);

  const moveToPrev = useCallback(() => {
    if (isTransitioning.current) return;
    setCurrentIndex((prev) => prev - 1);
    isTransitioning.current = true;
  }, []);

  // ========================
  // Auto-Scroll
  // ========================
  useEffect(() => {
    const intervalId = setInterval(() => {
      moveToNext();
    }, autoScrollInterval);

    return () => clearInterval(intervalId);
  }, [moveToNext, autoScrollInterval]);

  // ========================
  // Transition End
  // ========================
  useEffect(() => {
    const handleTransitionEnd = () => {
      isTransitioning.current = false;

      // Jump forward
      if (currentIndex === items.length) {
        setCurrentIndex(0);
        if (containerRef.current) {
          containerRef.current.style.transition = 'none';
          containerRef.current.style.transform = `translateX(0px)`;
          // Force reflow so next transition can apply
          void containerRef.current.offsetHeight;
          containerRef.current.style.transition = 'transform 0.3s ease';
        }
      }
      // Jump backward
      else if (currentIndex < 0) {
        setCurrentIndex(items.length - 1);
        if (containerRef.current) {
          containerRef.current.style.transition = 'none';
          containerRef.current.style.transform = `translateX(-${
            (items.length - 1) * itemWidth
          }px)`;
          void containerRef.current.offsetHeight;
          containerRef.current.style.transition = 'transform 0.3s ease';
        }
      }
    };

    const el = containerRef.current;
    el?.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      el?.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex, items.length, itemWidth]);

  // Update transform on index change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${
        currentIndex * itemWidth
      }px)`;
      containerRef.current.style.transition = 'transform 0.3s ease';
    }
  }, [currentIndex, itemWidth]);

  // ========================
  // Drag Handlers
  // ========================
  const handlePointerDown = (clientX: number) => {
    if (containerRef.current) {
      containerRef.current.style.transition = 'none'; // no smooth transition while dragging
    }
    startPositionRef.current = clientX;
  };

  const handlePointerMove = (clientX: number) => {
    if (startPositionRef.current === null) return;

    const dragDistance = clientX - startPositionRef.current;
    const newTranslateX = -(currentIndex * itemWidth) + dragDistance;

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${newTranslateX}px)`;
    }
  };

  const handlePointerUp = (clientX: number) => {
    if (startPositionRef.current === null) return;
    const dragDistance = clientX - startPositionRef.current;
    const threshold = itemWidth / 4; // 25% threshold

    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.3s ease';
    }

    if (dragDistance > threshold) {
      moveToPrev();
    } else if (dragDistance < -threshold) {
      moveToNext();
    } else {
      // Snap back to current
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${
          currentIndex * itemWidth
        }px)`;
      }
    }

    startPositionRef.current = null;
  };

  return (
    <div className="relative w-full">
      {/* 
        Outer Wrapper: 
        - Apply your horizontal padding here so it doesn't interfere with the overflow. 
      */}
      <div className="px-12">
        {/*
          Inner container (overflow-hidden) so your items
          don't spill beyond the container even with padding
        */}
        <div
          className="overflow-hidden relative w-full"
          onMouseDown={(e) => handlePointerDown(e.clientX)}
          onMouseMove={(e) => {
            if (startPositionRef.current !== null) {
              handlePointerMove(e.clientX);
            }
          }}
          onMouseUp={(e) => handlePointerUp(e.clientX)}
          onMouseLeave={(e) => {
            if (startPositionRef.current !== null) {
              handlePointerUp(e.clientX);
            }
          }}
          onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
          onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
          onTouchEnd={(e) => handlePointerUp(e.changedTouches[0].clientX)}
        >
          <div
            ref={containerRef}
            className="flex gap-4"
            style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
          >
            {itemsToDisplay.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white flex-shrink-0 text-center ${itemSizeClass} m-2 rounded-lg`}
              >
                <Link
                  href={item.link || '#'}
                  className="flex h-full w-full items-center justify-center"
                >
                  <NextImage
                    src={item.imageUrl}
                    alt={item.heading || `Carousel item ${idx}`}
                    width={itemWidth}
                    height={200}
                    className="object-contain"
                  />
                </Link>
                {item.heading && (
                  <h2 className="text-sm font-semibold">{item.heading}</h2>
                )}
                {item.subheading && (
                  <p className="text-xs">{item.subheading}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={moveToPrev}
          className="p-2 ml-2 text-gray-400 hover:text-gray-600 transition"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={moveToNext}
          className="p-2 mr-2 text-gray-400 hover:text-gray-600 transition"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
