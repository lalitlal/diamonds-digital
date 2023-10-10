import React, { useState } from "react";
import { hiraDarkBrownText } from "./constants";

const FAQ = () => {
  const [showAns, setShowAns] = useState(undefined);
  const caretRotation = (index) => {
    return showAns === index ? "rotate-180" : "";
  };
  const caret = (
    <svg
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M6 9l6 6 6-6"></path>
    </svg>
  );
  const faqElements = [
    {
      q: "Can show me how to buy online?",
      a: "Hit the chat icon. Email us team@hiradiamonds.com. Our staff will reply within 1 hour and answer any questions you have.",
    },
    {
      q: "What kind of warranty do I have?",
      a: "HIRA Diamonds offers a free Lifetime Warranty from the date of invoice against any manufacturing defects on all gold and platinum jewellery.",
    },
    {
      q: "Do you ship worldwide?",
      a: "We offer free international shipping on all orders.",
    },
    {
      q: "How does it work?",
      a: "Easy as 1 2 3. Pick a diamond, pick a setting, checkout!",
    },
    {
      q: "Can I see the ring in person?",
      a: "WeBook a meeting and we can show you your ring in person!",
    },
    {
      q: "How do I find my ring size?",
      a: "We recommend that you visit a local jeweller to get your ring size measured.",
    },
    {
      q: "Can you keep my purchase a surprise?",
      a: "Absolutely! All of our products come in subtle packaging to ensure you have full control over your special moment.",
    },
    {
      q: "Can I return a product?",
      a: "All HIRA Diamonds rings are custom made to order and they cannot be returned unless they have a defect. Please choose carefully when purchasing. If you have a question or require assistance, please call or message or email us.",
    },
    {
      q: "My ring doesn't fit perfectly. Do you resize?",
      a: "Yes! All HIRA Diamonds rings come with one free resizing within the first six months of purchase. *Free resize to maximum of 2 sizes up or down.",
    },
  ];
  return (
    <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
      <div class="flex flex-col items-center">
        <h1
          className={`mt-4 font-bold text-4xl flex justify-center text-emerald-900`}
        >
          FAQ
        </h1>
        <p class={`text-2xl mt-2 ${hiraDarkBrownText}`}>
          Frequently asked questions
        </p>
      </div>
      <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        {faqElements.map((el, i) => {
          return (
            <div
              class="py-5"
              key={el + i}
              onClick={() => {
                showAns === i ? setShowAns(undefined) : setShowAns(i);
              }}
            >
              <div class="flex justify-between font-medium cursor-pointer list-none">
                <div className="text-left text-lg"> {el.q} </div>
                <div className={`transition transform ${caretRotation(i)}`}>
                  {caret}
                </div>
              </div>
              <div class="text-neutral-600 mt-3 group-open:animate-fadeIn text-lg">
                {showAns === i && el.a}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
