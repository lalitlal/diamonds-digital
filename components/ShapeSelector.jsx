import Image from "next/image";
import React from "react";

const ShapeSelector = () => {
  return (
    <div>
      <div className="font-bold text-gray-600">Shape</div>

      <div className="flex flex-wrap justify-evenly w-full">
        <Image
          src="/assets/oval_diamond.png"
          alt="oval"
          width="50"
          height="50"
          className="hover:text-slate-800 cursor-pointer my-2"
        />
        <Image
          src="/assets/oval_diamond.png"
          alt="oval"
          width="50"
          height="50"
          className="hover:text-slate-800 cursor-pointer my-2"
        />
        <Image
          src="/assets/oval_diamond.png"
          alt="oval"
          width="50"
          height="50"
          className="hover:text-slate-800 cursor-pointer my-2"
        />
        <Image
          src="/assets/oval_diamond.png"
          alt="oval"
          width="50"
          height="50"
          className="hover:text-slate-800 cursor-pointer my-2"
        />
        <Image
          src="/assets/oval_diamond.png"
          alt="oval"
          width="50"
          height="50"
          className="hover:text-slate-800 cursor-pointer my-2"
        />
        <Image
          src="/assets/oval_diamond.png"
          alt="oval"
          width="50"
          height="50"
          className="hover:text-slate-800 cursor-pointer my-2"
        />
      </div>
    </div>
  );
};

export default ShapeSelector;
