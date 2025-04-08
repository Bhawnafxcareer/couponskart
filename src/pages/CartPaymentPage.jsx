import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";
import CartPayment from "../components/CartPayment";


const CartPaymentPage = () => {

  return (

    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />


   

      {/* CartPayment */}
      <CartPayment />




      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default CartPaymentPage;
