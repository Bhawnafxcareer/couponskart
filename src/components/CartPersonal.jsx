import { Link } from "react-router-dom";

const CartPersonal = () => {
  return (
    <section className="cart-personal padding-y-120">
      <div className="container container-two">
        <div className="row gy-5">
          <div className="col-lg-8 pe-sm-5">
            <div className="cart-personal__content">
              <h5 className="cart-personal__title mb-32">Personal information</h5>
              <form action="#">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="form-label font-18 mb-2 fw-500 font-heading"
                  >
                    Email Address <span className="text-danger">*</span>{" "}
                  </label>
                  <span className="text d-block mb-2">
                    We will send the purchase receipt to this address.
                  </span>
                  <input
                    type="email"
                    className="common-input"
                    id="email"
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="form-label font-18 mb-2 fw-500 font-heading"
                  >
                    First Name <span className="text-danger">*</span>{" "}
                  </label>
                  <span className="text d-block mb-2">
                    We will use this to personalize your account experience.
                  </span>
                  <input
                    type="text"
                    className="common-input"
                    id="name"
                    placeholder="First name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="form-label font-18 mb-2 fw-500 font-heading"
                  >
                    Last name <span className="text-danger">*</span>{" "}
                  </label>
                  <span className="text d-block mb-2">
                    We will use this to personalize your account experience.
                  </span>
                  <input
                    type="text"
                    className="common-input"
                    id="lastName"
                    placeholder="Last name"
                  />
                </div>

              </form>
            </div>

            <div className="cart-content__bottom flx-between gap-2">
              <Link
                to="/product-details"
                className="btn btn-outline-light flx-align gap-2 pill btn-lg"
              >
                <span className="icon line-height-1 font-20">
                  <i className="las la-arrow-left" />
                </span>
                Back
              </Link>
              <Link
                to="/cart-payment"
                className="btn btn-main flx-align gap-2 pill btn-lg"
              >
                Proceed To Payment
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="order-summary">
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

            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default CartPersonal;