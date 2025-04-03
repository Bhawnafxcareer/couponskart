import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productData from '../json/productdata.json';
import categoryData from '../json/categories.json'; // Import category JSON
import Preloader from "../helper/Preloader";
import MasterLayout from "../layout/MasterLayout";

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    validTill: '',
    users: '',
    category: '',
    price: '',
    couponImage: '' // Stores the image URL or preview
  });

  useEffect(() => {
    if (categoryData.categories) {
      setCategories(categoryData.categories);
    }

    const foundProduct = productData.find(item => item.id.toString() === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setFormData({
        title: foundProduct.title,
        validTill: foundProduct.validTill,
        users: foundProduct.users,
        category: foundProduct.category,
        price: foundProduct.price,
        couponImage: foundProduct.couponImage
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        couponImage: imageUrl,
      }));
    }
  };

  const handleSave = () => {
    console.log('Updated Data:', formData);
    alert('Product Updated Successfully!');
    navigate('/');
  };

  return (
    <MasterLayout>
      <Preloader />
      <div className="dashboard-body__content">
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="refund-feedback">
              <h5 className="refund-feedback__title mb-4">{formData.title}</h5>
              <form>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label mb-2 font-18 font-heading fw-600">Coupon Name</label>
                    <input type="text" name="title" className="form-control common-input border" value={formData.title} onChange={handleChange} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-2 font-18 font-heading fw-600">Valid Till</label>
                    <input type="date" name="validTill" className="form-control common-input border" value={formData.validTill} onChange={handleChange} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-2 font-18 font-heading fw-600">Valid Users</label>
                    <input type="text" name="users" className="form-control common-input border" value={formData.users} onChange={handleChange} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-2 font-18 font-heading fw-600">Coupon Category</label>
                    <div className="select-has-icon">
                      <select className="common-input border" name="category" value={formData.category} onChange={handleChange}>
                        <option value="">Select a category</option>
                        {categories.map((cat, index) => (
                          <option key={index} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label mb-2 font-18 font-heading fw-600">Price</label>
                    <input type="text" name="price" className="form-control common-input border" value={formData.price} onChange={handleChange} />
                  </div>

                  <div className="col-md-12 mb-4">
                    <label className="form-label mb-2 font-18 font-heading fw-600">Upload Coupon Image</label>
                    <input type="file" accept="image/*" className="common-input border p-0" onChange={handleImageUpload} />
                    {formData.couponImage && <img src={formData.couponImage} alt="Coupon" width="100px" className="mt-4" />}
                  </div>
                </div>

                <button type="button" className="btn btn-main btn-md pill fw-300" onClick={handleSave}>Save Changes</button>
                <button type="button" className="btn btn-main btn-md pill fw-300 ms-2" onClick={() => navigate('/')}>Cancel</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default EditProductPage;
