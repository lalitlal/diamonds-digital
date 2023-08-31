import "../styles/globals.css";
import { CartProvider } from "../components/context/CartContext";
import { DiamondContextProvider } from "../components/context/DiamondContext";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { pageview } from "../lib/gtag";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRoutechange = (url) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRoutechange);
    return () => {
      router.events.off("routeChangeComplete", handleRoutechange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <DiamondContextProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </DiamondContextProvider>
    </>
  );
}
