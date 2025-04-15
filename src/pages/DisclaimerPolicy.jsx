import React from 'react'
import Preloader from '../helper/Preloader'
import HeaderOne from '../components/HeaderOne'
import BreadcrumbEight from '../components/BreadcrumbEight'
import { Link } from 'react-router-dom'
import FooterOne from '../components/FooterOne'

const DisclaimerPolicy = () => {
    return (
        <>  {/* Preloader */}
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
                            <h2>Disclaimer Policy</h2>
                            <h5 className='mt-4'>1. General Information
                            </h5>
                            <p>CouponsKart provides access to free and premium coupons across various categories, including fashion, food, travel, and more. While we strive to feature only valid and updated coupons, we do not guarantee the accuracy, availability, or redemption success of any offer.
                            </p>
                            <h5 className='mt-4'>2. Coupon Usage & Availability
                            </h5>

                            <ul className='list-style ps-4 mt-3'>
                               <li><p> Coupons are provided by third-party sellers, and their terms may change without notice.</p></li>
                               <li><p> Some premium coupons require a paid subscription to access.</p></li>
                                <li><p>All coupons are valid for one-time redemption only unless explicitly stated otherwise.</p></li>
                               <li><p> No refunds or cancellations are allowed after purchasing a premium coupon or subscription.</p></li>
                               <li><p> CouponsKart is not responsible for expired, invalid, or rejected coupons as sellers manage their offers.</p></li>

                            </ul>

                            <h5 className='mt-4'>3. Limitation of Liability</h5>
                            <p>CouponsKart acts as a platform for deals and promotions but does not endorse or guarantee any merchant’s product/service. We are not liable for financial losses, product quality issues, or non-fulfillment of an offer by the seller..
                            </p>
                            <h5 className='mt-4'>4. Changes & Updates</h5>
                            <p>CouponsKart reserves the right to modify or remove any coupon, discount, or offer at any time without prior notice.
                            </p>
                            <h5 className='mt-4'>5. Contact Us
                            </h5>
                            <p>For any concerns regarding coupons or assistance, please contact us via our Contact Us page.
                            </p>
                            {/* <p> <strong>Email:</strong>  <Link to="mailto:support@couponskart.in">support@couponskart.in</Link></p>
                            <p> <strong>Website:</strong>  <Link to="https://www.couponskart.in">https://www.couponskart.in</Link></p> */}

                        </div>
                    </div>
                </div>
            </section>
            {/* FooterOne */}
            <FooterOne /></>
    )
}

export default DisclaimerPolicy