import React, {useState} from 'react'
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'
import { CKEditor } from 'ckeditor4-react';
const AddNewblog = () => {

    const [content, setContent] = useState('');
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
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Blog Short Description</label>
                                            <textarea name="" id="" rows={3} className="common-input border p-0"></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Blog Long Description</label>
                                            <textarea name="" id="" rows={3} className="common-input border p-0"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                        <CKEditor
        scriptUrl="https://cdn.ckeditor.com/4.21.0/standard/ckeditor.js"
        initData="<p>Start writing...</p>"
        onChange={(event) => setContent(event.editor.getData())}
      />
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Upload Featured Image</label>
                                            <input type="file" accept="image/*" className="common-input border p-0" />
                                            <img src="" alt="Coupon" width="100px" className="mt-4" />
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