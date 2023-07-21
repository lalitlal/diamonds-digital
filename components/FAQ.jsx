import React from "react";

const FAQ = () => {
  const caret = (
    <svg
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M6 9l6 6 6-6"></path>
    </svg>
  );
  const faqElements = [
    {
      q: "How does it work?",
      a: "Easy as 1 2 3. Pick a diamond, pick a setting, checkout!",
    },
    {
      q: "How does billing work?",
      a: "We charge you a deposit to secure your custom diamond and build the mould, and the rest you pay on pickup!",
    },
    {
      q: "Can I see the ring in person?",
      a: "Absolutely! Our analytics team has a strong grip on people's favorites, from diamond shape and style, to setting. You can come into one of our stores and we'd be happy to show you an example ring that is nearly identical to the one you want!",
    },
    {
      q: "How do refunds work?",
      a: " We offers a 30-day money-back guarantee for most of our purchases. However, since these are custom rings, we charge a USD $300 to pay for the custom ring mold.",
    },
    {
      q: "Can I change my diamond?",
      a: "If you are not satisfied with your purchase, we allow once loose diamond change per customer. After that, any loose diamonds purchased are final sale.",
    },
    {
      q: "Can I change my setting?",
      a: "Settings are custom made, so we will charge you for the mold only.",
    },
    {
      q: "How do I contact support?",
      a: "If you need help with the platform or have any other questions, you can contact the company's support team by submitting a support request through the website or by emailing support@hira.com.",
    },
    {
      q: "Do you make custom rings?",
      a: "With over 65 years of experience. We prize ourselves in being able to make the most unique and extravagent diamond engagement rings that your partner will love. Send us a picture of what you want, and we'll get back to you.",
    },
    {
      q: "How do you compare to other services?",
      a: "This platform is a highly reliable and feature-rich service that offers a wide range of tools and functionality. It is competitively priced and offers a variety of billing options to suit different needs and budgets.",
    },
  ];
  return (
    <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-5xl mt-5 tracking-tight font-Raleway">FAQ</h2>
        <p class="text-gray-500 text-xl mt-3 font-Raleway">
          Frequenty asked questions
        </p>
      </div>
      <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        {faqElements.map((el, i) => {
          return (
            <div class="py-5" key={el + i}>
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> {el.q} </span>
                  <span class="transition group-open:rotate-180">{caret}</span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {el.a}
                </p>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
