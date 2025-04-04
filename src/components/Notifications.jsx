import {React, useState} from 'react'
import { Link } from 'react-router-dom';
const Notifications = ( { position = 'right' }) => {
 // Toggle notifications dropdown visibility
 const [isOpen, setIsOpen] = useState(false);
 const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const dropdownStyle = {
    zIndex: 7,
    width: '400px',
    [position]: 0,
    left:'unset'
  };
  return (
    <>
        <div className="position-relative">
                        <Link
                          to="#"
                          className="header-right__button cart-btn position-relative"
                          onClick={toggleDropdown}
                        >
                          <img
                            src="/assets/images/icons/notification.png"
                            alt="Notification"
                            className="white-version"
                          />
                          <img
                            src="/assets/images/icons/notification-white.png"
                            alt="Notification Dark"
                            className="dark-version"
                          />
                          <span className="qty-badge font-12">3</span>
                        </Link>
        
                        {/* Dropdown Content */}
                        {isOpen && (
                          <div className="position-absolute  mt-3 notification-drp bg-white shadow-lg rounded-lg p-3 z-50"  style={dropdownStyle}>
                            <p className="fw-bold text-sm ">Notifications</p>
                            <ul className="mt-2">
                              <li className="pb-2 pt-2 border-bottom  d-flex "><img src="/assets/images/thumbs/coupon2.png" alt="" className="coupons-notify-thumb pe-2 "/>
                             <span> <p className="notify-time">26/03/2024</p><p className="font-14 lh-sm line-clamp2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.</p></span></li>
                             <li className="pb-2 pt-2 border-bottom  d-flex "><img src="/assets/images/thumbs/coupon2.png" alt="" className="coupons-notify-thumb pe-2 "/>
                             <span> <p className="notify-time">3 Hours Ago</p><p className="font-14 lh-sm line-clamp2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.</p></span></li>
                             <li className="pb-2 pt-2 border-bottom  d-flex "><img src="/assets/images/thumbs/coupon2.png" alt="" className="coupons-notify-thumb pe-2 "/>
                             <span> <p className="notify-time">26/03/2024</p><p className="font-14 lh-sm line-clamp2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.</p></span></li>
               
                            </ul>
                          </div>
                        )}
                      </div>
    </>
  )
}

export default Notifications