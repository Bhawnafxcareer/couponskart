import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import productData from '../json/productdata.json';

const customStyles = {


  headCells: {
    style: {
      padding: '20px 16px',
      color: '#000424',
      fontFamily: ' "Inter", sans-serif',
      fontSize: '18px',
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




const DashboardProductManagement = () => {
  const [data, setData] = useState(productData);

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };
  const navigate = useNavigate(); // For redirection
  // Function to redirect to edit page
  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };
  const columns = (handleDelete) => [
    {
      name: 'S. No',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Coupon Name',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true,
    },
    {
      name: 'Coupon Image',
      selector: row => <img src={row.couponImage} alt="Coupon" width="50" />,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: row => (
        <>
          <button
            onClick={() => handleEdit(row.id)}
            className="btn-smm btn-info-transparent rounded-pill text-center me-2"
          >
            <i className="las la-edit"></i>
          </button>
          <button onClick={() => handleDelete(row.id)} className="btn-smm btn-danger-transparent dlt rounded-pill"><i class="las la-trash-alt"></i></button>
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  
  return (
    <div className="dashboard-body__content">
      <div className="row gy-4">
        <div className="col-lg-12">
          <div className="refund-feedback">
            <h5 className="refund-feedback__title mb-4">All Products</h5>
            <DataTable title="" columns={columns(handleDelete)} data={data} customStyles={customStyles} pagination className=' ' />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardProductManagement;
