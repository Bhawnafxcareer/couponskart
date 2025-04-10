import React from 'react'
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'
import { Link } from "react-router-dom";
const ViewVendor = () => {
    return (
        <>
            <MasterLayout>
                <Preloader />
                <div className="dashboard-body__content">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="refund-feedback">
                                <h5 className="refund-feedback__title mb-4">Vendor Details</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-5">
                            <div className='profile-info p-4'>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className='vendor-profile-pic bg-light text-center  rounded p-4 mb-2  py-5'>
                                            <img src="/assets/images/icons/zara.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="vendor-profile">
                                            <h5 className='fw-semibold mb-0'>ZARA International</h5>
                                            <Link to="/" className='text-primary'>www.larkon.com</Link>
                                            <ul className='mt-2'>
                                                <li className='pb-2'><i className="fas fa-envelope avatar-sm me-2 "></i> zarafashionworld@dayrep.com</li>
                                                <li><i className="fas fa-phone-alt avatar-sm me-2 "></i> +243 812-801-9335</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className="dashboard-widget border-five">
                                        <img
                                            src="/assets/images/shapes/widget-shape1.png"
                                            alt=""
                                            className="dashboard-widget__shape one"
                                        />
                                        <img
                                            src="/assets/images/shapes/widget-shape2.png"
                                            alt=""
                                            className="dashboard-widget__shape two"
                                        />
                                        <span className="dashboard-widget__icon">
                                            <img
                                                src="/assets/images/icons/coupons-p.png"
                                                alt=""
                                            />

                                        </span>
                                        <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                            <div>
                                                <h4 className="dashboard-widget__number mb-1 mt-3">100</h4>
                                                <span className="dashboard-widget__text font-14">
                                                Item Stock
                                                </span>
                                            </div>
                                            <img src="/assets/images/icons/chart-icon.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="dashboard-widget border-five">
                                        <img
                                            src="/assets/images/shapes/widget-shape1.png"
                                            alt=""
                                            className="dashboard-widget__shape one"
                                        />
                                        <img
                                            src="/assets/images/shapes/widget-shape2.png"
                                            alt=""
                                            className="dashboard-widget__shape two"
                                        />
                                        <span className="dashboard-widget__icon">
                                            <img
                                                src="/assets/images/icons/expense.png"
                                                alt=""
                                            />
                                        </span>
                                        <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                            <div>
                                                <h4 className="dashboard-widget__number mb-1 mt-3">₹ 20,000</h4>
                                                <span className="dashboard-widget__text font-14">
                                                Sells
                                                </span>
                                            </div>
                                            <img src="/assets/images/icons/chart-icon.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="dashboard-widget border-five">
                                        <img
                                            src="/assets/images/shapes/widget-shape1.png"
                                            alt=""
                                            className="dashboard-widget__shape one"
                                        />
                                        <img
                                            src="/assets/images/shapes/widget-shape2.png"
                                            alt=""
                                            className="dashboard-widget__shape two"
                                        />
                                        <span className="dashboard-widget__icon">
                                            <img
                                                src="/assets/images/icons/loyal-customer.png"
                                                alt=""
                                            />
                                        </span>
                                        <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                            <div>
                                                <h4 className="dashboard-widget__number mb-1 mt-3">200+</h4>
                                                <span className="dashboard-widget__text font-14">
                                                Happy Customer
                                                </span>
                                            </div>
                                            <img src="/assets/images/icons/chart-icon.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MasterLayout>
        </>
    )
}

export default ViewVendor