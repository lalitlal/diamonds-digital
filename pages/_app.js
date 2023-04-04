import "../styles/globals.css";
import CartContext from "../components/context/CartContext";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [diamond, setDiamond] = useState(undefined);
  const [setting, setSetting] = useState(undefined);
  const [diamondPrice, setDiamondPrice] = useState(0.0);
  const [settingPrice, setSettingPrice] = useState(0.0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  return (
    <CartContext.Provider
      value={{
        diamond,
        setDiamond,
        setting,
        setSetting,
        settingPrice,
        setSettingPrice,
        diamondPrice,
        setDiamondPrice,
        showBookingModal,
        setShowBookingModal,
        showCartModal,
        setShowCartModal,
      }}
    >
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}
