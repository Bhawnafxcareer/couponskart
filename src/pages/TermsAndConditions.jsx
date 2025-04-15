import React from 'react'
import Preloader from '../helper/Preloader'
import HeaderOne from '../components/HeaderOne'
import BreadcrumbEight from '../components/BreadcrumbEight'
import { Link } from 'react-router-dom'
import FooterOne from '../components/FooterOne'

const TermsAndConditions = () => {
  return (
    <>
      {/* Preloader */}
      < Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BreadcrumbEight */}
      <BreadcrumbEight items={[
        { label: "Home", path: "/" },
        { label: "Terms & Conditions", path: null } // or remove path to make it non-clickable
      ]} />


      <section className='padding-y-120'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Terms & Conditions</h2>
              <h6><strong>Effective Date: </strong> 25-04-2025
              </h6>
              <p>Welcome to CouponsKart! By using our platform, you agree to follow these Terms & Conditions (“T&C”). If you do not agree, kindly refrain from using our services.</p>
              <h5 className='mt-4'>1. User Registration & Account</h5>
              <ul className='list-style ps-4 mt-3'>
                <li><p>  Users must register an account to access free and premium coupons.</p></li>
                <li><p> A subscription fee is required to unlock premium coupons.</p></li>
                <li><p> Users are responsible for keeping their account details secure.</p></li>
              </ul>

              <h5 className='mt-4'>2. Coupon Usage & Redemption</h5>
              <p>We use your data to:</p>
              <ul className='list-style ps-4 mt-3'>
                <li><p>Each coupon can be redeemed only once, unless otherwise stated.</p></li>
                <li><p>Users must check the validity and terms of each coupon before use.</p></li>
                <li><p>CouponsKart is not responsible if a coupon is misused, expired, or rejected by a retailer.</p></li>
              </ul>

              <h5 className='mt-4'>3. Payments & Refunds</h5>
              <ul className='list-style ps-4 mt-3'>
                <li><p>All subscription payments are non-refundable.</p></li>
                <li><p>No refunds are provided for unused, expired, or rejected coupons.</p></li>
              </ul>
              <h5 className='mt-4'>  4. User Responsibilities</h5>
              <ul className='list-style ps-4 mt-3'>
                <li><p>Users must use coupons as per their terms and avoid fraudulent activity.</p></li>
                <li><p>Reselling, duplicating, or transferring coupons is strictly prohibited.</p></li>
                <li><p>Any violation of these terms may lead to account suspension or termination.</p></li>
              </ul>

              <h5 className='mt-4'>5. Limitation of Liability
              </h5>
              <ul className='list-style ps-4 mt-3'>
                <li><p>CouponsKart does not guarantee the acceptance of any coupon.
                </p></li>
                <li><p>We are not liable for any disputes between users and retailers.
                </p></li>
              </ul>
              <h5 className='mt-4'>6. Updates to Terms & Conditions

              </h5>
              <ul className='list-style ps-4 mt-3'>
                <li><p>CouponsKart may update these terms as needed. Users will be notified of significant changes.</p></li>

              </ul>

              <h5 className='mt-4'>7. Contact Us
              </h5>

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

export default TermsAndConditions