import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productData from '../json/productdata.json';  // Import your product data

const EditProduct = () => {
  const { id } = useParams();  // Get ID from URL
  const navigate = useNavigate(); // To redirect after save
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    couponImage: ''
  });

  // Load product data based on ID
  useEffect(() => {
    const foundProduct = productData.find(item => item.id.toString() === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setFormData({
        title: foundProduct.title,
        date: foundProduct.date,
        couponImage: foundProduct.couponImage
      });
    }
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle save (you can update state or send API request)
  const handleSave = () => {
    console.log('Updated Data:', formData);
    alert('Product Updated Successfully!');
    navigate('/'); // Redirect to dashboard
  };

  if (!product) {
    return <h5 className="text-danger">Product not found!</h5>;
  }

  return (
    <div className="dashboard-body__content">
      <div className="row gy-4">
        <div className="col-lg-12">
          <div className="refund-feedback">
            <h5 className="refund-feedback__title mb-4">{formData.title}</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">Coupon Name</label>
                <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label className="form-label">Date</label>
                <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label className="form-label">Coupon Image URL</label>
                <input type="text" name="couponImage" className="form-control" value={formData.couponImage} onChange={handleChange} />
                <img src={formData.couponImage} alt="Coupon" width="100" className="mt-2" />
              </div>

              <button type="button" className="btn btn-primary" onClick={handleSave}>Save Changes</button>
              <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/')}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;