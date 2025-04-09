import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import customers from '../json/customers.json';
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'

const EditCustomer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',

    });

    useEffect(() => {
        const customer = customers.find(item => item.id.toString() === id);
        if (customer) {
           // setProduct(customer);
            setFormData({
                name: customer.name,
                email: customer.email,
                phone: customer.phone
            });
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSave = () => {
        console.log('Updated Data:', formData);
        alert('Product Updated Successfully!');
        navigate('/');
    };
    return (
        <>
            <MasterLayout>
                <Preloader />
                <div className="dashboard-body__content">
                    <div className="row gy-4">
                        <div className="col-lg-12">
                            <div className="refund-feedback">
                                <h5 className="refund-feedback__title mb-4">{formData.name}</h5>
                                <form>
                                    <div className="row g-4">
                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Customer Name</label>
                                            <input type="text" name="name" className="form-control common-input border" value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Email</label>
                                            <input type="text" name="email" className="form-control common-input border" value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Phone Number</label>
                                            <input type="text" name="phone" className="form-control common-input border" value={formData.phone} onChange={handleChange} />
                                        </div>



                                    </div>

                                    <button type="button" className="btn btn-main btn-md pill fw-300 mt-4" onClick={handleSave}>Save Changes</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </MasterLayout>
        </>
    )
}

export default EditCustomer