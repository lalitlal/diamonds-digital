import React, { useState } from "react";
import {
  chevronLeft,
  chevronRight,
  hiraBlackBG,
  minSwipeDistance,
} from "./constants";
import Image from "next/image";

const Carousel = ({ images, zvalue = 50 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = (e) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isRightSwipe) {
      // Swipe right
      if (isRightSwipe) {
        handlePrev();
      }
    } else if (isLeftSwipe) {
      // Swipe left
      handleNext();
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out scale-50"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={img}
              // width={400}
              // height={400}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
      <button
        className={`absolute top-1/2 transform -translate-y-1/2 left-0  ${hiraBlackBG} text-white z-10`}
        onClick={handlePrev}
      >
        {chevronLeft}
      </button>
      <button
        className={`absolute top-1/2 transform -translate-y-1/2 right-0 ${hiraBlackBG} text-white z-10`}
        onClick={handleNext}
      >
        {chevronRight}
      </button>
    </div>
  );
};

export default Carousel;
