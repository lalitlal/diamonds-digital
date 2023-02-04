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
      <Footer></Footer>
    </>
  );
}
