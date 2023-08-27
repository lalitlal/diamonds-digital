import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import DiamondPage from "../../components/DiamondPage";
import Stepper from "../../components/Stepper";
import Breadcrumb from "../../components/BreadCrumb";
import {
  hiraBlackBGMD,
  hiralightGrayBGMD,
  navigationBreadCrums,
} from "../../components/constants";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";
import FullDiamondFilterPage from "../../components/FullDiamondFilterPage";
import DiamondFilter from "../../components/DiamondFilter";
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
        <Navbar></Navbar>
        <SecondaryHeader></SecondaryHeader>
        <MobileMenu></MobileMenu>
      </div>
      <div className="mx-4 lg:hidden">
        <Breadcrumb navDetails={navigationBreadCrums["Home"]}></Breadcrumb>
        <Stepper stage={0}></Stepper>
      </div>
      <div className="lg:flex lg:h-screen">
        <div className={`${hiralightGrayBGMD}`}>
          <div className="">
            <FullDiamondFilterPage></FullDiamondFilterPage>
          </div>
          <div className={`lg:hidden`}>
            <DiamondFilter></DiamondFilter>
          </div>
        </div>
        <div className={`lg:max-h-screen lg:overflow-y-scroll lg:mx-4`}>
          <div className="hidden lg:block w-full">
            <div>
              <Stepper stage={0}></Stepper>
            </div>
          </div>
          <DiamondPage></DiamondPage>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
