import Link from "next/link";
import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import TrustedHtmlContent from "./TrustedHTMLContent";
import Script from "next/script";
import Image from "next/image";
import { borderHiraBlack, hiraBlackBG, hiraWhiteBG } from "./constants";

const ProductDetail = ({ shape, data }) => {
  const cartContext = useContext(CartContext);
  const diamondContext = useContext(DiamondContext);
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [seeFullDetails, setSeeFullDetails] = useState(false);
  const productOptions = [
    {
      Header: "Description",
      Content: `${shape} Shape Diamond`,
    },
    // { Header: "Reviews", Content: "Some Reviews" },
    {
      Header: "Certificate",
      Content: {
        report: `https://cdn.diamonds/cert_files/gia/`.concat(
          `${data.reportNumber}.pdf`
        ),
        image:
          `https://cdn.diamonds/cdn-cgi/image/width=500,height=500,fit=pad,quality=50/images_legacy/lg`.concat(
            `${data.nid}`
          ),
      },
    },
  ];

  const openArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      class="w-6 h-6 hover:cursor-pointer ml-2"
    >
      <path
        stroke-linecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );

  return (
    <div class="text-gray-600 body-font">
      <div class="px-5 py-2 w-full justify-center ">
        <div class="w-full justify-center items-center text-center ">
          <div class="md:w-4/5 w-full mb-6 lg:mb-0 mx-auto">
            <h2 class="text-sm title-font text-black tracking-widest">HIRA</h2>
            <h1 class="text-gray-900 text-xl lg:text-3xl title-font font-medium mb-2 lg:mb-4">
              {shape} Shape Diamond
            </h1>
            <div className="w-full">
              <div className="flex justify-center items-center text-center">
                <TrustedHtmlContent
                  url={data.diamond.video}
                ></TrustedHtmlContent>
              </div>
            </div>

            <div class="flex mb-4">
              {productOptions.map((prod, i) => {
                return (
                  <div
                    key={i}
                    className={`flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 hover:cursor-pointer ${
                      i === currentDisplay
                        ? "border-gray-500 text-gray-500"
                        : "border-gray-300 text-gray-300"
                    }`}
                    onClick={() => {
                      setCurrentDisplay(i);
                    }}
                  >
                    {prod.Header}
                  </div>
                );
              })}
            </div>
            <p class="leading-relaxed mb-4">
              {productOptions[currentDisplay].Header !== "Certificate" ? (
                productOptions[currentDisplay].Content
              ) : (
                <Link
                  href={productOptions[currentDisplay].Content.report}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex hover:cursor-pointer">
                    <a>See Certificate</a>
                    {openArrow}
                  </div>
                </Link>
              )}
            </p>
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
                    {Number(data.diamond.certificate.depthPercentage).toFixed(
                      2
                    )}
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
              {seeFullDetails ? "Show" : "Hide"} full information
            </div>

            <div class="justify-center w-full">
              <Link href="/ringsettings">
                <button
                  class={`flex w-full justify-center py-2 text-black ${hiraWhiteBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
                  onClick={() => {
                    console.log("Speak to expert clicked");
                  }}
                >
                  Speak to an expert
                </button>
                <button
                  class={`flex w-full justify-center py-2 text-white ${hiraBlackBG} focus:outline-none active:bg-black focus:bg-black text-lg`}
                  onClick={() => {
                    const diamondStatus = `${shape} ${data.diamond.certificate.carats} ${data.diamond.certificate.color} ${data.diamond.certificate.clarity} ${data.diamond.certificate.cut}`;
                    cartContext.setDiamond(diamondStatus);
                    cartContext.setDiamondPrice(data.price);
                    diamondContext.setCurrentSettingDiamondShape(
                      shape.toLowerCase()
                    );
                    diamondContext.setSelectedDiamondShape(shape.toLowerCase());
                    cartContext.setDiamondShape(shape.toLowerCase());
                    diamondContext.setDiamondJustSelected(true);
                  }}
                >
                  Add to ring (CA$ {data.price})
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
