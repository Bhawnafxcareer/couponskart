
import { Link } from "react-router-dom";
import Slider from "react-slick";

const CartPayment = () => {

    return (
        <section className="cart-payment padding-y-120 overflow-hidden">
            <div className="container container-two">

                <div className="cart-payment__box position-relative z-index-1 overflow-hidden">
                    <img
                        src="assets/images/shapes/pattern-curve-six.png"
                        alt=""
                        className="position-absolute end-0 top-0 z-index--1"
                    />
                    <img
                        src="assets/images/shapes/pattern-curve-five.png"
                        alt=""
                        className="position-absolute start-0 top-0 z-index--1"
                    />
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-10">                          
                            <div className="cart-payment-card">
                                <div className="">
                                    <h5 className="order-summary__title mb-32">Order Summary</h5>
                                    <ul className="billing-list">
                                        <li className="billing-list__item flx-between">
                                            <span className="text text-heading fw-500">You have 3 items</span>
                                            <span className="amount text-heading fw-500">$259.00</span>
                                        </li>
                                        <li className="billing-list__item flx-between">
                                            <span className="text text-heading fw-500">Discount</span>
                                            <span className="amount text-body">$00.00</span>
                                        </li>
                                        <li className="billing-list__item flx-between">
                                            <span className="text text-heading fw-500">Handling Fee</span>
                                            <span className="amount text-body">$15.00</span>
                                        </li>
                                        <li className="billing-list__item flx-between">
                                            <span className="text text-heading fw-500">Subtotal</span>
                                            <span className="amount text-body">$15.00</span>
                                        </li>
                                        <li className="billing-list__item flx-between">
                                            <span className="text text-heading font-20 fw-500 font-heading">
                                                Total
                                            </span>
                                            <span className="amount text-heading font-20 fw-500 font-heading">
                                                $274.00
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="col-lg-12 mt-4">
                                        <Link
                                            to="/cart-thank-you"
                                            className="btn btn-main btn-lg w-100 pill"
                                        >
                                            {" "}
                                            Confirm Payment
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-content__bottom flx-between gap-2">
                    <Link
                        to="/cart-personal"
                        className="btn btn-outline-light flx-align gap-2   pill btn-lg"
                    >
                        <span className="icon line-height-1 font-20">
                            <i className="las la-arrow-left" />
                        </span>
                        Back
                    </Link>
                </div>
            </div>
        </section>

    );
}

export default CartPayment;