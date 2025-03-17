import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";
import CartThankYou from "../components/CartThankYou";

const CartThankYouPage = () => {

  return (

    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* CartThankYou */}
      <CartThankYou />


      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default CartThankYouPage;
