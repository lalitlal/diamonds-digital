import Link from "next/link";
import {
  borderHiraBlack,
  checkMark,
  circledNumberIcon,
  hiraBlack,
  hiraBlackBG,
  hiraDarkGrayBG,
  hiraGrayBG,
  hiraWhiteBG,
  hiralightGrayBG,
} from "./constants";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Stepper = ({ stage }) => {
  const cartContext = useContext(CartContext);

  const iconObjects = [
    {
      // icon: (
      //   <svg
      //     fill="none"
      //     stroke="currentColor"
      //     stroke-linecap="round"
      //     strokeLinejoin="round"
      //     strokeWidth="2"
      //     class="w-5 h-5 mr-3 hidden md:block"
      //     viewBox="0 0 24 24"
      //   >
      //     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      //   </svg>
      // ),
      icon: (
        <div className="flex items-center justify-center">
          <div
            className={`w-5 h-5 mr-2 flex items-center justify-center rounded-full border border-black ${hiraWhiteBG}`}
          >
            <span className="text-center text-black text-lg font-semibold">
              1
            </span>
          </div>
        </div>
      ),
      title: "Diamonds",
      href: "/diamond",
      doneCondition: cartContext.diamond,
    },
    {
      // icon: (
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     fill="none"
      //     viewBox="0 0 24 24"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     class="w-5 h-5 mr-3 hidden md:block"
      //   >
      //     <path
      //       stroke-linecap="round"
      //       strokeLinejoin="round"
      //       d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      //     />
      //   </svg>
      // ),
      icon: (
        <div className="flex items-center justify-center">
          <div
            className={`w-5 h-5 mr-2 flex items-center justify-center rounded-full border border-black ${hiraWhiteBG}`}
          >
            <span className="text-center text-black text-lg font-semibold">
              2
            </span>
          </div>
        </div>
      ),
      title: "Settings",
      href: "/ringsettings",
      doneCondition: false,
    },
  ];
  const stepperIcon = cartContext.diamond ? (
    checkMark
  ) : (
    <div className="rounded-full">1</div>
  );

  const commonStyling = `flex-grow py-3 w-1/2 justify-center border font-black font-Raleway ${borderHiraBlack} inline-flex items-center text-center leading-none tracking-wider active:bg-[#848484] active:text-black`;
  return (
    <section className="text-gray-600 body-font w-full overflow-x-hidden">
      <div className="py-4 flex justify-center w-full">
        <div className="w-screen">
          <div className="flex">
            {iconObjects.map((iconObj, i) => {
              return (
                <>
                  <Link
                    href={iconObj.href}
                    key={i}
                    // px-6?
                    className={`${commonStyling} ${
                      i === stage
                        ? `${hiraBlackBG} text-white`
                        : iconObj.doneCondition
                        ? `${hiraGrayBG} text-black`
                        : ` hover:bg-[#848484] text-black`
                    } `}
                  >
                    {iconObj.doneCondition
                      ? checkMark
                      : circledNumberIcon(i + 1)}
                    {iconObj.title}
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
