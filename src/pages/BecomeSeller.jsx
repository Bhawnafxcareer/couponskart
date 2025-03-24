import React from 'react'
import { Link, NavLink } from "react-router-dom";

const BecomeSeller = () => {
    return (
        <>

            <header>
                <div className="container">
                    <nav className="header-inner flx-between">
                        {/* Logo Start */}
                        <div className="logo">
                            <Link to="/" className="link white-version" >
                                <img src="assets/images/logo/logo-two.png" alt="Logo" />
                            </Link>
                            <Link to="/" className="link dark-version">
                                <img src="assets/images/logo/white-logo.png" alt="Logo" />
                            </Link>
                        </div>
                        {/* Logo End  */}
                        {/* Menu Start  */}

                        {/* Menu End  */}
                        {/* Header Right start */}
                        <div className="header-right flx-align">


                            <div className="header-right__inner gap-3 flx-align d-lg-flex ">
                                <Link to="/register" className="btn btn-main pill">
                                    <span className="icon-left icon">
                                        <img src="assets/images/icons/user.svg" alt="" />
                                    </span>
                                    Let's Talk
                                </Link>

                            </div>

                        </div>
                        {/* Header Right End  */}
                    </nav>
                </div>

            </header>
            <section className="padding-y-120 bg-light-purple">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-7 col-md-7 align-self-center">
                            <div className="about_left">
                                <h1 className="">
                                    List Your Coupons & Grow Your Business with CouponsKart!
                                </h1>
                                <p className="mb-4">
                                    Join CouponsKart and showcase your best deals to a growing community of shoppers. Whether you're a small business or an established brand, our platform helps you boost sales, attract new customers, and increase brand visibility—all with zero upfront cost!
                                </p>

                            </div>
                        </div>
                        <div className="col-md-5 col-md-5 align-self-center text-center">
                            <img src="assets/images/about/tab-img-2.webp" alt="" className='w-75' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="padding-y-120 ">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-12 ">
                            <div className="text-center">
                                <h2 className="mb-5">
                                    Why Sell on CouponsKart?
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="why-sell shadow  h-100 p-4 rounded">
                                <h5 className='mb-2 fw-semibold' > First 20 Coupons Absolutely Free!</h5>
                                <p className='mb-0'> Get started risk-free and introduce your offers to a wide audience.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="why-sell shadow h-100 p-4 rounded">
                                <h5 className='mb-2 fw-semibold' > Performance-Based Model</h5>
                                <p className='mb-0'> Pay a minimal <strong>10% commission only after 20 free coupons</strong>, ensuring you earn more while spending less.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="why-sell shadow h-100 p-4 rounded">
                                <h5 className='mb-2 fw-semibold' >Instant Exposure
                                </h5>
                                <p className='mb-0'> Reach thousands of potential customers looking for the best deals.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="why-sell shadow h-100 p-4 rounded">
                                <h5 className='mb-2 fw-semibold' > Easy Coupon Management </h5>
                                <p className='mb-0'> Create, edit, and track your coupons in real time.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="why-sell shadow h-100 p-4 rounded">
                                <h5 className='mb-2 fw-semibold' > Data Insights</h5>
                                <p className='mb-0'> Get valuable analytics on coupon performance and customer engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="padding-y-120 " >
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6 ">
                            <h2 className="mb-5">How Does It Work? </h2>
                            <ul>
                                <li className='pb-3'>
                                    <h6 className='fw-semibold mb-0'>1. Register Your Business</h6>
                                    <p>Sign up and create your seller account by providing basic business details</p>
                                </li>
                                <li className='pb-3'>
                                    <h6 className='fw-semibold mb-0'>2. Get Verified & Access Your Dashboard</h6>
                                    <p>Once your registration is complete, our team will verify your business to ensure authenticity </p>
                                </li>
                                <li className='pb-3'>
                                    <h6 className='fw-semibold mb-0'>3. Create & List Your Coupons</h6>
                                    <p>Start adding your coupon details, including:  Coupon Code,  Offer Details, Validity Period, Maximum Redemption Limit and Number of Users Who Can Redeem</p>
                                </li>
                                <li className='pb-3'>
                                    <h6 className='fw-semibold mb-0'>4. Reach More Customers & Track Performance</h6>
                                    <p>Your coupons go live, allowing users to discover and redeem them easily. Monitor real-time performance analytics for better results.</p>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-6 align-self-center text-center">
                            <img src="assets/images/about/tab-img-2.webp" alt="" className='w-75' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="padding-y-120 " style={{ backgroundColor: "#ffeff4" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <di className="col-md-8 text-center">
                            <h2 className="mb-4">Start Listing Your Coupons & Maximize Your Sales!</h2>
                            {/* <div className="text-center">
                                <Link to="/register" className="btn btn-main pill">
                                    <span className="icon-left icon">
                                        <img src="assets/images/icons/user.svg" alt="" />
                                    </span>
                                    Register as a Seller
                                </Link>
                            </div> */}
                        </di>
                    </div>
                </div>
            </section>
            <section  className="padding-y-120 ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                        <form action="#">
              <div className="row gy-4 justify-content-center">
                <div className="col-md-6">
                  <label
                    htmlFor="name"
                    className="form-label mb-2 font-18 font-heading fw-600"
                  >
                    Full Name
                  </label>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="common-input common-input--bg common-input--withIcon"
                      id="name"
                      placeholder="Your full name"
                    />
             
                  </div>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="email"
                    className="form-label mb-2 font-18 font-heading fw-600"
                  >
                    Email
                  </label>
                  <div className="position-relative">
                    <input
                      type="email"
                      className="common-input common-input--bg common-input--withIcon"
                      id="email"
                      placeholder="infoname@mail.com"
                    />
              
                  </div>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="phone"
                    className="form-label mb-2 font-18 font-heading fw-600"
                  >
                    Mobile Number
                  </label>
                  <div className="position-relative">
                    <input
                      type="tell"
                      className="common-input common-input--bg common-input--withIcon"
                      id="phone"
                      placeholder="+91 000 000 0000"
                    />
              
                  </div>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="your-password"
                    className="form-label mb-2 font-18 font-heading fw-600"
                  >
                    Company Name
                  </label>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="common-input common-input--bg common-input--withIcon"
                      id="BusinessName"
                      placeholder="Enter your company name"
                    />
                                            
                  </div>
                </div>

                <div className="col-md-4 mt-4">
                  <button   type="submit" className="btn btn-main btn-lg w-100 pill"  >
                   Submit
                  </button>
                </div>


              </div>
            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-section py-5">
                <img
                    src="assets/images/shapes/pattern.png"
                    alt=""
                    className="bg-pattern"
                />

                <img
                    src="assets/images/gradients/footer-gradient.png"
                    alt=""
                    className="bg--gradient"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"> <p className="bottom-footer__text font-14">
                            Copyright © 2024 Couponskart, All rights reserved.
                        </p></div>
                        <div className="col-lg-6 ">
                            <div className="footer-links text-lg-end text-start justify-content-lg-end">
                                <Link to="#" className="footer-link font-14">
                                    Terms of service
                                </Link>
                                <Link to="#" className="footer-link font-14">
                                    Privacy Policy
                                </Link>
                                <Link to="/contact" className="footer-link font-14">
                                    cookies
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default BecomeSeller
