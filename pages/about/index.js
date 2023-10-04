import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import FAQ from "../../components/FAQ";
import Testimonials from "../../components/Testimonials";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";
import LiveExpertBanner from "../../components/LiveExpertBanner";
import {
  borderHiraBlack,
  hiraBlackBG,
  hiraDarkBrownBG,
  hiraWhiteBG,
  shapes,
} from "../../components/constants";
import SanityImages from "../../components/SanityImages";
import OurValues from "../../components/OurValues";
import SecondaryHeader from "../../components/SecondaryHeader";

const inter = Inter({ subsets: ["latin"] });
const speakButton = (
  <div
    className={`flex w-full justify-center py-2 text-black ${hiraWhiteBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg my-2 hover:cursor-pointer`}
  >
    Speak to an expert
  </div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>HIRA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LiveExpertBanner></LiveExpertBanner>
      <div className="relative">
        <NavBar></NavBar>
        {/* <Header></Header> */}
        <SecondaryHeader></SecondaryHeader>
        <MobileMenu></MobileMenu>
      </div>
      <div
        className={`w-screen ${hiraDarkBrownBG} text-white text-center font-Raleway`}
      >
        <div className="p-10">
          <h1 className="font-bold text-4xl">Our Story</h1>
        </div>
      </div>

      <div
        className={`w-screen ${hiraWhiteBG} text-black text-center font-Raleway`}
      >
        <div className="p-10 lg:flex">
          <div>
            <SanityImages
              type={"Lifestyle"}
              className=" w-screen pt-3 md:w-full h-auto md:h-[60vh] lg:h-[60vh] justify-center items-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl -z-[10] md:px-5 object-cover"
              imgIndex={0}
            ></SanityImages>
          </div>
          <div className="lg:w-3/4">
            <h1 className="mb-4 font-bold text-4xl flex justify-center">
              About Us
            </h1>
            <div className="h-full flex flex-col justify-center">
              <div className="text-justify lg:text-xl">
                {`We started with a simple mission. Every couple should experience
                an effortless and enjoyable engagement - with a high quality,
                expert crafted diamond ring that doesn't break the bank.`}
              </div>
              <div className="text-justify lg:text-xl lg:mt-2">
                {`We are a multi-generational family of gold smiths and jewellers
                who specialize in creating custom diamond engagement rings. All
                of our rings are proudly designed and made in Canada.`}
              </div>
              <div className="text-justify lg:text-xl lg:mt-2">
                {`Our name reflects the rich origins of our family trade that has
                been taught and carried on for over 100 years. HIRA ([Hee-rah] is an ancient, South Asian term meaning diamond.)`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-screen ${hiraWhiteBG} text-black text-center font-Raleway`}
      >
        <div className="p-10">
          {/* <h1 className="mb-4 font-bold text-4xl flex justify-center">
            Our Values
          </h1> */}
          <div className="lg:flex lg:text-center lg:items-center lg:justify-center">
            <div>
              <h1 className="mb-4 font-bold text-2xl justify-center">
                <div className="flex justify-center py-4">
                  {shapes.round.svg}
                </div>
                Our Why
              </h1>
              <div className="lg:mx-2">
                {`Couples should start their journey on their best foot forward.
                That's why we're here to give you your dream ring at a fraction
                of the cost. Real diamonds, authentic metals. That's HIRA.`}
              </div>
            </div>
            <div>
              <h1 className="mb-4 font-bold text-2xl justify-center">
                <div className="flex justify-center py-4">
                  {shapes.round.svg}
                </div>
                Our Vision
              </h1>
              <div className="lg:mx-2">
                {`Our vision is to create a one stop shop for engagement rings and
                completely put you at ease. This is the place where you can ask
                us to copy that ring on TikTok or Instagram, and you can rest
                assured that we will deliver in your budget and in your
                timeline.`}
              </div>
            </div>

            <div>
              <h1 className="mb-4 font-bold text-2xl justify-center">
                <div className="flex justify-center py-4">
                  {shapes.round.svg}
                </div>
                Our Mission
              </h1>
              <div className="lg:mx-2">
                {`We are committed to build you the perfect diamond engagement
                ring that is made for one. Using the highest quality materials,
                expert craftsmanship and a completely personalized shopping
                experience.`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-screen bg-emerald-900 text-white text-center font-Raleway`}
      >
        <div className={`w-screen  text-white text-center font-Raleway`}>
          <div className="p-10">
            <h1 className="mb-4 font-bold text-4xl">Our Pillars</h1>
            <div className="lg:text-xl">
              This is what we stand for, and what we stand on.
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-screen ${hiraWhiteBG} text-black text-center font-Raleway`}
      >
        <div className="p-10 lg:flex">
          {/* PT 1 */}
          <div>
            <SanityImages
              type={"Lifestyle"}
              className="w-screen md:w-full h-auto md:h-[60vh] lg:h-[60vh] justify-center items-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl -z-[10] md:px-5 object-cover"
              imgIndex={1}
            ></SanityImages>
          </div>
          <div className="lg:w-3/4">
            <h1 className="mb-4 font-bold text-2xl flex justify-center text-justify">
              Family
            </h1>
            <div className="text-justify lg:text-xl">
              {`HIRA is a family owned business. Passed down generation after
              generation, the art of creating fine jewelery is in our blood. We
              pride ourselves for being in industry for over 150 years. As a
              family owned business, we value the family unit. We aspire to
              continue to build HIRA into a household name that we can pass down
              to our kids. For this very reason our family business is committed
              to making you feel like family. Did we mention we're obsessed with
              fine jewelery? Let us be a part of your heirloom journey - let us
              create a timeless piece that you can pass down, generation after
              generation.`}
            </div>
            {speakButton}
          </div>
        </div>
        <div className="p-10 lg:flex">
          {/* P2 1 */}
          <div className="block lg:hidden">
            <SanityImages
              type={"Lifestyle"}
              className="w-screen md:w-full h-auto md:h-[60vh] lg:h-[60vh] justify-center items-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl -z-[10] md:px-5 object-cover"
              imgIndex={2}
            ></SanityImages>
          </div>
          <div className="lg:w-3/4">
            <h1 className="mb-4 font-bold text-2xl flex justify-center">
              Integrity
            </h1>
            <div className="text-justify lg:text-xl">
              {`After being in business for over a century, we've built lifelong
              relationships with our clients. Our clients trust us to give them
              transparency on the origins, quality, and cost of their product,
              and you can too. When you work with HIRA, you work with an
              established business that values your satisfaction and experience
              far beyond anything else.`}
            </div>
            {speakButton}
          </div>
          <div className="hidden lg:block">
            <SanityImages
              type={"Lifestyle"}
              className="w-screen md:w-full h-auto md:h-[60vh] lg:h-[60vh] justify-center items-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl -z-[10] md:px-5 object-cover"
              imgIndex={2}
            ></SanityImages>
          </div>
        </div>
        <div className="p-10 lg:flex">
          {/* PT 1 */}
          <div>
            <SanityImages
              type={"Lifestyle"}
              className="w-screen md:w-full h-auto md:h-[60vh] lg:h-[60vh] justify-center items-center transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl -z-[10] md:px-5 object-cover"
              imgIndex={3}
            ></SanityImages>
          </div>
          <div className="lg:w-3/4">
            <h1 className="mb-4 font-bold text-2xl flex justify-center text-justify">
              Affordability
            </h1>
            <div className="text-justify lg:text-xl">
              {`If you're on our website and notice that our pricing is
              significantly cheaper than anywhere else you've gone - don't be
              shocked! We source real, certified lab-grown diamonds, and our
              metals are authentic. Our pricing is founded on our existing
              principles of family and integrity. Because of this pillar, many
              families have gotten their dream ring without skipping a beat in
              starting their lives together, because we value your relationship
              above your dollar. If you have any questions about our pricing or
              materials, our founders would be happy to speak with you in
              person!`}
            </div>
            {speakButton}
          </div>
        </div>
      </div>
      <OurValues></OurValues>
      <Footer></Footer>
    </>
  );
}
