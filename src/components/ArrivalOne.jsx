import { Link } from "react-router-dom";


const ArrivalOne = () => {
  return (
    <section className="arrival-product padding-y-120 section-bg position-relative z-index-1">
      <img
        src="assets/images/gradients/product-gradient.png"
        alt=""
        className="bg--gradient white-version"
      />
      <img
        src="assets/images/shapes/element2.png"
        alt=""
        className="element one"
      />
      <div className="container container-two">
        <div className="section-heading">
          <h3 className="section-heading__title">New Arrival Products</h3>
        </div>
        <ul
          className="nav common-tab justify-content-center nav-pills mb-48"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-all-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all"
              type="button"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"
            >
              All Item
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-hypermarket-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-hypermarket"
              type="button"
              role="tab"
              aria-controls="pills-hypermarket"
              aria-selected="false"
            >
              Hypermarket
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-fashion-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-fashion"
              type="button"
              role="tab"
              aria-controls="pills-fashion"
              aria-selected="false"
            >
              Fashion
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-shopping-malls-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-shopping-malls"
              type="button"
              role="tab"
              aria-controls="pills-shopping-malls"
              aria-selected="false"
            >
              Shopping Malls
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-Electronics-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Electronics"
              type="button"
              role="tab"
              aria-controls="pills-Electronics"
              aria-selected="false"
            >
              Electronics
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-online-shopping-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-online-shopping"
              type="button"
              role="tab"
              aria-controls="pills-online-shopping"
              aria-selected="false"
            >
             Online Shopping
            </button>
          </li>

        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon1.jpg"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon2.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon3.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon4.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon4.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon3.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon2.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon1.jpg"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-hypermarket"
            role="tabpanel"
            aria-labelledby="pills-hypermarket-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon1.jpg"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon2.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon3.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon4.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon4.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon3.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon2.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon1.jpg"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-fashion"
            role="tabpanel"
            aria-labelledby="pills-fashion-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon1.jpg"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon2.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon3.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon4.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon4.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon3.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon2.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon1.jpg"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-shopping-malls"
            role="tabpanel"
            aria-labelledby="pills-shopping-malls-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon1.jpg"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon2.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon3.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon4.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon4.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon3.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon2.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon1.jpg"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-Electronics"
            role="tabpanel"
            aria-labelledby="pills-Electronics-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon1.jpg"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon2.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon3.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon4.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon4.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon3.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon2.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon1.jpg"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-online-shopping"
            role="tabpanel"
            aria-labelledby="pills-online-shopping-tab"
            tabIndex={0}
          >
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon1.jpg"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon2.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon3.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon4.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon4.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon3.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon2.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/coupon1.jpg"
                        alt=""
                        className="cover-img"
                      />
                    </Link>

                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>


                  </div>
                </div>
              </div>
            </div>
          </div>
          

        </div>
        <div className="text-center mt-64">
          <Link
            to="/all-product"
            className="btn btn-main btn-lg pill fw-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArrivalOne;
