import "../styles/globals.css";
import { CartProvider } from "../components/context/CartContext";
import { DiamondContextProvider } from "../components/context/DiamondContext";

export default function App({ Component, pageProps }) {
  return (
    <DiamondContextProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </DiamondContextProvider>
  );
}
