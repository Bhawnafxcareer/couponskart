import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import BannerOne from "../components/BannerOne";
import Categories from "../components/Categories";
import ArrivalOne from "../components/ArrivalOne";
import SellingOne from "../components/SellingOne";
import BlogHome from "../components/BlogHome";
import BecomeSellerOne from "../components/BecomeSellerOne";
import FooterOne from "../components/FooterOne";
import ResourceOne from "../components/ResourceOne";

const HomePage = () => {
  
  return (
    <section className="change-gradient">
    {/* Preloader */}
    <Preloader />

    {/* SaleOffer */}
    {/* <SaleOffer /> */}

    {/* HeaderOne */}
    <HeaderOne />

    {/* BannerOne */}
    <BannerOne />

    {/* Categories */}
    <Categories />

    {/* ArrivalOne */}
    <ArrivalOne />

    {/* FeaturedOne */}
 
    <ResourceOne />

    {/* SellingOne */}
    <SellingOne />

    {/* BlogOne */}
    <BlogHome />

    {/* BecomeSellerOne */}
    <BecomeSellerOne />

 

    {/* FooterOne */}
    <FooterOne />
  </section>
  );
};

export default HomePage;
