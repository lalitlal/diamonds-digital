import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

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

  return (
    <form action="/api/checkout_sessions" method="POST">
      <div className="flex">
        <button
          type="submit"
          role="link"
          className="flex justify-center leading-tight tracking-tight text-center border-2 border-gray-500 text-gray-500 p-3 hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
        >
          Checkout
        </button>
      </div>
    </form>
  );
};

export default Checkout;
