import React from "react";
import Testimony from "./Testimony";
import CarouselTestimonials from "./CarouselTestimonials";

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
    <div class="text-black body-font">
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-Raleway title-font mb-4 text-black">
            Testimonials
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Hear from real customers that chose HIRA.
          </p>
        </div>
        <div className="lg:hidden">
          <CarouselTestimonials data={testimonials}></CarouselTestimonials>
        </div>
        <div class="hidden -m-4 justify-center lg:flex lg:flex-wrap">
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
