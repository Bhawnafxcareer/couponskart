
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ResourceOne = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className=" padding-y-120  position-relative z-index-1 overflow-hidden">

      <div className="container container-two">
        <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
          <div className="section-heading__inner w-lg">
            <h3 className="section-heading__title">Featured Coupons</h3>
            <p className="section-heading__desc">
              Every month we pick some best products for you. This month's best
              web themes &amp; templates have arrived, chosen by our content
              specialists.
            </p>
          </div>
          <Link to="#" className="btn btn-main btn-lg pill">
            View All Items
          </Link>
        </div>
        <div className="resource-slider gy-4">
          <Slider {...settings}>
            <div className="product-item shadow-sm">
              <div className="product-item__thumb d-flex">
                <Link to="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/card1.webp"
                    alt=""
                    className="cover-img"
                  />
                </Link>               
              </div>
            </div>
            <div className="product-item shadow-sm">
              <div className="product-item__thumb d-flex">
                <Link to="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/card2.webp"
                    alt=""
                    className="cover-img"
                  />
                </Link>
              </div> 
            </div>
            <div className="product-item shadow-sm">
              <div className="product-item__thumb d-flex">
                <Link to="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/card3.webp"
                    alt=""
                    className="cover-img"
                  />
                </Link>
              </div> 
            </div>

            <div className="product-item shadow-sm">
              <div className="product-item__thumb d-flex">
                <Link to="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/card2.webp"
                    alt=""
                    className="cover-img"
                  />
                </Link>
              </div> 
            </div>
            <div className="product-item shadow-sm">
              <div className="product-item__thumb d-flex">
                <Link to="/product-details" className="link w-100">
                  <img
                    src="assets/images/thumbs/card5.webp"
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

export default ResourceOne;
