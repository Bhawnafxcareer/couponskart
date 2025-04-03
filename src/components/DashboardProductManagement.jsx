import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { saveAs } from 'file-saver';

import productData from '../json/productdata.json';

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




const DashboardProductManagement = () => {
//export CSV
  const exportToCSV = (data, filename = "products.csv") => {
    if (!data || data.length === 0) {
      alert("No data available to export!");
      return;
    }
  
    const headers = Object.keys(data[0]).join(","); // Extract column headers
    const rows = data.map(row => Object.values(row).join(",")); // Convert row data to CSV format
    const csvContent = [headers, ...rows].join("\n"); // Combine header and rows
  
    // Create a Blob and trigger download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, filename);
  };

//end export CSV

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
      name: 'Valid Users ',
      selector: row => row.users,
      sortable: true,
    },
    {
      name: 'Valid Till',
      selector: row => row.validTill,
      sortable: true,
    },
    {
      name: 'Category',
      selector: row => row.category,
      sortable: true,
    },
    {
      name: 'Coupon Image',
      selector: row => <img src={row.couponImage} alt="Coupon" width="50" />,
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: row => (
        <>
          <button onClick={() => handleEdit(row.id)}  className="btn-smm btn-info-transparent rounded-pill text-center me-2" >
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
            <div className='d-flex justify-content-between align-items-center mb-5'>
            <h5 className="refund-feedback__title mb-0">All Products</h5>
            <div className='d-flex align-items-center gap-2'><Link className='btn btn-main btn-md pill fw-300' to="/add-coupons"> <i class="las la-cart-plus"></i> Add New Product</Link> <button className='btn btn-main btn-md pill fw-300' onClick={() => exportToCSV(data)}>Export CSV</button></div>
            </div>
            <DataTable title="" columns={columns(handleDelete)} data={data} customStyles={customStyles} pagination className=' ' />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardProductManagement;
