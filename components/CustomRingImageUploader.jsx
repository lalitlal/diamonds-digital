import React, { useRef, useState } from "react";
import { hiraDarkBrownText, hiraLightBrownBG, xIcon } from "./constants";

const CustomRingImageUploader = ({ uploadedFiles, setUploadedFiles }) => {
  const fileInputRef = useRef(null);

  const handleImageUpload = () => {
    if (uploadedFiles.length < 3) {
      fileInputRef.current.click();
    } else {
      alert("You can upload a maximum of 3 images or videos.");
    }
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const newUploadedFiles = [...uploadedFiles];

    for (let i = 0; i < files.length; i++) {
      if (newUploadedFiles.length < 3) {
        newUploadedFiles.push(files[i]);
      } else {
        alert("You can upload a maximum of 3 images or videos.");
        break;
      }
    }

    setUploadedFiles(newUploadedFiles);
    console.log(uploadedFiles, "!!!UPLOADED!");
  };

  const handleRemoveFile = (index) => {
    const newUploadedFiles = [...uploadedFiles];
    newUploadedFiles.splice(index, 1);
    setUploadedFiles(newUploadedFiles);
  };

  return (
    <div className="border my-4 p-4 border-emerald-900">
      <div
        onClick={handleImageUpload}
        className="bg-emerald-900 hover:bg-emerald-950 text-white text-center font-bold py-2 px-4"
      >
        Upload Image/Video
      </div>
      <input
        type="file"
        accept="image/*" //video/*
        multiple
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />

      <div className="mt-3">
        {uploadedFiles.map((file, index) => (
          <div
            key={index}
            className={`${hiraLightBrownBG} ${hiraDarkBrownText} py-1 px-2 mb-2 flex justify-between`}
          >
            {file.name}
            <div
              onClick={() => handleRemoveFile(index)}
              className="text-black focus:outline-none"
            >
              {xIcon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomRingImageUploader;
