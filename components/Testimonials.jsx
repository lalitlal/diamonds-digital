import React from "react";
import Testimony from "./Testimony";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Cassandra",
      purchase: "Oval solitaire hidden halo yellow gold",
      review:
        "My fiance got me the exact ring I wanted. It's like he contacted the original photo model and purchased it from them!",
      img_src: "",
    },
    {
      name: "Rabjot",
      purchase: "Princess pave bridge white gold",
      review:
        "I was able to design the ring of my dreams, and HIRA made it happen! No more waiting for our 10-year anniversary to upgrade, this is my forever!",
      img_src: "",
    },
    {
      name: "Jasdeep",
      purchase: "Radiant cathedral bridge yellow gold",
      review:
        "HIRA fully involved me in the process as much as I wanted to be, and gave above and beyond my expectations. I'm a happy fiance!",
      img_src: "",
    },
    {
      name: "Lalit",
      purchase: "Emerald solitaire halo white gold",
      review:
        "HIRA was able to copy the exact ring my fiance wanted, it took all the guesswork out for me!",
      img_src: "",
    },
    {
      name: "Domara",
      purchase: "Toi et moi cathedral yellow gold",
      review:
        "I've heard that engagement ring shopping can be stressful and quite the gamble - but HIRA was able to make this process so enjoyable and helped me give my fiance the best ring! She was blown away,",
      img_src: "",
    },
    {
      name: "John",
      purchase: "Brilliant Round hidden halo white gold",
      review:
        "My fiance and I have been dreaming of creating a very particular ring. We shopped around for a while, but only HIRA was able to deliver exactly to spec! I'm actually shocked at their accuracy and timeliness!",
      img_src: "",
    },
  ];
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Testimonials
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Hear from real customers that chose HIRA.
          </p>
        </div>
        <div class="flex flex-wrap -m-4 justify-center">
          {/* <div class="lg:w-1/3 sm:w-1/2 p-4"></div> */}
          {testimonials.map((tmoney, i) => {
            return (
              <>
                <div className="flex relative lg:w-1/3 sm:w-1/2 p-4 justify-center items-stretch">
                  <Testimony
                    name={tmoney.name}
                    purchase={tmoney.purchase}
                    review={tmoney.review}
                    source={tmoney.img_src}
                  ></Testimony>
                </div>
              </>
            );
          })}
          {/* <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/606x366"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Alper Kamu
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
