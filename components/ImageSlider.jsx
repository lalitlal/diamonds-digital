import { useState } from "react";
import Image from "next/image";

function ImageSlider({ images, imageClass, imagesAlt, checkout = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const touchDiff = touchEndX - touchStartX;

    if (touchDiff > 50) {
      // Swipe right
      if (currentSlide > 0) {
        setCurrentSlide((prevSlide) => prevSlide - 1);
      }
    } else if (touchDiff < -50) {
      // Swipe left
      if (currentSlide < images.length - 1) {
        setCurrentSlide((prevSlide) => prevSlide + 1);
      }
    }
  };

  return (
    <div
      className={`relative ${checkout ? "h-48 rounded-3xl" : "h-96"}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{ paddingBottom: "75%" }} // Set the aspect ratio (height / width) of the container to match the images' aspect ratio
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
          <Image
            src={image}
            alt={"YUPERS"}
            layout="fill" // Make the Image fill its parent container
            objectFit="cover" // Ensure the Image covers the container without distortion
            quality={75}
          />
          {/* <div key={index} className="w-full flex-shrink">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
          </div> */}
        </div>
      ))}
      <div className="absolute bottom-0 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? "bg-slate-800" : "bg-gray-500"
            }`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
