import React from 'react'

const Orders = () => {
    return (
        <>

            <div className="dashboard-body__content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="refund-feedback">
                            <h5 className="refund-feedback__title">
                                All Orders
                            </h5>
                            <p className="refund-feedback__desc">
                                There are no open refund requests at the moment.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt-4">
                    <div className="col-md-6">
                        <div className="coupons-orders ">
                            <div className="row g-0">
                                <div className="col-lg-5">
                                    <img src="	http://localhost:3000/assets/images/thumbs/coupon1.jpg" alt="" className='' />

                                </div>
                                <div className="col-lg-7">
                                    <div className=" position-relative ps-lg-4  p-4 text-center text-md-start ">
                                        <div className="coupon-content">
                                            <h6 className='buy-status text-success fw-semibold mb-0 font-14'>Purchased</h6>
                                            <p className='font-12'>On Sun, 15th March</p>
                                            <h3 className='coupons-title mb-0 mt-3'>SaaS dashboard digital products Title here</h3>
                                            <h6 className='coupons-price mb-0 mt-4 text-end'>₹ 500/-</h6>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="coupons-orders ">
                            <div className="row g-0">
                                <div className="col-lg-5">
                                    <img src="	http://localhost:3000/assets/images/thumbs/coupon1.jpg" alt="" className='' />

                                </div>
                                <div className="col-lg-7">
                                    <div className=" position-relative ps-lg-4  p-4 text-center text-md-start ">
                                    <div class="circle up"></div>
                                    <div class="circle down"></div>
                                        <div className="coupon-content">
                                            <h6 className='buy-status text-success fw-semibold mb-0 font-14'>Purchased</h6>
                                            <p className='font-12'>On Sun, 15th March</p>
                                            <h4 className='coupons-title mb-0 mt-3'>SaaS dashboard digital products Title here</h4>
                                            <h6 className='coupons-price mb-0 mt-4 text-end'>₹ 500/-</h6>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Orders
