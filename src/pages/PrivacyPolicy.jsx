import React from 'react'
import Preloader from '../helper/Preloader'
import HeaderOne from '../components/HeaderOne'
import BreadcrumbEight from '../components/BreadcrumbEight'

const PrivacyPolicy = () => {
  return (
    <>
      {/* Preloader */}
      < Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BreadcrumbEight */}
      <BreadcrumbEight  items={[
    { label: "Home", path: "/" },
    { label: "Privacy Policy", path: null } // or remove path to make it non-clickable
  ]} />
    </>
  )
}

export default PrivacyPolicy