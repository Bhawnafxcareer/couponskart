import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";
import BreadcrumbEight from "../components/BreadcrumbEight";
import Contact from "../components/Contact";
import NewsletterTwo from "../components/NewsletterTwo";
const ContactPage = () => {

  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BreadcrumbEight */}
      <BreadcrumbEight />

      {/* Contact */}
      <Contact />


      {/* NewsletterTwo */}
      <NewsletterTwo />


      


      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ContactPage;
