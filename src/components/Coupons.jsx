import React, { useState } from 'react'
import couponData from '../json/coupon.json'


const Coupons = () => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const copyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
        });
    };
    return (
        <>
            <div className="dashboard-body__content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="refund-feedback">
                            <h5 className="refund-feedback__title">All Orders</h5>
                            <p className="refund-feedback__desc">There are no open refund requests at the moment.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt-4">
                    {couponData.map((coupon, index) => (
                        <div className="col-xl-6" key={index}>
                            <div className="coupons-orders">
                                <div className="row g-0">
                                    <div className="col-md-5">
                                        <img src={coupon.image} alt="Coupon" className='' />
                                    </div>
                                    <div className="col-md-7 position-relative">
                                        <div className="ps-lg-4 p-4 text-md-start">
                                            <div className="circle2 up"></div>
                                            <div className="circle2 down"></div>
                                            <div className="coupon-content">
                                                <h6 className='buy-status text-success fw-semibold mb-0 font-14'>{coupon.status}</h6>
                                                <p className='font-12'>On {coupon.date}</p>
                                                <h3 className='coupons-title mb-0 mt-3 line-clamp1'>{coupon.title}</h3>
                                                {coupon.code && (
                                                    <p className='font-14 mt-2'>Code: {coupon.code} <span onClick={() => copyToClipboard(coupon.code, index)}
                                                        style={{ cursor: "pointer", marginLeft: "5px", color: "blue" }}><i className="las la-copy"></i></span>
                                                        {copiedIndex === index && (
                                                            <span style={{ marginLeft: "10px", color: "green" }}>Copied!</span>
                                                        )}</p>

                                                )}
                                                <h6 className='coupons-price mb-0 mt-4 text-end'>{coupon.price}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Coupons
