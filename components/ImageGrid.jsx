import React from "react";

const ImageGrid = ({ images }) => {
  return (
    <div className="mb-4 w-full">
      <div className="flex flex-grow flex-wrap">
        {images.map((img, index) => (
          <div key={index} className="w-1/4">
            {/* Apply CSS styles to control image dimensions */}
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="border border-black my-2"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
