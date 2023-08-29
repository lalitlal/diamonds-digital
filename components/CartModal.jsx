import Link from "next/link";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartContext } from "./context/CartContext";
import { DiamondContext } from "./context/DiamondContext";
import ImageSlider from "./ImageSlider";
import { getCheckoutItem } from "../sanity/sanity-utils";
import Carousel from "./Carousel";
import Checkout from "./Checkout";
import CheckoutItems from "./CheckoutItems";
import { borderHiraBlack, hiraBlackBG, hiraWhiteBG, xIcon } from "./constants";
import CheckoutImageSlider from "./CheckoutImageSlider";

function CartModal({ onRemoveItem }) {
  const cartContext = useContext(CartContext);
  const diamondContext = useContext(DiamondContext);
  const [cartEmpty, setCartEmpty] = useState(false);
  const [imageSlider, setImageSlider] = useState(undefined);
  const [products, setProducts] = useState([]);
  const dummyImageURL = "https://dummyimage.com/420x260";

  const handleRemoveCartItem = (item) => {
    if (item.editLink === "/diamond") {
      cartContext.setDiamond(undefined);
      cartContext.setDiamondPrice(0);
    } else {
      cartContext.setSetting(undefined);
      cartContext.setSettingPrice(0);
    }
  };

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
          // <ImageSlider
          //   checkout={true}
          //   images={variant[0].images}
          //   imagesAlt={imageAlts}
          //   imageClass={"object-contain object-center"}
          // ></ImageSlider>
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
        name: "Loose Diamond",
        price: ` USD$ `.concat(cartContext.diamondPrice),
      },
      {
        description:
          cartContext.setting === undefined
            ? undefined
            : ` ${cartContext.setting} `,
        name: "Setting",
        price: ` USD$ `.concat(cartContext.settingPrice),
      },
    ];
  }, [
    cartContext.diamond,
    cartContext.diamondPrice,
    cartContext.setting,
    cartContext.settingPrice,
  ]);

  const [totalPrice, setTotalPrice] = useState(
    parseFloat(String(cartContext.diamondPrice)) +
      parseFloat(String(cartContext.settingPrice))
  );
  useEffect(() => {
    if (
      cartInfo[0].description === undefined &&
      cartInfo[1].description === undefined
    ) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
  }, [cartInfo]);

  useEffect(() => {
    setTotalPrice(
      (
        parseFloat(String(cartContext.diamondPrice)) +
        parseFloat(String(cartContext.settingPrice))
      ).toFixed(2)
    );
  }, [cartContext.diamondPrice, cartContext.settingPrice]);

  return (
    // <div className="mx-4">
    <div className="fixed top-0 w-full h-full bg-white justify-center items-center z-[70] lg:w-1/4 lg:right-0 overflow-y-scroll lg:overflow-y-scroll">
      <div className="mx-4">
        <div className="flex justify-between border-black border-b my-4">
          <div>Shopping Cart</div>
          <div
            className="hover:cursor-pointer"
            onClick={() => {
              cartContext.setShowMobileMenu(false);
              cartContext.setShowCartModal(false);
            }}
          >
            {xIcon}
          </div>
        </div>
        <div className={``}>
          <CheckoutImageSlider></CheckoutImageSlider>
        </div>
        <CheckoutItems
          onRemoveItem={(item) => {
            handleRemoveCartItem(item);
          }}
        ></CheckoutItems>
        <div class="justify-center w-full mb-6">
          <button
            class={`flex w-full justify-center py-2 text-black ${hiraWhiteBG} border ${borderHiraBlack} focus:outline-none active:bg-black focus:bg-black text-lg mb-2`}
            onClick={() => {
              cartContext.setShowBookingModal(!cartContext.showBookingModal);
              cartContext.setShowCartModal(false);
              window.scrollTo({
                top: 0,
                behavior: "smooth", // You can use 'auto' or 'smooth' for scrolling behavior
              });
            }}
          >
            Speak to an expert
          </button>
          <Link
            onClick={() => {
              cartContext.setShowCartModal(false);
            }}
            href={"/checkout"}
            class={`flex w-full justify-center py-2 text-white ${hiraBlackBG} focus:outline-none active:bg-black focus:bg-black text-lg`}
          >
            Go to checkout (USD$ {totalPrice})
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
