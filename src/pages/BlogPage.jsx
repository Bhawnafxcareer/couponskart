import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import BreadcrumbEight from "../components/BreadcrumbEight";
import Blog from "../components/Blog";
import FooterOne from "../components/FooterOne";
const BlogPage = () => {

  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BreadcrumbSeven */}
      <BreadcrumbEight  items={[
    { label: "Home", path: "/" },
    { label: "Blog", path: null } // or remove path to make it non-clickable
  ]} />

      {/* Blog */}
      <Blog />



      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default BlogPage;
