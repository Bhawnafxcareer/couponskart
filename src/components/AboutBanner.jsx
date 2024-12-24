import React from 'react'


const AboutBanner = () => {
  return (
    <div>
       <div className="container">
        <div className="row my-5">
            <div className="col-lg-6 align-self-center">
                <div className="about_left">
                <h1 className="hero-inner__title">
                    2M+ curated  digital products
                  </h1>
                  <p className="hero-inner__desc font-18">
                    Explore the best premium themes and plugins available for
                    sale. Our unique collection is hand-curated by experts. Find
                    and buy the perfect premium theme today.
                  </p>
                 
                </div>
            </div>
            <div className="col-lg-6">
                <div className="banner-right text-center" >
                    <img src="assets/images/About/about-banner.webp" className='w-75' alt="" />
                </div>
            </div>
        </div>
       </div>
      
    </div>
  )
}

export default AboutBanner
