import React, { useState } from 'react'
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'

const AddCategory = () => {

    const [formData, setFormData] = useState({
        category: "",
        imagePreview: null,
    });
    // Handle Input Change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle Image Upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                image: file,
                imagePreview: URL.createObjectURL(file),
            });
        }
    };
    return (
        <>

            <MasterLayout>
                {/* Preloader */}
                <Preloader />
                <div className="dashboard-body__content">
                    <div className="row gy-4">
                        <div className="col-lg-12">
                            <div className="refund-feedback">
                                <h5 className="refund-feedback__title mb-4">Add Category</h5>
                                <form>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Category Name</label>
                                            <input type="text" name="category" className="form-control common-input border" value={formData.category} onChange={handleInputChange} />
                                        </div>

                                        {/* Upload Coupon Image */}
                                        <div className="col-md-6 mb-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Upload Coupon Image</label>
                                            <input type="file" accept="image/*" className="common-input border p-0" onChange={handleImageUpload} />
                                            {formData.imagePreview && (
                                                <div className="mt-3">
                                                    <img src={formData.imagePreview} alt="category Preview" className="img-thumbnail" width="150" />
                                                </div>
                                            )}
                                        </div>

                                    </div>

                                    <button type="button" className="btn btn-main btn-md pill fw-300 mt-4">Add Category</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </MasterLayout>

        </>
    )
}

export default AddCategory