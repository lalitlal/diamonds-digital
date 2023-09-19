import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import LiveExpertBanner from "../components/LiveExpertBanner";
import { hiraBlackBG, shapes } from "../components/constants";
import OurValues from "../components/OurValues";
import WhatsIncluded from "../components/WhatsIncluded";
import SanityImages from "../components/SanityImages";

const inter = Inter({ subsets: ["latin"] });

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
        <Navbar></Navbar>
        <Header></Header>
        <MobileMenu></MobileMenu>
      </div>
      <Hero></Hero>
      <div
        className={`w-screen ${hiraBlackBG} text-white text-center font-Raleway`}
      >
        <div className="p-10">
          <h1 className="mb-4 font-bold text-4xl">Our Story</h1>
          <div className="md:flex md:justify-center">
            <div className="md:w-1/2">
              <SanityImages
                type={"Founders"}
                className="justify-center w-full items-center text-center -z-[10] md:px-5 object-cover"
              ></SanityImages>
            </div>
            <div className="md:w-1/2 md:text-left">
              {`At HIRA, we are more than just jewelers — we are a husband-wife duo driven by a shared mission: to ensure every couple embarks on their journey with an effortless and enjoyable engagement, marked by a high-quality, expertly crafted diamond ring that won't break the bank. 
            With a legacy rooted in a multi-generational family of goldsmiths and jewelers, our craft has been refined and passed down for over a century. 
            Specializing in custom diamond engagement rings, all proudly designed and made in Canada, 'HIRA' pays homage to our rich family heritage, where expertise has been cultivated through generations. 
            Our why is simple yet profound: couples should start their journey on the best foot possible. Real diamonds, authentic metals — that's the promise of HIRA. Our vision is to be your one-stop shop for engagement rings, dedicated to putting you at ease, offering a seamless experience where your dream ring becomes a tangible reality within your budget and timeline. Committed to our core values of Family, Integrity, and Affordability, we, as a husband-wife owned business, pour our hearts into crafting the perfect, one-of-a-kind diamond engagement ring for you, upholding the highest standards of quality, craftsmanship, and a personalized touch that only a family business can provide.`}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mb-4 font-bold text-4xl text-center font-Raleway mt-2">
          Our Promise
        </h1>
        <WhatsIncluded></WhatsIncluded>
      </div>
      <Testimonials></Testimonials>
      <OurValues></OurValues>
      <FAQ></FAQ>
      <Footer></Footer>
      {/* Custom Ring Banner Page*/}
    </>
  );
}
