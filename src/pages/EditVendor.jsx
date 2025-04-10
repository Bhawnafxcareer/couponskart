import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import vendors from '../json/vendors.json';
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'

const EditVendor = () => {
    // const { id } = useParams();
    // const navigate = useNavigate();
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',

    // });

    // useEffect(() => {
    //     const vendor = vendors.find(item => item.id.toString() === id);
    //     if (vendor) {
    //         // setProduct(vendor);
    //         setFormData({
    //             name: vendor.name,
    //             email: vendor.email,
    //             phone: vendor.phone,
    //             companyName: vendor.companyName,
    //             panNumber: vendor.panNumber
    //         });
    //     }
    // }, [id]);

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
    // const handleSave = () => {
    //     console.log('Updated Data:', formData);
    //     alert('Product Updated Successfully!');
    //     navigate('/');
    // };
    return (
        <>
            <MasterLayout>
                <Preloader />
                <div className="dashboard-body__content">
                    <div className="row gy-4">
                        <div className="col-lg-12">
                            <div className="refund-feedback">
                                <h5 className="refund-feedback__title mb-4">Vendor Profile</h5>
                                <form>
                                    <div className="row g-4">
                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Customer Name</label>
                                            <input type="text" name="name" className="form-control common-input border" value="" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Email</label>
                                            <input type="text" name="email" className="form-control common-input border" value="" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Phone Number</label>
                                            <input type="text" name="phone" className="form-control common-input border" value="" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Company Name</label>
                                            <input type="text" name="companyName" className="form-control common-input border" value="" />
                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label mb-2 font-18 font-heading fw-600">Pan Number</label>
                                            <input type="text" name="panNumber" className="form-control common-input border" value="" />
                                        </div>
                                        <div className="col-md-4">
                                            <label
                                                htmlFor="registerrequest"
                                                className="form-label mb-2 font-18 font-heading fw-600"
                                            >
                                                Registration Status
                                            </label>
                                            <div className="select-has-icon">
                                                <select className="common-input border" id="registerrequest" defaultValue={1}>
                                                    <option value={1}>Approve</option>
                                                    <option value={1}>Reject</option>
                                                 
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <label
                                                htmlFor="AccountStatus"
                                                className="form-label mb-2 font-18 font-heading fw-600"
                                            >
                                                Account Status
                                            </label>
                                            <div className="select-has-icon">
                                                <select className="common-input border" id="AccountStatus" defaultValue={1}>
                                                    <option value={1}>Enable </option>
                                                    <option value={1}>Disable</option>
                                                 
                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                    <button type="button" className="btn btn-main btn-md pill fw-300 mt-4" >Save Changes</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </MasterLayout>
        </>
    )
}

export default EditVendor