import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import FullDiamondDetails from "./FullDiamondDetails";
import RingSizePicker from "../components/RingSizePicker";
import {
  borderHiraBlack,
  caretIcon,
  hiraDarkGrayText,
  hiralightGrayBG,
} from "./constants";
import Link from "next/link";
import RingKaratPicker from "./RingKaratPicker";

function CheckoutItems({ onRemoveItem }) {
  const cartContext = useContext(CartContext);
  const diamondContext = useContext(DiamondContext);
  const [cartEmpty, setCartEmpty] = useState(false);
  const [showCheckoutDiamondDetails, setShowCheckoutDiamondDetails] =
    useState(false);
  const [showCheckoutSettingDetails, setShowCheckoutSettingDetails] =
    useState(false);

  const largeBreakpoint = 1024; // Define your large breakpoint in pixels
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > largeBreakpoint);
    if (window.innerWidth > largeBreakpoint) {
      setShowCheckoutDiamondDetails(true);
      setShowCheckoutSettingDetails(true);
    }
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showDetailsArray = [
    {
      getter: showCheckoutDiamondDetails,
      setter: setShowCheckoutDiamondDetails,
    },
    {
      getter: showCheckoutSettingDetails,
      setter: setShowCheckoutSettingDetails,
    },
  ];

  const chosenDiamondShapeUpperCased = useCallback(() => {
    if (
      cartContext.diamondShape !== null &&
      cartContext.diamondShape !== undefined
    ) {
      return (
        cartContext.diamondShape.charAt(0).toUpperCase() +
        cartContext.diamondShape.slice(1)
      );
    }
    return undefined;
  }, [cartContext.diamondShape]);

  useEffect(() => {
    // update cart context if diamond changed
    if (cartContext.setting !== undefined) {
      const chosenDiamondShape = chosenDiamondShapeUpperCased();
      const currentCartSettingDiamond = cartContext.setting.split(" - ")[1];
      if (
        currentCartSettingDiamond !== chosenDiamondShape &&
        chosenDiamondShape !== undefined
      ) {
        const newCartSettingDiamond = cartContext.setting.replace(
          currentCartSettingDiamond,
          chosenDiamondShape
        );
        cartContext.setSetting(newCartSettingDiamond);
      }
    }
  }, [cartContext, chosenDiamondShapeUpperCased]);

  const cartInfo = useMemo(() => {
    return [
      {
        description:
          cartContext.diamond === undefined
            ? undefined
            : ` ${cartContext.diamond} `,
        name: `${cartContext.diamond}`,
        price: ` CAD$ `.concat(cartContext.diamondPrice),
        detailDiv: (
          <FullDiamondDetails
            data={diamondContext.diamondDetails}
          ></FullDiamondDetails>
        ),
        editLink: "/diamond",
        missingText: "Select Diamond",
      },
      {
        description:
          cartContext.setting === undefined
            ? undefined
            : ` ${cartContext.setting} `,
        name: cartContext.setting,
        price: ` CAD$ `.concat(cartContext.settingPrice),
        detailDiv: (
          <>
            <RingSizePicker></RingSizePicker>
            {/* <RingKaratPicker></RingKaratPicker> */}
          </>
        ),
        editLink: "/ringsettings",
        missingText: "Select Ring",
      },
    ];
  }, [
    cartContext.diamond,
    cartContext.diamondPrice,
    cartContext.setting,
    cartContext.settingPrice,
  ]);

  useEffect(() => {
    if (
      cartInfo[0].description === undefined &&
      cartInfo[1].description === undefined
    ) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
  }, [cartInfo]);

  return (
    <div>
      <div class="my-5 lg:my-0">
        <div class="">
          {!cartEmpty &&
            cartInfo.map((lineItem, i) => {
              return lineItem.description ? (
                <div className={`border ${borderHiraBlack} p-2 my-2`}>
                  <div
                    key={i}
                    class={`flex flex-1 items-center gap-6`}
                    // onClick={() => {
                    //   showDetailsArray[i].setter(!showDetailsArray[i].getter);
                    // }}
                  >
                    <div
                      className="flex flex-col flex-grow hover:cursor-pointer"
                      onClick={() => {
                        if (!isLargeScreen) {
                          showDetailsArray[i].setter(
                            !showDetailsArray[i].getter
                          );
                        }
                      }}
                    >
                      <div class={`text-sm md:text-lg ${hiraDarkGrayText}`}>
                        {lineItem.name}
                      </div>

                      <div class={`mt-0.5 space-y-px text-sm md:text-lg`}>
                        <div>
                          <div class="inline">{lineItem.price}</div>
                        </div>
                      </div>
                    </div>
                    {/* DELETE BUTTON */}
                    <div className="flex">
                      <Link
                        className="hover:underline"
                        href={lineItem.editLink}
                        onClick={() => {
                          cartContext.setShowCartModal(false);
                        }}
                      >
                        Edit
                      </Link>
                      <div className="mx-2 hover:cursor-pointer">
                        {caretIcon}
                      </div>
                      <div
                        className="flex justify-end"
                        onClick={() => {
                          onRemoveItem(lineItem);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          class={`w-6 h-6 hover:text-indigo-400 cursor-pointer`}
                        >
                          <path
                            stroke-linecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {showDetailsArray[i].getter && lineItem.detailDiv}
                </div>
              ) : (
                <Link
                  href={lineItem.editLink}
                  onClick={() => {
                    cartContext.setShowCartModal(false);
                  }}
                >
                  <div
                    className={`border ${borderHiraBlack} ${hiralightGrayBG} text-center p-4 text-lg space-y-px hover:cursor-pointer hover:underline my-2 lg:mt-0`}
                  >
                    <div
                      key={i}
                      class={`flex flex-1 items-center gap-6 `}
                      onClick={() => {
                        showDetailsArray[i].setter(!showDetailsArray[i].getter);
                      }}
                    >
                      <div className="flex flex-col flex-grow">
                        <div class={`text-lg text-black`}>
                          {lineItem.missingText}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default CheckoutItems;
