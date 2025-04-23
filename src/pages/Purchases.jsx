import React, { useState } from 'react'
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'
import DataTable from 'react-data-table-component';
import purchasesdata from '../json/purchasesdata.json';
import { Link, useNavigate } from 'react-router-dom';

const Purchases = () => {

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
    const [data, setData] = useState(purchasesdata);
   
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
            name: "Order ID",
            selector: (row, index) => index + 1,
            sortable: true,
            
        },
        {
            name: "Customer ",
            selector: (row) => row.CustomerName,
            sortable: true,
        },
        {
            name: "Coupons ",
            selector: (row) => row.Coupons,
            sortable: true,
        },
        {
            name: "Coupons Status",
            cell: (row) => (
                <span
                  className={`badge rounded py-1 px-2 ${
                    row.CouponsStatus === "Applied"
                      ? "bg-success-subtle text-success"
                      : row.CouponsStatus === "Expired"
                      ? "bg-warning-subtle text-warning"
                      : " bg-danger-subtle text-danger"
                  }`}
                >
                  {row.CouponsStatus}
                </span>
              ),
            selector: (row) => row.CouponsStatus,
            sortable: true,
        },
        {
            name: "Date ",
            selector: (row) => row.Date,
            sortable: true,
        },
        {
            name: "Total ",
            selector: (row) => row.Total,
            sortable: true,
        },
        {
            name: "Payment Method ",
            selector: (row) => row.PaymentMethod,
            sortable: true,
        },
        {
            name: "Payment Status ",
            cell: (row) => (
                <span
                  className={`badge rounded py-1 px-2 ${
                    row.PaymentStatus === "Paid"
                      ? "bg-success-subtle text-success"
                      : row.PaymentStatus === "Pending"
                      ? "bg-warning-subtle text-warning"
                      : " bg-danger-subtle text-danger"
                  }`}
                >
                  {row.PaymentStatus}
                </span>
              ),
            selector: (row) => row.PaymentStatus,
            sortable: true,
        },
        // {
        //     name: "Actions",
        //     cell: row => (
        //         <>

        //             <button onClick={() => handleEdit(row.id)} className="btn-smm btn-info-transparent rounded-pill text-center me-2" >
        //                 <i className="las la-edit"></i>
        //             </button>
        //             <button onClick={() => handleDelete(row.id)} className="btn-smm btn-danger-transparent dlt rounded-pill"><i className="las la-trash-alt"></i></button>
        //         </>
        //     ),
        //     ignoreRowClick: true,
        //     allowOverflow: true,
        //     button: true,
        // },
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
                                <h5 className="refund-feedback__title mb-0">All Purchases</h5>                                
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
export default Purchases