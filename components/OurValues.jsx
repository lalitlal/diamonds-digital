import React from "react";
import { hiraBlackBG, shapes } from "./constants";

const OurValues = () => {
  return (
    <div
      className={`w-screen ${hiraBlackBG} text-white text-center font-Raleway`}
    >
      <div className="p-10">
        <h1 className="mb-4 font-bold text-4xl flex justify-center">
          Our Values
        </h1>
        <div className="lg:flex lg:text-center lg:items-center lg:justify-center">
          <div>
            <h1 className="mb-4 font-bold text-2xl justify-center">
              <div className="flex justify-center py-4">{shapes.round.svg}</div>
              Uncompromised Quality
            </h1>
            <div className="lg:mx-2">
              Real diamonds. Real, solid metals. HIRA is a household name
              because our pieces stand the test of time. Our pieces are built to
              last.
            </div>
          </div>
          <div>
            <h1 className="mb-4 font-bold text-2xl justify-center">
              <div className="flex justify-center py-4">{shapes.oval.svg}</div>
              Uncompromised Service
            </h1>
            <div className="lg:mx-2">
              From first contact to delivery, to your anniversary, we take care
              of the HIRA family. Every customer is updated daily on their order
              status and receives communication within 1 hour of inquiry. We are
              by your side.
            </div>
          </div>
          <div>
            <h1 className="mb-4 font-bold text-2xl justify-center">
              <div className="flex justify-center py-4">{shapes.pear.svg}</div>
              Uncompromised Journey
            </h1>
            <div className="lg:mx-2">
              We bring you along the journey in a way that is fun and easy. This
              includes design iterations, final render, mould creation, ring
              completion, and real-time delivery tracking - our customers are
              always in the know.
            </div>
          </div>
          <div>
            <h1 className="mb-4 font-bold text-2xl justify-center">
              <div className="flex justify-center py-4">
                {shapes.marquise.svg}
              </div>
              Uncompromised Integrity
            </h1>
            <div className="lg:mx-2">
              This is truly uncompromised. We value your time, your money, and
              your health - we prize ourselves in making your dream ring with
              premium material but a fraction of the cost!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
