
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Categories = () => {
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
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
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
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="popular padding-y-120 overflow-hidden">
      <div className="container container-two">
        <div className="section-heading style-left mb-64">
          <h3 className="section-heading__title">Popular Categories</h3>
        </div>
        <div className="popular-slider arrow-style-two row gy-4">
          <Slider {...settings}>
            <div>
              <Link to="/all-product" className="text-center w-100">
                <span className="popular-item__icon">
                  <img src="assets/images/icons/hypermarkets.png" alt="" />
                </span>
                <h6 className="popular-item__title fw-semibold font-18">Hypermarkets</h6>
               
              </Link>
            </div>
            <div>
              <Link to="/all-product" className="text-center w-100">
                <span className="popular-item__icon">
                  <img src="assets/images/icons/fashion.png" alt="" />
                </span>
                <h6 className="popular-item__title fw-semibold font-18">Fashion</h6>
               
              </Link>
            </div>
            <div>
              <Link to="/all-product" className="text-center w-100">
                <span className="popular-item__icon">
                  <img src="assets/images/icons/malls.png" alt="" />
                </span>
                <h6 className="popular-item__title fw-semibold font-18">Shopping Malls</h6>
               
              </Link>
            </div>
            <div>
              <Link to="/all-product" className="text-center w-100">
                <span className="popular-item__icon">
                  <img src="assets/images/icons/electronics.png" alt="" />
                </span>
                <h6 className="popular-item__title fw-semibold font-18">Electronics</h6>
               
              </Link>
            </div>
            <div>
              <Link to="/all-product" className="text-center w-100">
                <span className="popular-item__icon">
                  <img src="assets/images/icons/jawellery.png" alt="" />
                </span>
                <h6 className="popular-item__title fw-semibold font-18">Jawellery</h6>
               
              </Link>
            </div>
            <div>
              <Link to="/all-product" className="text-center w-100">
                <span className="popular-item__icon">
                  <img src="assets/images/icons/onilne-shopping.png" alt="" />
                </span>
                <h6 className="popular-item__title fw-semibold font-18">Online Shopping</h6>
               
              </Link>
            </div>
          </Slider>
        </div>
        <div className="popular__button text-center">
          <Link
            to="/all-product"
            className="font-18 fw-600 text-heading hover-text-main text-decoration-underline font-heading"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
