import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import DiamondPage from "../../components/DiamondPage";
import Stepper from "../../components/Stepper";

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
      <Stepper stage={0}></Stepper>
      <DiamondPage></DiamondPage>
    </>
  );
}
