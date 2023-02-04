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
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M6 9l6 6 6-6"></path>
    </svg>
  );
  return (
    <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-5xl mt-5 tracking-tight font-Raleway">FAQ</h2>
        <p class="text-gray-500 text-xl mt-3 font-Raleway">
          Frequenty asked questions
        </p>
      </div>
      <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> How does it work?</span>
              <span class="transition group-open:rotate-180">{caret}</span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Easy as 1 2 3. Pick a diamond, pick a setting, checkout!
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> How does billing work?</span>
              <span class="transition group-open:rotate-180">{caret}</span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
              {" "}
              We charge you a deposit to secure your custom diamond and kick-off
              creating the custom setting.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Can I see the ring in person?</span>
              <span class="transition group-open:rotate-180">{caret}</span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Absolutely! Our analytics team has a strong grip on people&apos;s
              favorites, from diamond shape and style, to setting. You can come
              into one of our stores and we&apos;d be happy to show you an
              example ring that is nearly identical to the one you want!
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> How do refunds work?</span>
              <span class="transition group-open:rotate-180">{caret}</span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
              We offers a 30-day money-back guarantee for most of our purchases.
              However, since these are custom rings, we charge a USD $300 to pay
              for the custom ring mold.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Can I change my diamond?</span>
              <span class="transition group-open:rotate-180">{caret}</span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
              If you are not satisfied with your purchase, we allow once loose
              diamond change per customer. After that, any loose diamonds
              purchased are final sale.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Can I change my setting?</span>
              <span class="transition group-open:rotate-180">{caret}</span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Settings are custom made, so we will charge you for the mold only.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> How do I contact support?</span>
              <span class="transition group-open:rotate-180">{caret}</span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
              If you need help with the platform or have any other questions,
              you can contact the company&apos;s support team by submitting a
              support request through the website or by emailing
              support@hira.com.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                I have a really custom ring that I want to make, can you do it?
              </span>
              <span class="transition group-open:rotate-180">{caret}</span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
              With over 65 years of experience. We prize ourselves in being able
              to make the most unique and extravagent diamond engagement rings
              that your partner will love. Send us a picture of what you want,
              and we&apos;ll get back to you.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> How do we compare to other similar services?</span>
              <span class="transition group-open:rotate-180">{caret}</span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
              This platform is a highly reliable and feature-rich service that
              offers a wide range of tools and functionality. It is
              competitively priced and offers a variety of billing options to
              suit different needs and budgets.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
