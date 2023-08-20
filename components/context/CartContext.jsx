import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // CART CONTEXTS!
  const [diamondShape, setDiamondShape] = useState(undefined);
  const [diamond, setDiamond] = useState(undefined);
  const [setting, setSetting] = useState(undefined);
  const [diamondPrice, setDiamondPrice] = useState(0.0);
  const [settingPrice, setSettingPrice] = useState(0.0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [ringSize, setRingSize] = useState(null);

  return (
    <CartContext.Provider
      value={{
        diamondShape,
        setDiamondShape,
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
        showMobileMenu,
        setShowMobileMenu,
        ringSize,
        setRingSize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
