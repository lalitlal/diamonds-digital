import React, { useContext, useEffect, useMemo, useState } from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";

function CheckoutItems({ onRemoveItem }) {
  const cartContext = useContext(CartContext);
  const diamondContext = useContext(DiamondContext);

  const [cartEmpty, setCartEmpty] = useState(false);

  const cartInfo = useMemo(() => {
    const dummyImage = (
      <img
        alt="ecommerce"
        class="object-cover object-center h-16 w-16 rounded"
        src="https://dummyimage.com/420x260"
      />
    );
    return [
      {
        description: cartContext.diamond,
        name: "Loose Diamond",
        price: cartContext.diamondPrice,
        image: dummyImage,
      },
      {
        description:
          cartContext.setting === undefined
            ? undefined
            : `${cartContext.setting} `.concat(`${diamondContext.bandColor}`),
        name: "Setting",
        price: cartContext.settingPrice,
        image: dummyImage,
      },
    ];
  }, [
    cartContext.diamond,
    cartContext.diamondPrice,
    cartContext.setting,
    cartContext.settingPrice,
    diamondContext.bandColor,
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
      <div className="justify-center items-center mb-10">
        <div className="flex justify-center h-5/6">
          <div
            class="w-screen h-auto overflow-y-auto max-w-sm border border-gray-600  p-4 pt-4 sm:p-6 lg:p-8 rounded-3xl"
            aria-modal="true"
            role="dialog"
            tabindex="-1"
          >
            <h3 className="text-center font-Raleway font-bold text-lg">
              Your Shopping Cart
            </h3>

            <div class="mt-6 my-5">
              {cartEmpty && (
                <div className="text-center font-Raleway">
                  Your shopping cart is empty. Explore around!
                </div>
              )}
              <div class="space-y-6">
                {!cartEmpty &&
                  cartInfo.map((lineItem, i) => {
                    return (
                      lineItem.description !== undefined && (
                        <div key={i} class="flex items-center gap-6">
                          {lineItem.image}
                          <div>
                            <h3 class="text-sm text-gray-900">
                              {lineItem.name}
                            </h3>

                            <div class="mt-0.5 space-y-px text-[10px] text-gray-600">
                              <div>
                                <div class="inline">Qty:</div>
                                <div class="inline">1</div>
                              </div>

                              <div>
                                <div class="inline">Price:</div>
                                <div class="inline">{lineItem.price}</div>
                              </div>
                              <div>
                                <div class="inline">Description:</div>
                                <div class="inline">{lineItem.description}</div>
                              </div>
                            </div>
                          </div>
                          {/* DELETE BUTTON */}
                          <div
                            className="w-[70px] flex justify-end"
                            onClick={() => {
                              onRemoveItem(lineItem);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class={`w-6 h-6 hover:text-indigo-400 cursor-pointer`}
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </div>
                        </div>
                      )
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItems;
