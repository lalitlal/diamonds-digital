import Link from "next/link";
import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import TrustedHtmlContent from "./TrustedHTMLContent";
import Script from "next/script";
import Image from "next/image";
import {
  borderHiraBlack,
  hiraBlackBG,
  hiraDarkGrayText,
  hiraWhiteBG,
  marginMultiplier,
  toFixedDecimal,
} from "./constants";
import FullDiamondDetails from "./FullDiamondDetails";
import { event } from "../lib/gtag";
import CustomIframe from "./CustomIframe";

const ProductDetail = ({ shape, data }) => {
  const cartContext = useContext(CartContext);
  const diamondContext = useContext(DiamondContext);
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [seeFullDetails, setSeeFullDetails] = useState(false);

  const handleDiamondSelect = () => {
    {
      data.diamond.certificate.cut = data.diamond.certificate.cut || "UKN";
      const diamondStatus = `${shape} ${data.diamond.certificate.carats} ${
        data.diamond.certificate.color
      } ${data.diamond.certificate.clarity} ${
        data.diamond.certificate.cut || "UKN"
      }`;
      cartContext.setDiamond(diamondStatus);
      cartContext.setDiamondPrice(
        toFixedDecimal(data.price * marginMultiplier)
      );
      diamondContext.setCurrentSettingDiamondShape(shape.toLowerCase());
      diamondContext.setSelectedDiamondShape(shape.toLowerCase());
      cartContext.setDiamondShape(shape.toLowerCase());
      diamondContext.setDiamondJustSelected(true);
      diamondContext.setDiamondDetails(data);
      event({
        action: "Button Click",
        category: "Diamonds",
        label: "Add to Cart",
        value: data.price * marginMultiplier,
      });
    }
  };

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
      <div class="px-5 py-2 w-full justify-center">
        <div class="w-full justify-center items-center text-center ">
          <div class="md:w-4/5 w-full mb-6 lg:mb-0 mx-auto lg:flex">
            <div className={`lg:text-left`}>
              <h2 class="text-sm title-font text-black tracking-widest">
                HIRA
              </h2>
              <div className={`lg:flex`}>
                <h1
                  class={`${hiraDarkGrayText} text-xl title-font font-medium mb-2 lg:mb-4`}
                >
                  {shape} Shape Diamond
                </h1>
                <h1
                  class={`${hiraDarkGrayText} text-xl title-font font-medium mb-2 lg:mb-4 hidden lg:flex lg:ml-2`}
                >
                  {" Carat: "}
                  {data.diamond.certificate.carats}
                </h1>
              </div>

              <div className="w-full">
                <div className="flex justify-center items-center text-center lg:justify-start">
                  <TrustedHtmlContent
                    url={data.diamond.video}
                  ></TrustedHtmlContent>
                </div>
              </div>
            </div>
            <div className={`lg:flex lg:flex-col lg:w-1/2 lg:ml-8`}>
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
                ) : data.diamond.certificate.lab === "IGI" ? (
                  <>
                    <CustomIframe
                      url={`https://www.igi.org/viewpdf.php?r=${data.diamond.certificate.certNumber}`}
                    ></CustomIframe>
                    <Link
                      href={`https://www.igi.org/viewpdf.php?r=${data.diamond.certificate.certNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex hover:cursor-pointer">
                        <a>See Certificate</a>
                        {openArrow}
                      </div>
                    </Link>
                  </>
                ) : (
                  <div>Call/Text Us!</div>
                )}
              </p>
              <FullDiamondDetails data={data}></FullDiamondDetails>
              <div class="justify-center w-full">
                <button
                  class={`flex w-full justify-center py-2 text-black ${hiraWhiteBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
                  onClick={() => {
                    cartContext.setShowBookingModal(
                      !cartContext.showBookingModal
                    );
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth", // You can use 'auto' or 'smooth' for scrolling behavior
                    });
                  }}
                >
                  Speak to an expert
                </button>
                <Link href={"/ringsettings"}>
                  <button
                    class={`flex w-full justify-center py-2 text-white ${hiraBlackBG} focus:outline-none active:bg-black focus:bg-black text-lg`}
                    onClick={() => handleDiamondSelect()}
                  >
                    Add to ring (USD${" "}
                    {toFixedDecimal(data.price * marginMultiplier)})
                  </button>
                </Link>
                <Link href={"/checkout"} scroll={true}>
                  <div
                    class={`flex w-full justify-center py-2 text-white ${hiraBlackBG} focus:outline-none active:bg-black focus:bg-black text-lg mt-2`}
                    onClick={() => {
                      handleDiamondSelect();
                      cartContext.setSetting(undefined);
                      cartContext.setSettingPrice(0.0);
                    }}
                  >
                    Buy Now (USD${" "}
                    {toFixedDecimal(data.price * marginMultiplier)})
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
