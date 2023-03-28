import React, { useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CartContext from "./context/CartContext";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import ErrorCheckout from "../components/ErrorCheckout";
import Stepper from "./Stepper";
import Modal from "./Modal";
import CalendlyBooking from "./CalendlyBooking";

const Checkout = () => {
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
  const { showCalendly, setShowCalendly } = useContext(CartContext);
  const router = useRouter();
  const marginMultiplier = 1.2;

  const checkoutBtnClick = async () => {
    if (
      cartContext.diamond === undefined ||
      cartContext.setting === undefined
    ) {
      setError(true);
      console.log("Error Trued");
      return;
    }
    setError(false);
    const checkoutData = {
      diamondPrice: cartContext.diamondPrice * 100 * marginMultiplier, // cents,
      diamondData: cartContext.diamond,
      settingData: cartContext.setting,
      settingPrice: cartContext.settingPrice * 100,
      // TODO: Setting thickness, setting metal type
    };
    const res = await fetch(`/api/checkout_sessions`, {
      method: "POST",
      body: JSON.stringify(checkoutData),
    });
    const redirectURL = await res.json();
    router.push(redirectURL.url);
  };

  return (
    <>
      <div className="flex-col justify-center mx-2">
        <div className="flex mb-3 justify-center">
          <button
            onClick={checkoutBtnClick}
            class="flex text-white bg-gray-500 border-0 py-2 px-8 mx-2 focus:outline-none hover:bg-gray-600 rounded text-lg"
          >
            Checkout
          </button>
          <button
            onClick={() => {
              setShowCalendly(!showCalendly);
            }}
            class="flex  text-white bg-gray-500 border-0 py-2 px-8 mx-2 focus:outline-none hover:bg-gray-600 rounded text-lg"
          >
            Try before buying
          </button>
        </div>
        {error && <ErrorCheckout setErrorState={setError}></ErrorCheckout>}
      </div>
    </>
  );
};

export default Checkout;
