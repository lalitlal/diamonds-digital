import { useState } from "react";
import Image from "next/image";

function ImageSlider({ images, imageClass, imagesAlt, checkout = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

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
      className={`relative ${checkout ? "h-48 rounded-3xl" : "h-96"}`}
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
          {/* {dummyImage} */}
          {/* <Image
            src={image}
            alt={"YUPERS"}
            width={400}
            height={400}
            quality={75}
            className={imageClass}
            objectFit="cover"
          /> */}
          {/* <Image
            src={image}
            alt={"YUPERS"}
            layout="fill" // Make the Image fill its parent container
            objectFit="cover" // Ensure the Image covers the container without distortion
            quality={75}
          /> */}
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-fill"
          />
        </div>
      ))}
      <div className="absolute bottom-0 w-full flex justify-center space-x-2">
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
