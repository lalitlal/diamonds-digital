import React, { useState } from "react";
import {
  chevronLeft,
  chevronRight,
  hiraBlackBG,
  shapes,
  minSwipeDistance,
} from "./constants";

const OurValues = () => {
  const valueConst = [
    {
      shape: shapes.round.svg,
      value: "Quality",
      description: `Real diamonds. Real, solid metals. HIRA is a household name because our pieces stand the test of time. Our pieces are built to last.`,
    },
    {
      shape: shapes.pear.svg,
      value: "Service",
      description: `From first contact to delivery, to your anniversary, we take care of the HIRA family. Every customer is updated daily on their order status and receives communication within 1 hour of inquiry. We are by your side.`,
    },
    {
      shape: shapes.oval.svg,
      value: "Journey",
      description: `We bring you along the journey in a way that is fun and easy. This
      includes design iterations, final render, mould creation, ring
      completion, and real-time delivery tracking - our customers are
      always in the know.`,
    },
    {
      shape: shapes.princess.svg,
      value: "Integrity",
      description: `This is truly uncompromised. We value your time, your money, and
      your health - we prize ourselves in making your dream ring with
      premium material but a fraction of the cost!`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? valueConst.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === valueConst.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = (e) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isRightSwipe) {
      // Swipe right
      if (isRightSwipe) {
        handlePrev();
      }
    } else if (isLeftSwipe) {
      // Swipe left
      handleNext();
    }
  };

  return (
    <>
      <div
        className={`w-screen ${hiraBlackBG} text-white text-center font-Raleway hidden md:flex`}
      >
        <div className="p-10">
          <h1 className="mb-4 font-bold text-4xl flex justify-center">
            Our Values
          </h1>
          <div className="lg:flex lg:text-center lg:items-center lg:justify-center">
            <div>
              <h1 className="mb-4 font-bold text-2xl justify-center">
                <div className="flex justify-center py-4">
                  {shapes.round.svg}
                </div>
                Quality
              </h1>
              <div className="lg:mx-2">
                {`Real diamonds. Real, solid metals. HIRA is a household name
              because our pieces stand the test of time. Our pieces are built to
              last.`}
              </div>
            </div>
            <div>
              <h1 className="mb-4 font-bold text-2xl justify-center">
                <div className="flex justify-center py-4">
                  {shapes.oval.svg}
                </div>
                Service
              </h1>
              <div className="lg:mx-2">
                {`From first contact to delivery, to your anniversary, we take care
              of the HIRA family. Every customer is updated daily on their order
              status and receives communication within 1 hour of inquiry. We are
              by your side.`}
              </div>
            </div>
            <div>
              <h1 className="mb-4 font-bold text-2xl justify-center">
                <div className="flex justify-center py-4">
                  {shapes.pear.svg}
                </div>
                Journey
              </h1>
              <div className="lg:mx-2">
                {`We bring you along the journey in a way that is fun and easy. This
              includes design iterations, final render, mould creation, ring
              completion, and real-time delivery tracking - our customers are
              always in the know.`}
              </div>
            </div>
            <div>
              <h1 className="mb-4 font-bold text-2xl justify-center">
                <div className="flex justify-center py-4">
                  {shapes.marquise.svg}
                </div>
                Integrity
              </h1>
              <div className="lg:mx-2">
                {`This is truly uncompromised. We value your time, your money, and
              your health - we prize ourselves in making your dream ring with
              premium material but a fraction of the cost!`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden md:hidden font-Raleway">
        <h1 className="mb-4 font-bold text-4xl flex justify-center">
          Our Values
        </h1>
        <div
          className="flex transition-transform duration-300 ease-in-out scale-50"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {valueConst.map((val, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 justify-center text-center ${hiraBlackBG} text-white z-10`}
            >
              <h1 className="mb-4 font-bold text-2xl justify-center">
                <div className="flex justify-center py-4">{val.shape}</div>
                {val.value}
              </h1>
              <div className="lg:mx-2 mb-2">{val.description}</div>
            </div>
          ))}
        </div>
        <button
          className={`absolute top-1/3 transform -translate-y-1/2 left-0  ${hiraBlackBG} text-white z-10`}
          onClick={handlePrev}
        >
          {chevronLeft}
        </button>
        <button
          className={`absolute top-1/3 transform -translate-y-1/2 right-0 ${hiraBlackBG} text-white z-10`}
          onClick={handleNext}
        >
          {chevronRight}
        </button>
      </div>
    </>
  );
};

export default OurValues;
