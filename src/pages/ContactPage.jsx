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
      <BreadcrumbEight  items={[
    { label: "Home", path: "/" },
    { label: "Contact Us", path: null } // or remove path to make it non-clickable
  ]} />

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
