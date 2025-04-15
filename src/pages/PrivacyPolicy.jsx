import React from 'react'
import Preloader from '../helper/Preloader'
import HeaderOne from '../components/HeaderOne'
import BreadcrumbEight from '../components/BreadcrumbEight'
import {Link} from 'react-router-dom'
import FooterOne from '../components/FooterOne'

const PrivacyPolicy = () => {
  return (
    <>
      {/* Preloader */}
      < Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BreadcrumbEight */}
      <BreadcrumbEight items={[
        { label: "Home", path: "/" },
        { label: "Privacy Policy", path: null } // or remove path to make it non-clickable
      ]} />

      <section className='padding-y-120'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Privacy Policy</h2>
              <p>CouponsKart ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This policy explains how we collect, use, and protect your data when you use our platform to access free and premium coupons.
              </p>
              <h5 className='mt-4'>1. Information We Collect</h5>
              <p>When you register or use our platform, we collect:
              </p>
              <ul className='list-style ps-4 mt-3'>
                <li><p> <strong>Personal Details:</strong> Name, email, phone number, and account credentials.</p></li>
                <li><p> <strong>Payment Information:</strong> Required for premium coupon subscriptions (processed securely via third-party payment gateways).</p></li>
                <li><p><strong>Device & Browsing Data: </strong>IP address, location, cookies, and browsing activity for analytics and service improvement.</p></li>

              </ul>
              <h5 className='mt-4'>2. How We Use Your Information</h5>
              <p>We use your data to:</p>
              <ul className='list-style ps-4 mt-3'>
                <li><p>Provide access to free and premium coupons.</p></li>
                <li><p>Process subscription payments and send transaction notifications.</p></li>
                <li><p>Send promotional offers and updates based on your preferences.</p></li>
                <li><p>Improve website functionality and personalize user experience.</p></li>

              </ul>
              <h5 className='mt-4'>3. Sharing & Disclosure</h5>
              <ul className='list-style ps-4 mt-3'>

                <li><p>We do not sell or rent your data to third parties.</p></li>
                <li><p>We may share information with trusted third-party partners for payment processing, email notifications, and analytics.</p></li>
                <li><p>Your data may be disclosed if required by law, legal proceedings, or government requests.</p></li>

              </ul>
              <h5 className='mt-4'>4. Security Measures</h5>
              <ul className='list-style ps-4 mt-3'>
                <li><p>Payments are processed via secure third-party gateways—we do not store payment details.</p></li>
                <li><p>We use SSL encryption and other security protocols to protect your data.</p></li>
              </ul>
              <h5 className='mt-4'>5. Cookies & Tracking Technologies
              </h5>
              <ul className='list-style ps-4 mt-3'>
                <li><p>We use cookies to enhance your browsing experience and provide personalized recommendations.</p></li>
                <li><p>Users can manage cookie preferences through browser settings.</p></li>
              </ul>
              <h5 className='mt-4'>6. Refund & Cancellation Policy

              </h5>
              <ul className='list-style ps-4 mt-3'>
                <li><p>No refunds are provided after subscription payments.</p></li>
                <li><p>All coupons are one-time redeemable and non-refundable.</p></li>
              </ul>
              <h5 className='mt-4'>7. Your Rights & Data Control </h5>
              <p>Users can:
              </p>
              <ul className='list-style ps-4 mt-3'>
                <li><p>Modify or delete personal data by accessing account settings.
                  Unsubscribe from marketing emails at any time.</p></li>
                <li><p>Request account deletion by contacting <Link to="mailto:support@couponskart.in">support@couponskart.in</Link></p></li>
              </ul>
              <h5 className='mt-4'>8. Changes to This Policy
              </h5>
              <p>We may update this policy periodically. Users will be notified of significant changes.</p>
              <h5 className='mt-4'>9. Contact Us
              </h5>
              <p>We may update this policy periodically. Users will be notified of significant changes.</p>
              <p> <strong>Email:</strong>  <Link to="mailto:support@couponskart.in">support@couponskart.in</Link></p>
              <p> <strong>Website:</strong>  <Link to="https://www.couponskart.in">https://www.couponskart.in</Link></p> 

            </div>
          </div>
        </div>
      </section>
       {/* FooterOne */}
       <FooterOne />
    </>
  )
}

export default PrivacyPolicy