import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';

const data = [
  {
    date: '2022-12-31 03:36 AM',
    orderId: '#DR54745425478',
    CouponName: 'WordPress',
    price: '59.00 USD',
    detailsLink: '/invoice',
  },
  {
    date: '2022-12-31 03:36 AM',
    orderId: '#DR54745425478',
    CouponName: 'WordPress',
    price: '59.00 USD',
    detailsLink: '/invoice',
  },
  {
    date: '2022-12-31 03:36 AM',
    orderId: '#DR54745425478',
    CouponName: 'WordPress',
    price: '59.00 USD',
    detailsLink: '/invoice',
  },
  {
    date: '2022-12-31 03:36 AM',
    orderId: '#DR54745425478',
    CouponName: 'WordPress',
    price: '59.00 USD',
    detailsLink: '/invoice',
  },
  
  // Add more rows here if needed
];

const columns = [
  {
    name: 'Date',
    selector: row => row.date,
    sortable: true,
  },
  {
    name: 'Order ID',
    selector: row => row.orderId,
    sortable: true,
  },
  {
    name: 'Coupon Name',
    selector: row => row.CouponName,
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
      <button className='btn-smm btn-info-transparent rounded-pill text-center me-2'><i class="las la-eye"></i></button>
      <button className='btn-smm  bg-success-transparent  rounded-pill text-center'><i class="las la-download"></i></button>
      </>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const DashboardInvoices = () => {
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
  
  return (
    <div className="dashboard-body__content">
      <div className="row gy-4">
        <div className="col-12">
          <div className="card common-card border border-gray-five">
            <div className="card-body">
              <DataTable
                columns={columns}
                data={data}
                pagination               
                customStyles={customStyles}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInvoices;
