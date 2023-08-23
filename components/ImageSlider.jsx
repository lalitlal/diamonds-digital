import { useState } from "react";
import Image from "next/image";
import { minSwipeDistance } from "./constants";
// https://stackoverflow.com/questions/70612769/how-do-i-recognize-swipe-events-in-react
function ImageSlider({ images, imageClass, imagesAlt, checkout = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(null);

  const handlePrev = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevIndex) =>
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
    <div
      className={`relative ${checkout ? "h-24" : "h-48"}`}
      onTouchStart={handleTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 w-full flex justify-center ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-contain border"
          />
        </div>
      ))}
      <div className="absolute bottom-0 w-full h-auto flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? "bg-slate-800" : "bg-gray-500"
            }`}
            // onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
