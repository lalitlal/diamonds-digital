import { useState } from "react";
import Image from "next/image";

function ImageSlider({ images, imageClass, imagesAlt, checkout = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className={`relative ${checkout ? "h-48 rounded-3xl" : "h-96"}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 w-full flex justify-center ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* {dummyImage} */}
          <Image
            src={image}
            alt={"YUPERS"}
            width={400}
            height={400}
            quality={75}
            className={imageClass}
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
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
