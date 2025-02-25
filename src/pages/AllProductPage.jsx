import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import AllProduct from "../components/AllProduct";
import ResourceOne from "../components/ResourceOne";
import FooterOne from "../components/FooterOne";



const AllProductPage = () => {

  return (

    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

     

      {/* AllProduct */}
      <AllProduct />

      {/* ResourceOne */}
      <div className="resource-style-two">
        <ResourceOne />
      </div>

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default AllProductPage;
