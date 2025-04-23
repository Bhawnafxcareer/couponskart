import React from 'react'
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'

const AddSeoDetails = () => {
    return (
        <>
            <MasterLayout>
                {/* Preloader */}
                <Preloader />
                <div className="dashboard-body__content">
                    <div className="row gy-4">
                        <div className="col-lg-12">
                            <div className="refund-feedback">
                                <h5 className="refund-feedback__title mb-4">Add SEO Details</h5>
                                <form>
                                    <div className="row g-4">
                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Select Page</label>

                                            <div className="select-has-icon">
                                                <select className="common-input border" name="" value="">
                                                    <option value="">Select a category</option>
                                                    <option value="">Home</option>
                                                    <option value="">About</option>
                                                    <option value="">Contact</option>

                                                </select>

                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">SEO Title</label>
                                            <input type="text" name="" className="form-control common-input border" value="" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">SEO Keywords</label>
                                            <input type="text" name="" className="form-control common-input border" value="" />
                                        </div>


                                        <div className="col-md-12">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">SEO Description</label>
                                            <textarea name="" id="" rows={3} className="common-input border "></textarea>
                                        </div>

                                    </div>

                                    <button type="button" className="btn btn-main btn-md pill fw-300 mt-4">Save Changes</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </MasterLayout>
        </>

    )
}

export default AddSeoDetails