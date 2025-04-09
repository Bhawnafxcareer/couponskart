import React from 'react'
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";

const data = [
    {
        orderId: "#12345",
        createdAt: "2025-04-01",
        customer: "John Doe",
        priority: "High",
        total: "$199.99",
        paymentStatus: "Paid",
        items: 3,
        deliveryNumber: "D123456789",
        orderStatus: "Shipped",
    },
    {
        orderId: "#12346",
        createdAt: "2025-04-02",
        customer: "Jane Smith",
        priority: "Low",
        total: "$79.99",
        paymentStatus: "Pending",
        items: 1,
        deliveryNumber: "D987654321",
        orderStatus: "Processing",
    },
    // Add more rows as needed
];
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
        flexBasic:'1'
      },
    },
  };
  
  
  
  
const columns = [
    { name: "Order ID", selector: row => row.orderId, sortable: true },
    { name: "Created at", selector: row => row.createdAt, sortable: true },
    { name: "Customer", selector: row => row.customer, sortable: true  },   
    { name: "Total", selector: row => row.total, sortable: true },
    { name: "Payment Status", selector: row => row.paymentStatus, sortable: true  },  
    { name: "Coupon Status", selector: row => row.orderStatus, sortable: true  },
    {
        name: "Action",
        cell: row => (
            <>
            <Link to="/order-detail"  className="btn-smm btn-info-transparent rounded-pill text-center me-2" >
            <i className="las la-edit"></i>
          </Link>
            <button  className=" btn-smm btn-secondary-light  rounded-pill text-center me-2">
                <i className="las la-eye"></i>
            </button>
              <button  className="btn-smm btn-danger-transparent dlt rounded-pill"><i className="las la-trash-alt"></i></button>
            </>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
];
const OrdersList = () => {
    return (
        <>
            <div className="dashboard-body__content">
                <div className="row gy-4">
                    <div className="col-12">
                        <div className="card common-card border border-gray-five">
                            <div className="card-body">
                                <h3 className="mb-4">Order Table list view for vendor </h3>
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    pagination
                                    highlightOnHover
                                    customStyles={customStyles}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrdersList