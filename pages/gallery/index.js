import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import FAQ from "../../components/FAQ";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";
import RingSettings from "../../components/RingSettings";
import Testimony from "../../components/Testimony";
import Gallery from "../../components/Gallery";
import MobileMenu from "../../components/MobileMenu";
import SecondaryHeader from "../../components/SecondaryHeader";
import LiveExpertBanner from "../../components/LiveExpertBanner";

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
        {/* <Navbar></Navbar> */}
        {/* <SecondaryHeader></SecondaryHeader> */}
        <Header></Header>
        <MobileMenu></MobileMenu>
      </div>
      <div className="mx-4">
        <Gallery></Gallery>
      </div>
      <Footer></Footer>
    </>
  );
}
