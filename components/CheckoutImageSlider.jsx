import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import {
  borderHiraBlack,
  hiraDarkGrayText,
  hiralightGrayBG,
} from "./constants";
import ImageSlider from "./ImageSlider";
import Carousel from "./Carousel";
import { getCheckoutItem } from "../sanity/sanity-utils";

const CheckoutImageSlider = () => {
  const cartContext = useContext(CartContext);
  const diamondContext = useContext(DiamondContext);
  const [unfinishedCart, setUnfinishedCart] = useState(false);
  const [imageSlider, setImageSlider] = useState(undefined);
  const [products, setProducts] = useState([]);

  const dummyImageURL = "https://dummyimage.com/420x260";

  const chosenDiamondShapeUpperCased = useCallback(() => {
    if (
      cartContext.diamondShape !== null &&
      cartContext.diamondShape !== undefined
    ) {
      return (
        cartContext.diamondShape.charAt(0).toUpperCase() +
        cartContext.diamondShape.slice(1)
      );
    }
    return undefined;
  }, [cartContext.diamondShape]);

  useEffect(() => {
    // update cart context if diamond changed
    if (cartContext.setting !== undefined) {
      const chosenDiamondShape = chosenDiamondShapeUpperCased();
      const currentCartSettingDiamond = cartContext.setting.split(" - ")[1];
      if (
        currentCartSettingDiamond !== chosenDiamondShape &&
        chosenDiamondShape !== undefined
      ) {
        const newCartSettingDiamond = cartContext.setting.replace(
          currentCartSettingDiamond,
          chosenDiamondShape
        );
        cartContext.setSetting(newCartSettingDiamond);
      }
    }
  }, [cartContext, chosenDiamondShapeUpperCased]);

  useEffect(() => {
    // refresh checkout products on context update
    const fetchProducts = async () => {
      try {
        const chosenDiamondShape = chosenDiamondShapeUpperCased();

        const title =
          cartContext.setting === undefined
            ? "Classic"
            : cartContext.setting.split(" - ")[0];

        const variantName =
          cartContext.setting === undefined
            ? `Classic - ${
                chosenDiamondShape === undefined ? "Oval" : chosenDiamondShape
              } - ${diamondContext.bandColor}`
            : `${title} - ${
                chosenDiamondShape === undefined ? "Oval" : chosenDiamondShape
              } - ${diamondContext.bandColor}`;

        const productsData = await getCheckoutItem(title, variantName);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [
    diamondContext.bandColor,
    cartContext.setting,
    chosenDiamondShapeUpperCased,
  ]);

  useEffect(() => {
    // set image slider on context updates
    const chosenDiamondShape = chosenDiamondShapeUpperCased();
    if (products !== null && products != undefined && products.length > 0) {
      const variant = products[0].variants;
      const imageAlts = Array.from(
        {
          length:
            variant !== null && variant !== undefined && variant.length > 0
              ? variant[0].images.length
              : 1,
        },
        (_, index) =>
          `${
            variant !== null && variant !== undefined && variant.length > 0
              ? `${variant[0].variantDescription}_${index}`
              : `${
                  chosenDiamondShape === undefined ? "Oval" : chosenDiamondShape
                }-${diamondContext.bandColor}_${index}_placeholder`
          }`
      );
      const dummyImageSlider = (
        <ImageSlider
          checkout={true}
          images={[dummyImageURL]}
          imagesAlt={["The Best Diamond Image Slider"]}
          imageClass={"object-contain object-center"}
        ></ImageSlider>
      );
      const newImageSlider =
        variant !== undefined && (variant !== null) & (variant.length > 0) ? (
          <Carousel images={variant[0].images} />
        ) : (
          { dummyImageSlider }
        );
      setImageSlider(newImageSlider);
    }
  }, [products, diamondContext.bandColor, chosenDiamondShapeUpperCased]);

  const cartInfo = useMemo(() => {
    return [
      {
        description:
          cartContext.diamond === undefined
            ? undefined
            : ` ${cartContext.diamond} `,
        name: `${cartContext.diamond}`,
        price: ` CAD$ `.concat(cartContext.diamondPrice),
        editLink: "/diamond",
        missingText: "Select Diamond",
      },
      {
        description:
          cartContext.setting === undefined
            ? undefined
            : ` ${cartContext.setting} `,
        name: diamondContext.settingDetails.name,
        price: ` CAD$ `.concat(cartContext.settingPrice),
        editLink: "/ringsettings",
        missingText: "Select Ring",
      },
    ];
  }, [
    cartContext.diamond,
    cartContext.diamondPrice,
    cartContext.setting,
    cartContext.settingPrice,
  ]);

  useEffect(() => {
    if (cartContext.diamond) {
      setUnfinishedCart(false);
    } else {
      setUnfinishedCart(true);
    }
  }, [cartContext.diamond]);

  return (
    <>
      {unfinishedCart && (
        <div
          className={`flex w-full lg:h-full lg:py-24 justify-center items-center text-center py-2 ${hiraDarkGrayText} ${hiralightGrayBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2 h-48`}
        >
          <div className="mx-8">
            To continue, please select a diamond and ring
          </div>
        </div>
      )}
      {cartInfo[0].description !== undefined &&
        cartInfo[1].description !== undefined &&
        imageSlider}
      {cartInfo[0].description !== undefined &&
        cartInfo[1].description !== undefined && (
          <div className="text-xs justify-center text-center">
            *Picture shown 3 carat diamond and 2mm band.
          </div>
        )}
    </>
  );
};

export default CheckoutImageSlider;
