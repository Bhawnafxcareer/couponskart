import { Link } from "react-router-dom";

const NewsletterTwo = () => {
  return (
    <section className="newsletter-two padding-t-60 padding-b-120 section-bg position-relative z-index-1 overflow-hidden">
      <img
        src="assets/images/gradients/breadcrumb-gradient-bg.png"
        alt=""
        className="bg--gradient"
      />
      <img
        src="assets/images/shapes/element-moon3.png"
        alt=""
        className="element one"
      />
      <img
        src="assets/images/shapes/element-moon1.png"
        alt=""
        className="element three"
      />
      <div className="container container-two">
        <div className="flx-between gap-3">
          <div className="newsletter-two-content">
            <h3 className="newsletter-two-content__title mb-3">
            Start Saving with CouponsKart!
            </h3>
            <p className="newsletter-two-content__desc text-heading font-18">
            Unlock exclusive free & premium coupons and enjoy the best discounts on fashion, food, travel, and more. Subscribe now and redeem top deals instantly.

            </p>
          </div>
          <Link to="/all-product" className="btn btn-main btn-lg pill">
          Get Coupons Now

          </Link>
        </div>
      </div>
    </section>

  );
}

export default NewsletterTwo;