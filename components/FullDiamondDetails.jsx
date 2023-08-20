import React, { useState } from "react";

const FullDiamondDetails = ({ data }) => {
  const [seeFullDetails, setSeeFullDetails] = useState(false);

  return (
    <>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Carat</span>
        <span class="ml-auto text-gray-900">
          {data.diamond.certificate.carats}
        </span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Color</span>
        <span class="ml-auto text-gray-900">
          {data.diamond.certificate.color}
        </span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Clarity</span>
        <span class="ml-auto text-gray-900">
          {data.diamond.certificate.clarity}
        </span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Cut</span>
        <span class="ml-auto text-gray-900">
          {data.diamond.certificate.cut}
        </span>
      </div>
      <div class="flex border-t border-b border-gray-200 py-2">
        <span class="text-gray-500">Report</span>
        <span class="ml-auto text-gray-900">{data.report || "IGI"}</span>
      </div>
      {seeFullDetails && (
        <>
          <div class="flex border-t border-b border-gray-200 py-2">
            <span class="text-gray-500">Polish</span>
            <span class="ml-auto text-gray-900">
              {data.diamond.certificate.polish}
            </span>
          </div>
          <div class="flex border-t border-b border-gray-200 py-2">
            <span class="text-gray-500">Symetry</span>
            <span class="ml-auto text-gray-900">
              {data.diamond.certificate.symmetry}
            </span>
          </div>
          <div class="flex border-t border-b border-gray-200 py-2">
            <span class="text-gray-500">Width</span>
            <span class="ml-auto text-gray-900">
              {Number(data.diamond.certificate.width).toFixed(2)}
            </span>
          </div>
          <div class="flex border-t border-b border-gray-200 py-2">
            <span class="text-gray-500">Length</span>
            <span class="ml-auto text-gray-900">
              {Number(data.diamond.certificate.length).toFixed(2)}
            </span>
          </div>
          <div class="flex border-t border-b border-gray-200 py-2">
            <span class="text-gray-500">Depth</span>
            <span class="ml-auto text-gray-900">
              {Number(data.diamond.certificate.depth).toFixed(2)}
            </span>
          </div>
          <div class="flex border-t border-b border-gray-200 py-2">
            <span class="text-gray-500">Depth Pct.</span>
            <span class="ml-auto text-gray-900">
              {Number(data.diamond.certificate.depthPercentage).toFixed(2)}
            </span>
          </div>
          <div class="flex border-t border-b border-gray-200 py-2">
            <span class="text-gray-500">Table</span>
            <span class="ml-auto text-gray-900">
              {Number(data.diamond.certificate.table).toFixed(2)}
            </span>
          </div>
          <div class="flex border-t border-b border-gray-200 py-2">
            <span class="text-gray-500">Girdle</span>
            <span class="ml-auto text-gray-900">
              {data.diamond.certificate.girdle}
            </span>
          </div>
        </>
      )}
      <div
        className="text-black underline text-left mb-6 font-medium tracking-wider py-2"
        onClick={() => {
          setSeeFullDetails(!seeFullDetails);
        }}
      >
        {seeFullDetails ? "Hide" : "Show"} full information
      </div>
    </>
  );
};

export default FullDiamondDetails;
