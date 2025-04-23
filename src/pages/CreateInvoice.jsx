import React, { useState } from 'react'
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'

const CreateInvoice = () => {
    const [paymentStatus, setPaymentStatus] = useState("Paid");
    return (
        <>
            <MasterLayout>
                {/* Preloader */}
                <Preloader />
                <div className="dashboard-body__content">
                    <div className="row gy-4">
                        <div className="col-12">
                            <div className="card common-card border border-gray-five">
                                <div className="card-body">
                                    <form action="">
                                        <div className="row g-4 border-bottom">
                                            <div className="col-lg-12">
                                                <img src="/assets/images/logo/logo-two.png" alt="Logo" width={"150px"} className='mb-4' />
                                            </div>
                                            <div className="col-lg-6">
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Sender Name</label>
                                                    <input type="text" name="" className="form-control common-input border" value="" />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Sender Address</label>
                                                    <input type="text" name="" className="form-control common-input border" value="" />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Sender Phone Mobile</label>
                                                    <input type="text" name="" className="form-control common-input border" value="" />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Invoice Number</label>
                                                    <input type="text" name="" className="form-control common-input border" value="" />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Issue Date :</label>
                                                    <input type="date" name="" className="form-control common-input border" value="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">


                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Due Date :</label>
                                                    <input type="date" name="" className="form-control common-input border" value="" />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Customer Name</label>
                                                    <input type="date" name="" className="form-control common-input border" value="" />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Customer Mobile Number</label>
                                                    <input type="date" name="" className="form-control common-input border" value="" />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Status</label>
                                                    <div className="select-has-icon">
                                                        <select className="common-input border" name=""
                                                            value={paymentStatus}
                                                            onChange={(e) => setPaymentStatus(e.target.value)}>
                                                            <option value="Paid">Paid</option>
                                                            <option value="Unpaid">Unpaid</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-4 pt-4">
                                            <div className="col-lg-6">
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Coupons Name</label>
                                                    <input type="text" name="" className="form-control common-input border" value="" />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Coupons Quantity</label>
                                                    <input type="text" name="" className="form-control common-input border" value="" />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Price</label>
                                                    <input type="text" name="" className="form-control common-input border" value="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Sub Total</label>
                                                    <input type="text" name="" className="form-control common-input border" value="" />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Discount Total</label>
                                                    <input type="text" name="" className="form-control common-input border" value="" />
                                                </div>
                                                <div className='mb-4'>
                                                    <label className="form-label mb-2 font-18 font-heading fw-600">Amount Payable</label>
                                                    <input type="text" name="" className="form-control common-input border" value="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                            <button type="button" className="btn btn-main btn-md pill fw-300">Create Invoice</button>
                                                
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </MasterLayout>
        </>
    )
}

export default CreateInvoice