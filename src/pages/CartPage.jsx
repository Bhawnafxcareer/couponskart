import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";
import BreadcrumbFour from "../components/BreadcrumbFour";
import Cart from "../components/Cart";


const CartPage = () => {

  return (

    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BreadcrumbFour */}
      <BreadcrumbFour />


      {/* Cart */}
      <Cart />

  


      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default CartPage;
