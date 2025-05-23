import React, { useState } from "react";

import { Link } from "react-router-dom";


const Register = () => {
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleSendOtp = () => {
    setShowOTP(true);
    // Here you'd call your API to actually send the OTP to the email
  };

  const handleOtpChange = (element, index) => {
    if (/^\d?$/.test(element.value)) {
      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      // Move to next input if valid
      if (element.nextSibling && element.value) {
        element.nextSibling.focus();
      }
    }
  };
  return (
    <>
      {/* ================================== Account Page Start =========================== */}
      <section className="account d-flex">
       
        <div className="account__left d-md-flex d-none flx-align section-bg position-relative z-index-1 overflow-hidden">
        <Link to="/" className="logo mb-4">
              <img
                src="/assets/images/logo/logo-two.png"
                alt=""
                className="white-version"
              />
              <img
                src="assets/images/logo/white-logo-two.png"
                alt=""
                className="dark-version"
              />
            </Link>
          <img
            src="assets/images/shapes/pattern-curve-seven.png"
            alt=""
            className="position-absolute end-0 top-0 z-index--1 h-100"
          />
          <div className="account-thumb">
            <img src="assets/images/about/tab-img-2.webp" alt="" />

          </div>
        </div>
        <div className="account__right padding-t-120 flx-align">
      
            <div className="account-content">
            <h4 className="account-content__title mb-4 text-capitalize">
              Create A Free Account
            </h4>
            <form action="#">
              <div className="row gy-4">
                <div className="col-md-12">
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
                    <span className="input-icon">
                      <img src="assets/images/icons/user-icon.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-md-12">
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
                    <span className="input-icon">
                     <button className="btn-main p-1 text-white rounded font-14
                     "   onClick={handleSendOtp}>Send OTP</button>
                    </span>
                  </div>
                </div>
               {/* OTP Input Section */}
              {showOTP && (
                <>
                  <div className="col-12">
                    <label className="form-label mb-2">Enter OTP</label>
                    <div className="d-flex gap-3 justify-content-center">
                      {otp.map((digit, idx) => (
                        <input
                          key={idx}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(e.target, idx)}
                          className="form-control text-center"
                          style={{ width: "50px", fontSize: "20px" }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="button" className="btn btn-main w-100 pill mt-3">
                      Verify OTP
                    </button>
                  </div>
                </>
              )}
                <div className="col-md-6">
                  <label
                    htmlFor="your-password"
                    className="form-label mb-2 font-18 font-heading fw-600"
                  >
                    Password
                  </label>
                  <div className="position-relative">
                    <input
                      type="password"
                      className="common-input common-input--bg common-input--withIcon"
                      id="your-password"
                      placeholder="6+ characters, 1 Capital letter"
                    />
                    <span
                      className="input-icon toggle-password cursor-pointer"
                      id="#your-password"
                    >
                      <img src="assets/images/icons/lock-icon.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="your-password"
                    className="form-label mb-2 font-18 font-heading fw-600"
                  >
                    Confirm Password
                  </label>
                  <div className="position-relative">
                    <input
                      type="password"
                      className="common-input common-input--bg common-input--withIcon"
                      id="your-password"
                      placeholder="6+ characters, 1 Capital letter"
                    />
                    <span
                      className="input-icon toggle-password cursor-pointer"
                      id="#your-password"
                    >
                      <img src="assets/images/icons/lock-icon.svg" alt="" />
                    </span>
                  </div>
                </div>

                <div className="col-12">
                  <Link to="/dashboard"
                    type="submit"
                    className="btn btn-main btn-lg w-100 pill"
                  >
                    {" "}
                    Create An Account
                  </Link>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-outline-light btn-lg-icon btn-lg w-100 pill"
                  >
                    <span className="icon icon-left">
                      <img src="assets/images/icons/google.svg" alt="" />
                    </span>
                    Sign up with google
                  </button>
                  <button
                    type="submit"
                    className="btn btn-outline-light btn-lg-icon btn-lg w-100 mt-3 pill"
                  >
                    <span className="icon icon-left">
                      <img src="assets/images/icons/facebook.svg" alt="facebook"  width={'24px'} />
                    </span>
                    Sign up with facebook
                  </button>
                </div>
                <div className="col-sm-12 mb-0">
                  <div className="have-account">
                    <p className="text font-14">
                      Already a member?{" "}
                      <Link
                        className="link text-main text-decoration-underline  fw-500"
                        to="/login"
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* ================================== Account Page End =========================== */}
    </>
  );
};

export default Register;
