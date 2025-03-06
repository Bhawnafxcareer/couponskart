import React from 'react'


const AboutBanner = () => {
  return (
    <>
      <section className="padding-y-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 col-md-6 align-self-center">
              <div className="about_left">
                <h1 className="">
                  About Us
                </h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus beatae earum tempora consectetur placeat pariatur explicabo, nulla illum magnam, omnis impedit! Repellat dolorem aliquam, in accusamus et exercitationem praesentium.
                </p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus beatae earum tempora consectetur placeat pariatur explicabo, nulla illum magnam, omnis impedit! Repellat dolorem aliquam, in accusamus et exercitationem praesentium.</p>
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
                <h6 className='fw-semibold mb-0'>Best prices & offers</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className=" section-bg about-bx d-flex align-items-center gap-3 rounded">
                <img src="assets/images/about/discounts.png" alt="" />
                <h6 className='fw-semibold mb-0'>Great daily deal</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="section-bg about-bx d-flex align-items-center gap-3 rounded">
                <img src="assets/images/about/discounts-member.png" alt="" />
                <h6 className='fw-semibold mb-0'>Member Discounts</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className=" section-bg about-bx d-flex align-items-center gap-3 rounded">
                <img src="assets/images/about/customer-service.png" alt="" />
                <h6 className='fw-semibold mb-0'>Online Support 24/7</h6>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default AboutBanner
