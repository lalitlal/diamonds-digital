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
import {
  borderHiraBlack,
  hiraBlackBG,
  hiraSlate,
  hiraWhiteBG,
} from "./constants";
import Link from "next/link";
import WhatsIncluded from "./WhatsIncluded";
import CheckoutImageSlider from "./CheckoutImageSlider";

const Checkout = () => {
  const handleRemoveCartItem = (item) => {
    if (item.editLink === "/diamond") {
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
      cartContext.setting === undefined ||
      !cartContext.ringSize
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
    // console.log(redirectURL);
    router.push(redirectURL.url);
  };
  const [totalPrice, setTotalPrice] = useState(
    cartContext.diamondPrice + cartContext.settingPrice
  );
  useEffect(() => {
    setTotalPrice(cartContext.diamondPrice + cartContext.settingPrice);
  }, [cartContext.diamondPrice, cartContext.settingPrice]);

  return (
    <>
      <div className="flex-col justify-center mb-10">
        <h3 className="text-center font-Raleway font-bold text-lg">
          Your Shopping Cart
        </h3>
        <div className={`lg:flex`}>
          <div className={`lg:w-1/2 lg:mx-2`}>
            <CheckoutImageSlider></CheckoutImageSlider>
          </div>
          <div className={`lg:w-1/2`}>
            <CheckoutItems
              onRemoveItem={(item) => {
                handleRemoveCartItem(item);
              }}
            ></CheckoutItems>
            <WhatsIncluded></WhatsIncluded>
            <div className="justify-center w-full lg:flex">
              <button
                className={`flex w-full border border-black justify-center py-3 text-black ${hiraWhiteBG} ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2 mr-2 lg:mb-0 lg:mr-1`}
                onClick={() => {
                  setShowBookingModal(!showBookingModal);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Speak to an expert
              </button>
              <button
                className={`flex w-full justify-center py-3 text-white ${hiraBlackBG} focus:outline-none active:bg-black focus:bg-black text-lg`}
                onClick={checkoutBtnClick}
              >
                Complete Ring (CA$ {totalPrice})
              </button>
            </div>

            {error && <ErrorCheckout setErrorState={setError}></ErrorCheckout>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
