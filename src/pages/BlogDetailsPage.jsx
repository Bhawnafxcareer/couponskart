import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";
import BlogDetails from "../components/BlogDetails";
const BlogDetailsPage = () => {

  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />


      {/* BlogDetails */}
      <BlogDetails />

 

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default BlogDetailsPage;
