import React from 'react'
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";


const ViewCustomer = () => {
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
  const data = [
    {
      invoice: "#768764",
      status: "Complete",
      amount: "59.00 USD",
      dueDate: "2022-12-31 ",
      paymentMethod: "RazorPay"
    },
    {
      invoice: "#768764",
      status: "Complete",
      amount: "59.00 USD",
      dueDate: "2022-12-31 ",
      paymentMethod: "RazorPay"
    },
    {
      invoice: "#768764",
      status: "Complete",
      amount: "59.00 USD",
      dueDate: "2022-12-31 ",
      paymentMethod: "RazorPay"
    },
    {
      invoice: "#768764",
      status: "Complete",
      amount: "59.00 USD",
      dueDate: "2022-12-31 ",
      paymentMethod: "RazorPay"
    },
    {
      invoice: "#768764",
      status: "Complete",
      amount: "59.00 USD",
      dueDate: "2022-12-31 ",
      paymentMethod: "RazorPay"
    },
    {
      invoice: "#768764",
      status: "Complete",
      amount: "59.00 USD",
      dueDate: "2022-12-31 ",
      paymentMethod: "RazorPay"
    },
    {
      invoice: "#768764",
      status: "Complete",
      amount: "59.00 USD",
      dueDate: "2022-12-31 ",
      paymentMethod: "RazorPay"
    },
    {
      invoice: "#768764",
      status: "Complete",
      amount: "59.00 USD",
      dueDate: "2022-12-31 ",
      paymentMethod: "RazorPay"
    },
    {
      invoice: "#768764",
      status: "Complete",
      amount: "59.00 USD",
      dueDate: "2022-12-31 ",
      paymentMethod: "RazorPay"
    },
    // Repeat or map this structure as needed
  ];
  const columns = [
    {
      name: "Invoice",
      selector: (row) => row.invoice,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "Due Date",
      selector: (row) => row.dueDate,
      sortable: true,
    },
    {
      name: "Payment Method",
      selector: (row) => row.paymentMethod,
      sortable: true,
    },
  ];

  return (
    <>
      <MasterLayout>
        <Preloader />
        <div className="dashboard-body__content">
          <div className="row gy-4">
            <div className="col-lg-12">
              <div className="refund-feedback">
                <h5 className="refund-feedback__title mb-4">Customer Details</h5>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="profile-info">
                <div className="profile-info__inner d-flex align-items-center mb-40 ">
                  <div className="avatar-upload me-3 m-0">
                    <div className="avatar-preview" style={{ width: "80px", height: "80px" }}>

                    </div>
                  </div>
                  <div>
                    <h6 className="profile-info__name mb-0">Michel Smith</h6>

                  </div>
                </div>
                <ul className="profile-info-list">

                  <li className="profile-info-list__item">
                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                      <img
                        src="/assets/images/icons/profile-info-icon2.svg"
                        alt=""
                        className="icon"
                      />
                      <span className="text text-heading fw-500 font-14">Email</span>
                    </span>
                    <span className="profile-info-list__info font-14">
                      michel15@gmail.com
                    </span>
                  </li>
                  <li className="profile-info-list__item">
                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                      <img
                        src="/assets/images/icons/profile-info-icon3.svg"
                        alt=""
                        className="icon"
                      />
                      <span className="text text-heading fw-500 font-14">Phone</span>
                    </span>
                    <span className="profile-info-list__info font-14">
                      +880 15589 236 45
                    </span>
                  </li>
                  <li className="profile-info-list__item">
                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                      <img
                        src="/assets/images/icons/profile-info-icon5.svg"
                        alt=""
                        className="icon"
                      />
                      <span className="text text-heading fw-500 font-14">Balance</span>
                    </span>
                    <span className="profile-info-list__info font-14">$0.00 USD</span>
                  </li>
                  <li className="profile-info-list__item">
                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                      <img
                        src="/assets/images/icons/profile-info-icon6.svg"
                        alt=""
                        className="icon"
                      />
                      <span className="text text-heading fw-500 font-14">Member Since</span>
                    </span>
                    <span className="profile-info-list__info font-14">Jan, 01, 2024</span>
                  </li>
                  <li className="profile-info-list__item">
                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                      <img
                        src="/assets/images/icons/profile-info-icon7.svg"
                        alt=""
                        className="icon"
                      />
                      <span className="text text-heading fw-500 font-14">Purchased</span>
                    </span>
                    <span className="profile-info-list__info font-14">0 items</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="dashboard-widget border-five">
                    <img
                      src="/assets/images/shapes/widget-shape1.png"
                      alt=""
                      className="dashboard-widget__shape one"
                    />
                    <img
                      src="/assets/images/shapes/widget-shape2.png"
                      alt=""
                      className="dashboard-widget__shape two"
                    />
                    <span className="dashboard-widget__icon">
                      <img
                        src="/assets/images/icons/coupons-p.png"
                        alt=""
                      />

                    </span>
                    <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                      <div>
                        <h4 className="dashboard-widget__number mb-1 mt-3">100</h4>
                        <span className="dashboard-widget__text font-14">
                          Coupons Purchased
                        </span>
                      </div>
                      <img src="/assets/images/icons/chart-icon.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="dashboard-widget border-five">
                    <img
                      src="/assets/images/shapes/widget-shape1.png"
                      alt=""
                      className="dashboard-widget__shape one"
                    />
                    <img
                      src="/assets/images/shapes/widget-shape2.png"
                      alt=""
                      className="dashboard-widget__shape two"
                    />
                    <span className="dashboard-widget__icon">
                      <img
                        src="/assets/images/icons/expense.png"
                        alt=""
                      />
                    </span>
                    <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                      <div>
                        <h4 className="dashboard-widget__number mb-1 mt-3">₹ 20,000</h4>
                        <span className="dashboard-widget__text font-14">
                          Total Expense
                        </span>
                      </div>
                      <img src="/assets/images/icons/chart-icon.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="dashboard-widget border-five">
                    <img
                      src="/assets/images/shapes/widget-shape1.png"
                      alt=""
                      className="dashboard-widget__shape one"
                    />
                    <img
                      src="/assets/images/shapes/widget-shape2.png"
                      alt=""
                      className="dashboard-widget__shape two"
                    />
                    <span className="dashboard-widget__icon">
                      <img
                        src="/assets/images/icons/dashboard-widget-icon1.svg"
                        alt=""
                      />
                    </span>
                    <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                      <div>
                        <h4 className="dashboard-widget__number mb-1 mt-3">2M+</h4>
                        <span className="dashboard-widget__text font-14">
                          Total Products
                        </span>
                      </div>
                      <img src="/assets/images/icons/chart-icon.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <div className="card common-card border border-gray-five">
                    <div className="card-body">
                      <div className="table-responsive">
                        <h5>Transaction History</h5>
                        <div className="mt-24">
                          <DataTable
                            title=""
                            columns={columns}
                            data={data}
                            pagination
                            paginationPerPage={3} 
                            highlightOnHover
                            responsive
                            customStyles={customStyles}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </MasterLayout>
    </>
  )
}

export default ViewCustomer