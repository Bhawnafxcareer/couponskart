import React from 'react'

const OrderDetails = () => {
  return (
    <>
      <div className="dashboard-body__content">
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="profile-info">
              <div className='d-flex justify-content-between'>
                <div><h6 className='fw-semibold mb-0'>Order Number: #656454667j</h6>
                  <p>On Sun, 15th March</p></div>
                <div ><span class="badge bg-success-subtle text-success ">Paid</span> <span class="badge text-bg-success">Success</span></div>
              </div>
              <div className='mt-4'>
                <h5 className='mb-4'>SaaS dashboard digital products Title here</h5>
                <div>
                  <h6>Order Summary</h6>
                  <div>
                    <ul>
                      <li className='d-flex align-items-center justify-content-between'>
                        <span>Price:</span>
                        <span>₹ 500</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="profile-info">
              <div className="profile-info__inner d-flex align-items-center mb-40 ">
                <div className="avatar-upload me-3 m-0">
                  <div className="avatar-preview" style={{ width: "80px", height: "80px" }}>

                  </div>
                </div>
                <div>
                  <h6 className="profile-info__name mb-0">Michel Smith</h6>

                </div>
              </div>
              <ul className="profile-info-list">

                <li className="profile-info-list__item">
                  <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                    <img
                      src="assets/images/icons/profile-info-icon2.svg"
                      alt=""
                      className="icon"
                    />
                    <span className="text text-heading fw-500 font-14">Email</span>
                  </span>
                  <span className="profile-info-list__info font-14">
                    michel15@gmail.com
                  </span>
                </li>
                <li className="profile-info-list__item">
                  <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                    <img
                      src="assets/images/icons/profile-info-icon3.svg"
                      alt=""
                      className="icon"
                    />
                    <span className="text text-heading fw-500 font-14">Phone</span>
                  </span>
                  <span className="profile-info-list__info font-14">
                    +880 15589 236 45
                  </span>
                </li>
                <li className="profile-info-list__item">
                  <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                    <img
                      src="assets/images/icons/profile-info-icon4.svg"
                      alt=""
                      className="icon"
                    />
                    <span className="text text-heading fw-500 font-14">Country</span>
                  </span>
                  <span className="profile-info-list__info font-14">Bangladesh</span>
                </li>
                <li className="profile-info-list__item">
                  <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                    <img
                      src="assets/images/icons/profile-info-icon5.svg"
                      alt=""
                      className="icon"
                    />
                    <span className="text text-heading fw-500 font-14">Balance</span>
                  </span>
                  <span className="profile-info-list__info font-14">$0.00 USD</span>
                </li>
                <li className="profile-info-list__item">
                  <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                    <img
                      src="assets/images/icons/profile-info-icon6.svg"
                      alt=""
                      className="icon"
                    />
                    <span className="text text-heading fw-500 font-14">Member Since</span>
                  </span>
                  <span className="profile-info-list__info font-14">Jan, 01, 2024</span>
                </li>
                <li className="profile-info-list__item">
                  <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                    <img
                      src="assets/images/icons/profile-info-icon7.svg"
                      alt=""
                      className="icon"
                    />
                    <span className="text text-heading fw-500 font-14">Purchased</span>
                  </span>
                  <span className="profile-info-list__info font-14">0 items</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetails