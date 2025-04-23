import React, { useState } from 'react'
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'
import DataTable from 'react-data-table-component';
import allCategories from '../json/allcategories.json';
import { Link, useNavigate } from 'react-router-dom';

const Categories = () => {
    //table style
    const customStyles = {


        headCells: {
            style: {
                padding: '20px 16px',
                color: '#000424',
                fontFamily: ' "Inter", sans-serif',
                fontSize: '16px',
                fontWeight: '600',
            },
        },
        rows: {
            style: {

                '&:hover': {
                    backgroundColor: '#f1f1f1',
                },
            },
        },
        cells: {
            style: {
                fontSize: '14px',
                padding: '20px 16px',
            },
        },
    };
    const [data, setData] = useState(allCategories);
   
    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
    };

    const navigate = useNavigate(); // For redirection
    // Function to redirect to edit page
    const handleEdit = (id) => {
        navigate(`/edit-category/${id}`);
    };
    const columns = (handleDelete) => [
        {
            name: "S. No.",
            selector: (row, index) => index + 1,
            sortable: true,
            width: "110px",
        },
        {
            name: "Category",
            selector: (row) => row.category,
            sortable: true,
        },
        {
            name: 'Category Thumb',
            selector: row => <img src={row.categorythumb} alt="Category" width="50" />,
            sortable: true,
        },

        {
            name: "Actions",
            cell: row => (
                <>

                    <button onClick={() => handleEdit(row.id)} className="btn-smm btn-info-transparent rounded-pill text-center me-2" >
                        <i className="las la-edit"></i>
                    </button>
                    <button onClick={() => handleDelete(row.id)} className="btn-smm btn-danger-transparent dlt rounded-pill"><i className="las la-trash-alt"></i></button>
                </>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];
    return (
        <>

            <MasterLayout>
                {/* Preloader */}
                <Preloader />
                <div className="dashboard-body__content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='d-flex justify-content-between align-items-center mb-5'>
                                <h5 className="refund-feedback__title mb-0">All Categories</h5>
                                <div className='d-flex align-items-center gap-2'><Link className='btn btn-main btn-md pill fw-300' to="/add-category"> <i className="las la-cart-plus"></i> Add New Category</Link> </div>
                            </div>
                            <DataTable
                                columns={columns(handleDelete)}
                                data={data}
                                pagination
                                highlightOnHover
                                customStyles={customStyles}
                            />
                        </div>
                    </div>

                </div>
            </MasterLayout>


        </>
    )
}

export default Categories