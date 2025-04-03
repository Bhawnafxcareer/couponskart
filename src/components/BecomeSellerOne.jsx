import { Link } from "react-router-dom";

const BecomeSellerOne = () => {
  return (
    <section className="seller padding-y-120">
      <div className="container container-two">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="seller-item position-relative z-index-1">
              <img
                src="assets/images/shapes/seller-bg.png"
                className="position-absolute start-0 top-0 z-index--1"
                alt=""
              />
              <h3 className="seller-item__title">
              Zero Commission on Your First 20 Coupons!
              </h3>
              <p className="seller-item__desc fw-500 text-heading">
              List your coupons, attract more customers, and grow your business effortlessly. Enjoy zero commission on your first 20 coupons and start attracting more customers today!
              </p>
              <Link
                to="/become-a-seller"
                className="btn btn-static-outline-black btn-xl pill fw-600"
              >
                Become a Seller
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="seller-item bg-two position-relative z-index-1">
              <img
                src="assets/images/shapes/seller-bg-two.png"
                className="position-absolute start-0 top-0 z-index--1"
                alt=""
              />
              <h3 className="seller-item__title">Unlock Free & Premium Coupons!</h3>
              <p className="seller-item__desc fw-500 text-heading">
              Subscribe to unlock free and premium coupons on fashion, food, travel, and more. Redeem amazing discounts and save big on every purchase!
              </p>
              <Link
                to="/register"
                className="btn btn-static-outline-black btn-xl pill fw-600"
              >
                Become a User
              </Link>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="support position-relative z-index-1">
              <img
                src="assets/images/shapes/spider-net-sm.png"
                alt=""
                className="spider-net position-absolute top-0 end-0 z-index--1"
              />
              <img
                src="assets/images/shapes/arrow-shape.png"
                alt=""
                className="arrow-shape"
              />
              <div className="row align-items-center">
                <div className="col-lg-1 d-lg-block d-none" />
                <div className="col-lg-3 col-md-4 d-md-block d-none">
                  <div className="support-thumb text-center">
                    <img src="assets/images/thumbs/support-img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3 d-lg-block d-none" />
                <div className="col-lg-5 col-md-8">
                  <div className="support-content">
                    <h3 className="support-content__title mb-3">
                    Unlock Exclusive Deals & Start Saving Today!

                    </h3>
                    <p className="support-content__desc">
                    If you need any assistance, feel free to reach out to us for inquiries.

                    </p>
                    <Link
                      to="mailto:infomail@office.com"
                      className="btn btn-static-black btn-lg fw-300 pill"
                    >
                      info@couponskart.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeSellerOne;
