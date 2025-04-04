import { Link } from "react-router-dom";

const BannerOne = () => {
  return (
    <>
      <section className="hero section-bg z-index-1">
        <img
          src="assets/images/gradients/banner-gradient.png"
          alt=""
          className="bg--gradient white-version"
        />
        <img
          src="assets/images/shapes/element-moon1.png"
          alt=""
          className="element one"
        />
        <img
          src="assets/images/shapes/element-moon2.png"
          alt=""
          className="element two"
        />
        <div className="container container-two">
          <div className="row align-items-center gy-sm-5 gy-4">
            <div className="col-lg-6">
              <div className="hero-inner position-relative pe-lg-5">
                <div>
                  <h1 className="hero-inner__title">
                    Unlock Exclusive Deals & Discounts
                  </h1>
                  <p className="hero-inner__desc font-18">
                    Save more with free and premium coupons on top brands! Subscribe to access exclusive discounts and redeem deals effortlessly. Start unlocking savings today!
                  </p>

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-thumb">
                <img src="assets/images/thumbs/couponskart-banner.png" alt="" />
                <img
                  src="assets/images/shapes/dots.png"
                  alt=""
                  className="dotted-img white-version"
                />
                <img
                  src="assets/images/shapes/dots-white.png"
                  alt=""
                  className="dotted-img dark-version"
                />
                <img
                  src="assets/images/shapes/element2.png"
                  alt=""
                  className="element two end-0"
                />
                <div className="statistics animation bg-main text-center">
                  <h5 className="statistics__amount text-white">500+</h5>
                  <span className="statistics__text text-white font-14">
                    Customers
                  </span>
                </div>
                <div className="statistics style-two bg-white text-center">
                  <h5 className="statistics__amount statistics__amount-two text-heading">
                    200+
                  </h5>
                  <span className="statistics__text text-heading font-14">
                    Coupons
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerOne;
