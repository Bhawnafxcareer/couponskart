import React, { useState, useEffect } from "react";
import Preloader from "../helper/Preloader";
import MasterLayout from "../layout/MasterLayout";
import categoryData from "../json/categories.json"; // Import category JSON

const AddCoupons = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    validTill: "",
    users: "",
    category: "",
    price: "",
    image: null,
    imagePreview: null,
  });

  useEffect(() => {
    if (categoryData.categories) {
      setCategories(categoryData.categories);
    }
  }, []);

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
    <MasterLayout>
      <Preloader />
      <div className="dashboard-body__content">
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="refund-feedback">
              <h5 className="refund-feedback__title mb-4">Add New Coupon</h5>
              <form>
                <div className="row g-4">
                  {/* Coupon Name */}
                  <div className="col-md-6">
                    <label className="form-label mb-2 font-18 font-heading fw-600">Coupon Name</label>
                    <input type="text" name="title" className="form-control common-input border" value={formData.title} onChange={handleInputChange} />
                  </div>

                  {/* Valid Till */}
                  <div className="col-md-6">
                    <label className="form-label mb-2 font-18 font-heading fw-600">Valid Till</label>
                    <input type="date" name="validTill" className="form-control common-input border" value={formData.validTill} onChange={handleInputChange} />
                  </div>

                  {/* Valid Users */}
                  <div className="col-md-6">
                    <label className="form-label mb-2 font-18 font-heading fw-600">Valid Users</label>
                    <input type="text" name="users" className="form-control common-input border" value={formData.users} onChange={handleInputChange} />
                  </div>

                  {/* Coupon Category */}
                  <div className="col-md-6">
                    <label className="form-label mb-2 font-18 font-heading fw-600">Coupon Category</label>
                    <div className="select-has-icon">
                      <select className="common-input border" name="category" value={formData.category} onChange={handleInputChange}>
                        <option value="">Select a category</option>
                        {categories.map((cat, index) => (
                          <option key={index} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-md-6">
                    <label className="form-label mb-2 font-18 font-heading fw-600">Price</label>
                    <input type="text" name="price" className="form-control common-input border" value={formData.price} onChange={handleInputChange} />
                  </div>

                  {/* Upload Coupon Image */}
                  <div className="col-md-12 mb-4">
                    <label className="form-label mb-2 font-18 font-heading fw-600">Upload Coupon Image</label>
                    <input type="file" accept="image/*" className="common-input border p-0" onChange={handleImageUpload} />
                    {formData.imagePreview && (
                      <div className="mt-3">
                        <img src={formData.imagePreview} alt="Coupon Preview" className="img-thumbnail" width="150" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button type="button" className="btn btn-main btn-md pill fw-300">
                  Add Coupon
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default AddCoupons;
