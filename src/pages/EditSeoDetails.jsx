import React, { useState, useEffect } from 'react'
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'
import seoData from '../json/SEOdetails.json'
import { useParams, useNavigate } from 'react-router-dom';
const EditSeoDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [page, setPage] = useState(null);
    const [formData, setFormData] = useState({
        seoTitle: '',
        seoKeywords: '',
        seoDescription: '',
        pageName: '',
    });


    useEffect(() => {


        const founPage = seoData.find(item => item.id.toString() === id);
        if (founPage) {
            setPage(founPage);
            setFormData({
                seoTitle: founPage.seoTitle,
                seoKeywords: founPage.seoKeywords,
                seoDescription: founPage.seoDescription,
                pageName: founPage.pageName,

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
                {/* Preloader */}
                <Preloader />
                <div className="dashboard-body__content">
                    <div className="refund-feedback">
                        <h5 className="refund-feedback__title mb-4">Edit  SEO Details</h5>
                        <form>
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <label className="form-label mb-2 font-18 font-heading fw-600">Select Page</label>

                                    <div className="select-has-icon">
                                        <select
                                            className="common-input border"
                                            name="pageName"
                                            value={formData.pageName}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Page</option>
                                            <option value="Home">Home</option>
                                            <option value="About">About</option>
                                            <option value="Contact">Contact</option>
                                            <option value="blog">Contact</option>
                                            <option value="services">Services</option>
                                        </select>

                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label className="form-label mb-2 font-18 font-heading fw-600">SEO Title</label>
                                    <input type="text" name="seoTitle" className="form-control common-input border" value={formData.seoTitle} onChange={handleChange} />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label mb-2 font-18 font-heading fw-600">SEO Keywords</label>
                                    <input type="text" name="seoKeywords" className="form-control common-input border" value={formData.seoKeywords} onChange={handleChange} />
                                </div>


                                <div className="col-md-12">
                                    <label className="form-label mb-2 font-18 font-heading fw-600">SEO Description</label>
                                    <textarea name="seoDescription" id="" rows={3} className="common-input border " value={formData.seoDescription} onChange={handleChange}></textarea>
                                </div>

                            </div>

                            <button type="button" className="btn btn-main btn-md pill fw-300 mt-4" onClick={handleSave}>Save Changes</button>

                        </form>

                    </div>
                </div>

            </MasterLayout>
        </>
    )
}

export default EditSeoDetails