import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  // Shooping Cart - Increment quantity of products
  const [count, setCount] = useState(0);

    // Shooping Cart - Add product to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Product Detail - Open or Close component product detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  // Product Detail - Show or hide product detail
  const [productToShow, setProductToShow] = useState({});



    // Checkout Side Menu - Open or Close component product detail
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => {
      setIsCheckoutSideMenuOpen(true);
    };
    const closeCheckoutSideMenu = () => {
      setIsCheckoutSideMenuOpen(false);
    };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
