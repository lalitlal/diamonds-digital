import React, { useEffect, useState } from "react";
import Testimony from "./Testimony";
import CarouselTestimonials from "./CarouselTestimonials";
import { getTestimonials } from "../sanity/sanity-utils";
import urlBuilder from "@sanity/image-url";
import { client } from "../sanity/lib/client";
import { hiraDarkBrownText } from "./constants";

const Testimonials = () => {
  const imgUrlBuilder = urlBuilder(client);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await getTestimonials();
      const testis = res.map((testi, index) => {
        const imageSource = imgUrlBuilder.image(testi.image).url();
        return { ...testi, img: imageSource };
      });
      setTestimonials(testis); // Note that we wrap the imageSource in an array to match your setHeroImages usage
    };
    fetchTestimonials();
    return () => {};
  }, []);
  return (
    <div class={`${hiraDarkBrownText}`}>
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          {/* <h1 class="sm:text-3xl text-2xl font-Raleway title-font mb-4 text-black">
            Testimonials
          </h1> */}
          <h1
            className={`mb-4 font-bold text-4xl text-center mt-2 ${hiraDarkBrownText}`}
          >
            Testimonials
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-emerald-900">
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
                    purchase={tmoney.order}
                    review={tmoney.review}
                    source={tmoney.img}
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
