import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import productData from '../json/productdata.json';

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
    sortable: false,
  },
  {
    name: 'Actions',
    cell: row => (
      <>
        <Link to={`/edit/${row.id}`} className="btn-smm  btn-info-transparent rounded-pill text-center me-2"><i class="las la-edit"></i></Link>
        <button onClick={() => handleDelete(row.id)} className="btn-smm btn-danger-transparent dlt rounded-pill"><i class="las la-trash-alt"></i></button>
      </>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const DashboardProductManagement = () => {
  const [data, setData] = useState(productData);

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  return (
    <div className="dashboard-body__content">
      <div className="row gy-4">
        <div className="col-lg-12">
          <div className="refund-feedback">
            <h5 className="refund-feedback__title mb-4">All Products</h5>
            <DataTable title="" columns={columns(handleDelete)} data={data} pagination />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardProductManagement;
