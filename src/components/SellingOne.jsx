
import { Link } from "react-router-dom";
import Slider from "react-slick";

const SellingOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick}>
        <i className="las la-arrow-right" />
      </button>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;

    return (
      <button className={className} onClick={onClick}>
        <i className="las la-arrow-left" />
      </button>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
    ],
  };
  return (
    <section className="selling-product padding-y-120 position-relative z-index-1 overflow-hidden">
      <img
        src="assets/images/gradients/selling-gradient.png"
        alt=""
        className="bg--gradient"
      />
      <img
        src="assets/images/shapes/element2.png"
        alt=""
        className="element one"
      />
      <img
        src="assets/images/shapes/element1.png"
        alt=""
        className="element two"
      />
      <img
        src="assets/images/shapes/curve-pattern1.png"
        alt=""
        className="position-absolute start-0 top-0 z-index--1"
      />
      <img
        src="assets/images/shapes/curve-pattern2.png"
        alt=""
        className="position-absolute end-0 top-0 z-index--1"
      />
      <div className="container container-two">
        <div className="section-heading style-left style-white flx-between max-w-unset gap-4">
          <div>
            <h3 className="section-heading__title">
              Weekly Best selling Products
            </h3>
            <p className="section-heading__desc font-18">
              Every month we pick some best products for you. This month's best
              web themes &amp; templates have arrived, chosen by our content
              specialists.
            </p>
          </div>
          <Link
            to="/all-product"
            className="btn btn-main btn-lg pill fw-300"
          >
            View All Items
          </Link>
        </div>
        <div className="selling-product-slider">
          <Slider {...settings}>
            <div className="product-item shadow-sm overlay-none">
              <div className="product-item__thumb d-flex max-h-unset">
                <Link to="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/card5.webp"
                    alt=""
                    className="cover-img"
                  />
                </Link>
              </div>

            </div>
            <div className="product-item shadow-sm overlay-none">
              <div className="product-item__thumb d-flex max-h-unset">
                <Link to="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/card1.webp"
                    alt=""
                    className="cover-img"
                  />
                </Link>
              </div>

            </div>
            <div className="product-item shadow-sm overlay-none">
              <div className="product-item__thumb d-flex max-h-unset">
                <Link to="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/card3.webp"
                    alt=""
                    className="cover-img"
                  />
                </Link>
              </div>

            </div>
            <div className="product-item shadow-sm overlay-none">
              <div className="product-item__thumb d-flex max-h-unset">
                <Link to="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/card2.webp"
                    alt=""
                    className="cover-img"
                  />
                </Link>
              </div>

            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SellingOne;
