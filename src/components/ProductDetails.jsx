import { Link } from "react-router-dom";


const ProductDetails = () => {

    return (
        <div className="product-details mt-32 padding-b-120">
            <div className="container container-two">
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <div className="tab-content" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="pills-product-details"
                                role="tabpanel"
                                aria-labelledby="pills-product-details-tab"
                                tabIndex={0}
                            >
                                {/* Product Details Content Start */}
                                <div className="product-details">
                                    <div className="product-details__thumb">
                                        <img src="assets/images/thumbs/coupon4.png" alt="" />
                                    </div>

                                    <p className="product-details__desc">
                                        System management saas products, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident.
                                    </p>


                                </div>
                                {/* Product Details Content End */}
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-rating"
                                role="tabpanel"
                                aria-labelledby="pills-rating-tab"
                                tabIndex={0}
                            >
                                <div className="product-review-wrapper">
                                    <div className="product-review">
                                        <div className="product-review__top flx-between">
                                            <div className="product-review__rating flx-align">
                                                <div className="d-flex align-items-center gap-1">
                                                    <ul className="star-rating">
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <span className="star-rating__text text-body"> 5.0</span>
                                                </div>
                                                <span className="product-review__reason">
                                                    For{" "}
                                                    <span className="product-review__subject">
                                                        Customer Support
                                                    </span>{" "}
                                                </span>
                                            </div>
                                            <div className="product-review__date">
                                                by{" "}
                                                <Link to="#" className="product-review__user text--base">
                                                    John Doe{" "}
                                                </Link>{" "}
                                                2 month ago
                                            </div>
                                        </div>
                                        <div className="product-review__body">
                                            <p className="product-review__desc">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Quibusdam itaque vitae ex possimus delectus? Voluptas
                                                expedita accusantium aperiam quo quod dolore dignissimos
                                                rerum praesentium deserunt libero recusandae quisquam est
                                                accusamus eos dolorum sit explicabo, sapiente pariatur
                                                voluptates veniam aut veritatis, magnam velit similique! Ex
                                                similique magni labore aperiam, eius quas molestiae
                                                accusantium porro eaque esse minus amet doloribus quo odit
                                                illo doloremque.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="product-review">
                                        <div className="product-review__top flx-between">
                                            <div className="product-review__rating flx-align">
                                                <div className="d-flex align-items-center gap-1">
                                                    <ul className="star-rating">
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="star-rating__item font-11">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <span className="star-rating__text text-body"> 5.0</span>
                                                </div>
                                                <span className="product-review__reason">
                                                    For{" "}
                                                    <span className="product-review__subject">
                                                        Customer Support
                                                    </span>{" "}
                                                </span>
                                            </div>
                                            <div className="product-review__date">
                                                by{" "}
                                                <Link to="#" className="product-review__user text--base">
                                                    John Doe{" "}
                                                </Link>{" "}
                                                2 month ago
                                            </div>
                                        </div>
                                        <div className="product-review__body">
                                            <p className="product-review__desc">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Quibusdam itaque vitae ex possimus delectus? Voluptas
                                                expedita accusantium aperiam quo quod dolore dignissimos
                                                rerum praesentium deserunt libero recusandae quisquam est
                                                accusamus eos dolorum sit explicabo, sapiente pariatur
                                                voluptates veniam aut veritatis, magnam velit similique! Ex
                                                similique magni labore aperiam, eius quas molestiae
                                                accusantium porro eaque esse minus amet doloribus quo odit
                                                illo doloremque.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-comments"
                                role="tabpanel"
                                aria-labelledby="pills-comments-tab"
                                tabIndex={0}
                            >
                                {/* Comment Start */}
                                <div className="comment mt-64 mb-64">
                                    <h5 className="mb-32">2 Comments</h5>
                                    <ul className="comment-list">
                                        <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                                            <div className="comment-list__thumb flex-shrink-0">
                                                <img
                                                    src="assets/images/thumbs/comment1.png"
                                                    className="cover-img"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="comment-list__content">
                                                <div className="flx-between gap-2 align-items-start">
                                                    <div>
                                                        <h6 className="comment-list__name font-18 mb-sm-2 mb-1">
                                                            Jenny Wilson
                                                        </h6>
                                                        <span className="comment-list__date font-14">
                                                            Jan 21, 2024 at 11:25 pm
                                                        </span>
                                                    </div>
                                                    <Link
                                                        className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline"
                                                        to="#comment-box"
                                                    >
                                                        Reply
                                                        <span className="icon">
                                                            <img
                                                                src="assets/images/icons/reply-icon.svg"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </Link>
                                                </div>
                                                <p className="comment-list__desc mt-3">
                                                    Lorem ipsum dolor sit amet consectetur. Nec nunc
                                                    pellentesque massa pretium. Quam sapien nec venenatis
                                                    vivamus sed cras faucibus mi viverra. Quam faucibus morbi
                                                    cras vitae neque. Necnunc pellentesque massa pretium.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <ul className="comment-list comment-list--two">
                                                <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                                                    <div className="comment-list__thumb flex-shrink-0">
                                                        <img
                                                            src="assets/images/thumbs/comment2.png"
                                                            className="cover-img"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="comment-list__content">
                                                        <div className="flx-between gap-2 align-items-start">
                                                            <div>
                                                                <h6 className="comment-list__name font-18 mb-sm-2 mb-1">
                                                                    Courtney Henry
                                                                </h6>
                                                                <span className="comment-list__date font-14">
                                                                    Jan 21, 2024 at 11:25 pm
                                                                </span>
                                                            </div>
                                                            <Link
                                                                className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline"
                                                                to="#comment-box"
                                                            >
                                                                Reply
                                                                <span className="icon">
                                                                    <img
                                                                        src="assets/images/icons/reply-icon.svg"
                                                                        alt=""
                                                                    />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <p className="comment-list__desc mt-3">
                                                            Lorem ipsum dolor sit amet consectetur. Nec nunc
                                                            pellentesque massa pretium. Quam sapien nec venenatis
                                                            vivamus sed cras faucibus.
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* Comment End */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* ======================= Product Sidebar Start ========================= */}
                        <div className="product-sidebar section-bg">
                            <div className="product-sidebar__top position-relative flx-between gap-1">
                                <div className="license-dropdown">
                                    <div className="license-dropdown__item mb-3">
                                        <h6 className="license-dropdown__title font-body mb-1 font-16">
                                            Regular License
                                        </h6>
                                        <p className="license-dropdown__desc font-13">
                                            Use, by you or one client, in a solitary finished result which
                                            end clients are not charged for. The complete cost
                                            incorporates the thing cost and a purchaser expense..
                                        </p>
                                    </div>
                                    <div className="license-dropdown__item">
                                        <h6 className="license-dropdown__title font-body mb-1 font-16">
                                            Extended License
                                        </h6>
                                        <p className="license-dropdown__desc font-13">
                                            Use, by you or one client, in a solitary final result which
                                            end clients can be charged for. The all out cost incorporates
                                            the thing cost and a purchaser expense.
                                        </p>
                                    </div>
                                    <div className="mt-3 pt-2 border-top text-center ">
                                        <Link
                                            to="#"
                                            className="link hover-text-decoration-underline font-14 text-main fw-500"
                                        >
                                            View License Details
                                        </Link>
                                    </div>
                                </div>
                                <h6 className="product-sidebar__title">$1580.00</h6>
                            </div>
                            <ul className="sidebar-list">
                                <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
                                    <span className="icon">
                                        <img src="assets/images/icons/check-cirlce.svg" alt="" />
                                    </span>
                                    <span className="text">Quality verified</span>
                                </li>
                                <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
                                    <span className="icon">
                                        <img src="assets/images/icons/check-cirlce.svg" alt="" />
                                    </span>
                                    <span className="text">Use for a single project</span>
                                </li>
                                <li className="sidebar-list__item flx-align gap-2 font-14 fw-300">
                                    <span className="icon">
                                        <img src="assets/images/icons/check-cirlce.svg" alt="" />
                                    </span>
                                    <span className="text">Non-paying users only</span>
                                </li>
                            </ul>
                            <div className="flx-between mt-3">
                                <div className="common-check mb-0">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="checkbox"
                                        id="extended"
                                    />
                                    <label
                                        className="form-check-label mb-0 fw-300 text-body"
                                        htmlFor="extended"
                                    >
                                        Extended support 12 month
                                    </label>
                                </div>
                                <div className="flx-align gap-2">
                                    <span className="product-item__prevPrice text-decoration-line-through">
                                        $12
                                    </span>
                                    <h6 className="product-item__price mb-0 font-14 fw-500">$7.25</h6>
                                </div>
                            </div>
                            <Link to="/cart" className="btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 mt-32"
                            ><img src="assets/images/icons/add-to-cart.svg" alt="" />Buy Now </Link>
                           
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductDetails;