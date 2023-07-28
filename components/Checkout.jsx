import React, { useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CartContext } from "./context/CartContext";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import ErrorCheckout from "../components/ErrorCheckout";
import Stepper from "./Stepper";
import Modal from "./Modal";
import CalendlyBooking from "./CalendlyBooking";
import CartModal from "./CartModal";
import CheckoutItems from "./CheckoutItems";
import { DiamondContext } from "./context/DiamondContext";
import { hiraSlate } from "./constants";

const Checkout = () => {
  const handleRemoveCartItem = (item) => {
    if (item.name === "Loose Diamond") {
      cartContext.setDiamond(undefined);
      cartContext.setDiamondPrice(0);
    } else {
      cartContext.setSetting(undefined);
      cartContext.setSettingPrice(0);
    }
  };
  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    // if (query.get("success")) {
    //   console.log("Order placed! You will receive an email confirmation.");
    // }

    // if (query.get("canceled")) {
    //   console.log(
    //     "Order canceled -- continue to shop around and checkout when you’re ready."
    //   );
    // }
  }, []);

  const cartContext = useContext(CartContext);
  const [error, setError] = useState(false);
  const { showBookingModal, setShowBookingModal } = useContext(CartContext);
  const diamondContext = useContext(DiamondContext);
  const router = useRouter();

  const checkoutBtnClick = async () => {
    if (
      cartContext.diamond === undefined ||
      cartContext.setting === undefined
    ) {
      setError(true);
      return;
    }
    setError(false);
    const checkoutData = {
      diamondPrice: cartContext.diamondPrice * 100, // cents,
      diamondData: cartContext.diamond,
      settingData: `${cartContext.setting} `.concat(
        `${diamondContext.bandColor}`
      ),
      settingPrice: cartContext.settingPrice * 100,
      // TODO: Setting thickness
      // Ring Finger Size!!!
    };
    const res = await fetch(`/api/checkout_sessions`, {
      method: "POST",
      body: JSON.stringify(checkoutData),
    });
    const redirectURL = await res.json();
    console.log(redirectURL);
    router.push(redirectURL.url);
  };

  return (
    <>
      <div className="flex-col justify-center mb-10">
        <CheckoutItems
          onRemoveItem={(item) => {
            handleRemoveCartItem(item);
          }}
        ></CheckoutItems>
        <div className="flex-col w-full justify-center">
          <button
            onClick={checkoutBtnClick}
            class={`flex w-full justify-center text-white bg-[${hiraSlate}] py-4 px-8 focus:outline-none hover:bg-[${hiraSlate}] text-lg`}
          >
            <div className="px-32 py-2 border border-white">Checkout</div>
          </button>
          <button
            onClick={() => {
              setShowBookingModal(!showBookingModal);
            }}
            class={`flex w-full text-center justify-center text-white bg-[${hiraSlate}] py-2 px-8 focus:outline-none hover:bg-gray-600 text-lg -mt-2`}
          >
            <div className="py-2 -mt-2">Try before buying</div>
          </button>
        </div>
        {error && <ErrorCheckout setErrorState={setError}></ErrorCheckout>}
      </div>
    </>
  );
};

export default Checkout;
