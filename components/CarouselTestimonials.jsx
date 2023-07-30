import React, { useState } from "react";
import Testimony from "./Testimony";

const CarouselTestimonials = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const touchDiff = touchEndX - touchStartX;

    if (touchDiff > 50) {
      // Swipe right
      if (currentIndex > 0) {
        setCurrentIndex((prevSlide) => prevSlide - 1);
      }
    } else if (touchDiff < -50) {
      // Swipe left
      if (currentIndex < data.length - 1) {
        setCurrentIndex((prevSlide) => prevSlide + 1);
      }
    }
  };

  const chevronLeft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );

  const chevronRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {data.map((tmoney, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Testimony
              name={tmoney.name}
              purchase={tmoney.purchase}
              review={tmoney.review}
              source={tmoney.img_src}
            ></Testimony>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0  bg-gray-600 text-white z-10"
        onClick={handlePrev}
      >
        {chevronLeft}
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-600 text-white z-10"
        onClick={handleNext}
      >
        {chevronRight}
      </button>
    </div>
  );
};

export default CarouselTestimonials;
