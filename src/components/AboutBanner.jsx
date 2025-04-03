import React from 'react'


const AboutBanner = () => {
  return (
    <>
      <section className="padding-y-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 col-md-6 align-self-center">
              <div className="about_left">
                <h1 className=" hero-inner__title">
                Your Ultimate Destination for Savings & Deals!

                </h1>
                <p className="mb-4">
                CouponsKart is a one-stop platform designed for both users and sellers. We provide users with exclusive free and premium coupons, making savings effortless across various categories like fashion, food, travel, and more.</p>
                <p> At the same time, we empower sellers to promote their offers and grow their business with ease.</p>
              </div>
            </div>
            <div className="col-md-6 col-md-6 align-self-center text-center">
              <img src="assets/images/about/tab-img-2.webp" alt="" className='w-75' />
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-6 col-lg-3">
              <div className=" section-bg about-bx d-flex align-items-center gap-3 rounded">
                <img src="assets/images/about/price-tag.png" alt="" />
                <h6 className='fw-semibold mb-0'>Exclusive Coupons</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className=" section-bg about-bx d-flex align-items-center gap-3 rounded">
                <img src="assets/images/about/discounts.png" alt="" />
                <h6 className='fw-semibold mb-0'>Verified Deals
                </h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="section-bg about-bx d-flex align-items-center gap-3 rounded">
                <img src="assets/images/about/discounts-member.png" alt="" />
                <h6 className='fw-semibold mb-0'> Daily Discounts</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className=" section-bg about-bx d-flex align-items-center gap-3 rounded">
                <img src="assets/images/about/customer-service.png" alt="" />
                <h6 className='fw-semibold mb-0'>Easy Redemption</h6>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default AboutBanner
