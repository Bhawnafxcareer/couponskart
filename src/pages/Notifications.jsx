import React from 'react'
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'
import { Link } from 'react-router-dom'

const Notifications = () => {
  return (
    <>

      <MasterLayout>
        {/* Preloader */}
        <Preloader />
        <div className="dashboard-body__content">
          <div className="row">
            <div className="col-md-12">
              <div>
                <div className="p-3 mb-3 gap-4  rounded border-bottom  dashboard-card d-flex justify-content-between align-items-center">
                  <img
                    src="/assets/images/thumbs/coupon2.png"
                    alt=""
                    className="coupons-notify-thumb pe-2"
                  />
                  <span className='notify-content'>
                    <p className="font-16 lh-sm line-clamp2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.
                    </p>
                  </span>
                  <span className='flex-shrink-0'>   <p className="">26/03/2024</p></span>
                  <span className='flex-shrink-0'>   <Link to="" className="btn btn-main btn-md pill fw-300 ">View Details</Link></span>
                </div>
                <div className="p-3 mb-3 gap-4  rounded border-bottom  dashboard-card d-flex justify-content-between align-items-center">
                  <img
                    src="/assets/images/thumbs/coupon2.png"
                    alt=""
                    className="coupons-notify-thumb pe-2"
                  />
                  <span className='notify-content'>
                    <p className="font-16 lh-sm line-clamp2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.
                    </p>
                  </span>
                  <span className='flex-shrink-0'>   <p className="">26/03/2024</p></span>
                  <span className='flex-shrink-0'>   <Link to="" className="btn btn-main btn-md pill fw-300 ">View Details</Link></span>
                </div>
                <div className="p-3 mb-3 gap-4  rounded border-bottom  dashboard-card d-flex justify-content-between align-items-center">
                  <img
                    src="/assets/images/thumbs/coupon2.png"
                    alt=""
                    className="coupons-notify-thumb pe-2"
                  />
                  <span className='notify-content'>
                    <p className="font-16 lh-sm line-clamp2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.
                    </p>
                  </span>
                  <span className='flex-shrink-0'>   <p className="">26/03/2024</p></span>
                  <span className='flex-shrink-0'>   <Link to="" className="btn btn-main btn-md pill fw-300 ">View Details</Link></span>
                </div>
                <div className="p-3 mb-3 gap-4  rounded border-bottom  dashboard-card d-flex justify-content-between align-items-center">
                  <img
                    src="/assets/images/thumbs/coupon2.png"
                    alt=""
                    className="coupons-notify-thumb pe-2"
                  />
                  <span className='notify-content'>
                    <p className="font-16 lh-sm line-clamp2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.
                    </p>
                  </span>
                  <span className='flex-shrink-0'>   <p className="">26/03/2024</p></span>
                  <span className='flex-shrink-0'>   <Link to="" className="btn btn-main btn-md pill fw-300 ">View Details</Link></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </MasterLayout>


    </>
  )
}

export default Notifications