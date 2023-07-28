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
      <Footer></Footer>
      {/* Custom Ring Banner PageMasdasd*/}
      {/* Fix Delete Icons Alignment - USING DIVS AND FLEX FOR LINE ITEMS*/}
      {/* Make Hero on Main page to be a slider of images */}
      {/* Fill pictures for GALLERY */}
    </>
  );
}
