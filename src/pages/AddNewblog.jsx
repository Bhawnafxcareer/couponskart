import React, { useState } from 'react'
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'
import { CKEditor } from 'ckeditor4-react';
const AddNewblog = () => {

    //const [data, setData] = useState('<p>Hello from CKEditor 4.22.1!</p>');
    return (
        <>
            <MasterLayout>
                {/* Preloader */}
                <Preloader />
                <div className="dashboard-body__content">
                    <div className="row gy-4">
                        <div className="col-lg-12">
                            <div className="refund-feedback">
                                <h5 className="refund-feedback__title mb-4">Add New Blog</h5>
                                <form>
                                    <div className="row g-4">
                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Blog Title</label>
                                            <input type="text" name="title" className="form-control common-input border" value="" />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Date</label>
                                            <input type="date" name="" className="form-control common-input border" value="" />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Blog Author</label>
                                            <input type="text" name="" className="form-control common-input border" value="" />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Blog Slug</label>
                                            <input type="text" name="" className="form-control common-input border" value="" />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">SEO Title</label>
                                            <input type="text" name="" className="form-control common-input border" value="" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">SEO Keywords</label>
                                            <input type="text" name="" className="form-control common-input border" value="" />
                                        </div>


                                        <div className="col-md-6">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">SEO Description</label>
                                            <textarea name="" id="" rows={3} className="common-input border p-0"></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Blog Long Description</label>
                                            <textarea name="" id="" rows={3} className="common-input border p-0"></textarea>
                                        </div>
                                        <div className="col-md-12 ">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Upload Featured Image</label>
                                            <input type="file" accept="image/*" className="common-input border p-0" />
                                            {/* <img src="" alt="Coupon" width="100px" className="mt-4" /> */}
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <CKEditor
                                                initData={""}
                                                config={{
                                                    removePlugins: 'exportpdf,wsc,scayt', // Remove any license-bound features
                                                    toolbar: [
                                                        ['Bold', 'Italic', 'Underline'],
                                                        ['NumberedList', 'BulletedList'],
                                                        ['Link', 'Unlink'],
                                                        ['Undo', 'Redo'],
                                                        ['Source']
                                                    ]
                                                }}
                                            />
                                        </div>

                                    </div>

                                    <button type="button" className="btn btn-main btn-md pill fw-300">Save Changes</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </MasterLayout>
        </>
    )
}

export default AddNewblog