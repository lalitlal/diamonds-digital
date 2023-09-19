import React from "react";

const FAQ = () => {
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
      q: "I need help buying a ring from your website. What should I do?",
      a: "Go ahead and give us a call at the number up top, or send us a message in the message icon, or email us at team@hiradiamonds.com. Our staff will reply within 1 hour.",
    },
    {
      q: "What kind of warranty do I have?",
      a: "HIRA Diamonds offers a free Lifetime Warranty from the date of invoice against any manufacturing defects on all gold and platinum jewellery. Read more about our full warranty terms and conditions here.",
    },
    {
      q: "Do you ship worldwide?",
      a: "Yes! At HIRA Diamonds we offer free international shipping on all orders.",
    },
    {
      q: "How does it work?",
      a: "Easy as 1 2 3. Pick a diamond, pick a setting, checkout!",
    },
    {
      q: "Can I see the ring in person?",
      a: "Absolutely! Our analytics team has a strong grip on people's favorites, from diamond shape and style, to setting. You can come into one of our stores and we'd be happy to show you an example ring that is nearly identical to the one you want!",
    },
    {
      q: "How do I find my ring size?",
      a: "We recommend that you visit a local jeweller to get your ring size measured.",
    },
    {
      q: "Can you help me keep my purchase a surprise?",
      a: "Absolutely! All of our products come in subtle packaging to ensure you have full control over your special moment. Please let us know if we can help you in any other way to keep your purchase a surprise!",
    },
    {
      q: "Can I return a product?",
      a: "All HIRA Diamonds rings are custom made to order and they cannot be returned. Please choose carefully when purchasing. If you have a question or require assistance, please call or message or email us.",
    },
    {
      q: "My ring doesn't fit perfectly. Do you resize?",
      a: "Absolutely! All HIRA Diamonds rings come with one free resizing within the first six months of purchase. *Free resize to maximum of 2 sizes up or down. Read more about resizing.",
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
