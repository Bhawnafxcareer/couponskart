import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MasterLayout from "../layout/MasterLayout";
import Preloader from '../helper/Preloader';
import { Link } from "react-router-dom";
//import vendors from '../json/vendors.json';
//import DataTable from 'react-data-table-component';
const VendorsPage = () => {
  // const customStyles = {
  //   headCells: {
  //     style: {
  //       padding: '20px 16px',
  //       color: '#000424',
  //       fontFamily: ' "Inter", sans-serif',
  //       fontSize: '16px',
  //       fontWeight: '600',
  //     },
  //   },
  //   rows: {
  //     style: {
  //       '&:hover': {
  //         backgroundColor: '#f1f1f1',
  //       },
  //     },
  //   },
  //   cells: {
  //     style: {
  //       fontSize: '14px',
  //       padding: '20px 16px',
  //       flexBasic: '1'
  //     },
  //   },
  // };
  // const [data, setData] = useState(vendors);
  // const navigate = useNavigate(); // handles route changes


  // const handleDelete = (id) => {
  //   const confirmed = window.confirm('Are you sure you want to delete this Vendor?');
  //   if (confirmed) {
  //     setData(data.filter(vendors => vendors.id !== id));
  //   }
  // };

  // const handleView = (id) => {
  //   navigate(`/vendor/${id}`);
  // };

  // const handleEdit = (id) => {
  //   navigate(`/vendor/edit/${id}`);
  // };

  // const columns = [
  //   {
  //     name: 'ID',
  //     selector: row => row.id,
  //     sortable: true,    

  //   },
  //   {
  //     name: 'Name',
  //     selector: row => row.name,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Email',
  //     selector: row => row.email,      
  //     sortable: true,
  //   },
  //   {
  //     name: 'Phone',
  //     selector: row => row.phone,      
  //     sortable: true,
  //   },
  //   {
  //     name: 'Company Name',
  //     selector: row => row.companyName,
  //     sortable: true,
  //   },
  //   {
  //     name: 'Pan Number',
  //     selector: row => row.panNumber,

  //     sortable: true,
  //   },
  //   {
  //     name: 'Actions',
  //     cell: row => (
  //       <>

  //         <button
  //           onClick={() => handleView(row.id)}
  //           className="btn-smm btn-secondary-light  rounded-pill text-center me-2" >
  //           <i className="las la-eye"></i>
  //         </button>
  //         <button onClick={() => handleEdit(row.id)} className="btn-smm btn-info-transparent rounded-pill text-center me-2" >
  //           <i className="las la-edit"></i>
  //         </button>
  //         <button onClick={() => handleDelete(row.id)} className="btn-smm btn-danger-transparent dlt rounded-pill me-2"><i className="las la-trash-alt"></i></button>
  //       </>
  //     ),
  //     ignoreRowClick: true,
  //     allowOverflow: true,
  //     button: true,
  //   },
  // ];

  return (
    <>
      <MasterLayout>
        {/* Preloader */}
        <Preloader />
        <div className="dashboard-body__content">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-3">
              <div className='profile-info h-100 p-4'>
                <div className='vendor-profile-pic bg-light text-center  rounded p-4 mb-2  py-5'>
                  <img src="/assets/images/icons/zara.svg" alt="" />
                </div>
                <div className="vendor-profile mt-4">
                  <h6 className='fw-semibold mb-0'>ZARA International</h6>
                  <Link to="/" className='text-primary'>www.larkon.com</Link>
                  <ul className='mt-4 border-bottom pb-4'>
                    <li className='pb-2'><i className="fas fa-envelope avatar-sm me-2 "></i> zarafashionworld@dayrep.com</li>
                    <li><i className="fas fa-phone-alt avatar-sm me-2 "></i> +243 812-801-9335</li>
                  </ul>
                  <div class="row text-center mt-3 g-2 pb-3 border-bottom">
                    <div class="col-lg-4 col-4 border-end">
                      <h6 class=" fw-600 mb-1">865</h6>
                      <p class="text-muted mb-0 font-14">Item Stock</p>
                    </div>
                    <div class="col-lg-4 col-4 border-end">
                      <h6 class=" fw-600 mb-1">+4.5k</h6>
                      <p class="text-muted mb-0 font-14">Sells</p>
                    </div>
                    <div class="col-lg-4 col-4">
                      <h6 class=" fw-600 mb-1">+2k</h6>
                      <p class="text-muted mb-0 font-14">Happy Client</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between gap-4 mt-4'>
                    <Link to="/vendor-details" className='btn btn-main btn-sm pill'>View Profile</Link>
                    <Link to="/edit-vendor" className='btn btn-main btn-sm btn-outline pill'>Edit Profile</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className='profile-info h-100 p-4'>

                <div className='vendor-profile-pic bg-light text-center  rounded p-4 mb-2  py-5'>
                  <img src="/assets/images/icons/zara.svg" alt="" />
                </div>

                <div className="vendor-profile mt-4">
                  <h6 className='fw-semibold mb-0'>ZARA International</h6>
                  <Link to="/" className='text-primary'>www.larkon.com</Link>
                  <ul className='mt-4 border-bottom pb-4'>
                    <li className='pb-2'><i className="fas fa-envelope avatar-sm me-2 "></i> zarafashionworld@dayrep.com</li>
                    <li><i className="fas fa-phone-alt avatar-sm me-2 "></i> +243 812-801-9335</li>
                  </ul>
                  <div class="row text-center mt-3 g-2 pb-3 border-bottom">
                    <div class="col-lg-4 col-4 border-end">
                      <h6 class=" fw-600 mb-1">865</h6>
                      <p class="text-muted mb-0 font-14">Item Stock</p>
                    </div>
                    <div class="col-lg-4 col-4 border-end">
                      <h6 class=" fw-600 mb-1">+4.5k</h6>
                      <p class="text-muted mb-0 font-14">Sells</p>
                    </div>
                    <div class="col-lg-4 col-4">
                      <h6 class=" fw-600 mb-1">+2k</h6>
                      <p class="text-muted mb-0 font-14">Happy Client</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between gap-4 mt-4'>
                    <Link to="/vendor-details" className='btn btn-main btn-sm pill'>View Profile</Link>
                    <Link to="/edit-vendor" className='btn btn-main btn-sm btn-outline pill'>Edit Profile</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className='profile-info h-100 p-4'>

                <div className='vendor-profile-pic bg-light text-center  rounded p-4 mb-2  py-5'>
                  <img src="/assets/images/icons/zara.svg" alt="" />
                </div>

                <div className="vendor-profile mt-4">
                  <h6 className='fw-semibold mb-0'>ZARA International</h6>
                  <Link to="/" className='text-primary'>www.larkon.com</Link>
                  <ul className='mt-4 border-bottom pb-4'>
                    <li className='pb-2'><i className="fas fa-envelope avatar-sm me-2 "></i> zarafashionworld@dayrep.com</li>
                    <li><i className="fas fa-phone-alt avatar-sm me-2 "></i> +243 812-801-9335</li>
                  </ul>
                  <div class="row text-center mt-3 g-2 pb-3 border-bottom">
                    <div class="col-lg-4 col-4 border-end">
                      <h6 class=" fw-600 mb-1">865</h6>
                      <p class="text-muted mb-0 font-14">Item Stock</p>
                    </div>
                    <div class="col-lg-4 col-4 border-end">
                      <h6 class=" fw-600 mb-1">+4.5k</h6>
                      <p class="text-muted mb-0 font-14">Sells</p>
                    </div>
                    <div class="col-lg-4 col-4">
                      <h6 class=" fw-600 mb-1">+2k</h6>
                      <p class="text-muted mb-0 font-14">Happy Client</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between gap-4 mt-4'>
                    <Link to="/vendor-details" className='btn btn-main btn-sm pill'>View Profile</Link>
                    <Link to="/edit-vendor" className='btn btn-main btn-sm btn-outline pill'>Edit Profile</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className='profile-info h-100 p-4'>

                <div className='vendor-profile-pic bg-light text-center  rounded p-4 mb-2  py-5'>
                  <img src="/assets/images/icons/zara.svg" alt="" />
                </div>

                <div className="vendor-profile mt-4">
                  <h6 className='fw-semibold mb-0'>ZARA International</h6>
                  <Link to="/" className='text-primary'>www.larkon.com</Link>
                  <ul className='mt-4 border-bottom pb-4'>
                    <li className='pb-2'><i className="fas fa-envelope avatar-sm me-2 "></i> zarafashionworld@dayrep.com</li>
                    <li><i className="fas fa-phone-alt avatar-sm me-2 "></i> +243 812-801-9335</li>
                  </ul>
                  <div class="row text-center mt-3 g-2 pb-3 border-bottom">
                    <div class="col-lg-4 col-4 border-end">
                      <h6 class=" fw-600 mb-1">865</h6>
                      <p class="text-muted mb-0 font-14">Item Stock</p>
                    </div>
                    <div class="col-lg-4 col-4 border-end">
                      <h6 class=" fw-600 mb-1">+4.5k</h6>
                      <p class="text-muted mb-0 font-14">Sells</p>
                    </div>
                    <div class="col-lg-4 col-4">
                      <h6 class=" fw-600 mb-1">+2k</h6>
                      <p class="text-muted mb-0 font-14">Happy Client</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between gap-4 mt-4'>
                    <Link to="/vendor-details" className='btn btn-main btn-sm pill'>View Profile</Link>
                    <Link to="/edit-vendor" className='btn btn-main btn-sm btn-outline pill'>Edit Profile</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="p-4">
          <h3 className="mb-4">All Vendors </h3>
          <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            customStyles={customStyles}
          />
        </div> */}

      </MasterLayout>
    </>

  )
}

export default VendorsPage