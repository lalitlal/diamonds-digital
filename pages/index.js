import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import RingSettings from "../components/RingSettings";
import ProductDetail from "../components/ProductDetail";
import Testimony from "../components/Testimony";

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
      <Navbar></Navbar>
      <Header></Header>
      <Hero></Hero>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      {/* <RingSettings></RingSettings> */}
      {/* <ProductDetail></ProductDetail> */}
      <Footer></Footer>

      {/* DIAMOND SELECTION PAGE: FOR EACH ROW ENTRY, CLICK SELECT to add diamond to cart */}
      {/* CONTEXT FOR A CART */}
      {/* MARKETPLACE FOR RING SETTINGS */}
      {/* SELECTION OPTION FOR EACH RING SETTING */}
      {/* STRIPE CHECKOUT */}
      {/* PHOTOSHOOT FOR WEDDING BANDS, DIAMONDS, AND RINGS */}
      {/* CHECKOUT: WHAT COMES WITH EACH PURCHASE */}
      {/* Fill pictures for GALLERY */}
    </>
  );
}
