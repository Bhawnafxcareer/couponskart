import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotificationsDropdwon = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`position-relative ${className}`} ref={dropdownRef}>
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

      {isOpen && (
        <div className="position-absolute mt-3 notification-drp bg-white shadow-lg rounded-lg p-3 z-50">
          <p className="fw-bold text-sm">Notifications</p>
          <ul className="mt-2 notification-wrapper">
            <li className="pb-2 pt-2 border-bottom  d-flex">
              <img
                src="/assets/images/thumbs/coupon2.png"
                alt=""
                className="coupons-notify-thumb pe-2"
              />
              <span>
                <p className="notify-time">26/03/2024</p>
                <p className="font-14 lh-sm line-clamp2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.
                </p>
              </span>
            </li>
            <li className="pb-2 pt-2 border-bottom d-flex">
              <img
                src="/assets/images/thumbs/coupon2.png"
                alt=""
                className="coupons-notify-thumb pe-2"
              />
              <span>
                <p className="notify-time">3 Hours Ago</p>
                <p className="font-14 lh-sm line-clamp2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.
                </p>
              </span>
            </li>
            <li className="pb-2 pt-2 border-bottom d-flex">
              <img
                src="/assets/images/thumbs/coupon2.png"
                alt=""
                className="coupons-notify-thumb pe-2"
              />
              <span>
                <p className="notify-time">3 Hours Ago</p>
                <p className="font-14 lh-sm line-clamp2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.
                </p>
              </span>
            </li>
            <li className="pb-2 pt-2 border-bottom d-flex">
              <img
                src="/assets/images/thumbs/coupon2.png"
                alt=""
                className="coupons-notify-thumb pe-2"
              />
              <span>
                <p className="notify-time">3 Hours Ago</p>
                <p className="font-14 lh-sm line-clamp2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.
                </p>
              </span>
            </li>
            <li className="pb-2 pt-2 border-bottom d-flex">
              <img
                src="/assets/images/thumbs/coupon2.png"
                alt=""
                className="coupons-notify-thumb pe-2"
              />
              <span>
                <p className="notify-time">26/03/2024</p>
                <p className="font-14 lh-sm line-clamp2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias.
                </p>
              </span>
            </li>
          </ul>
          <div className='text-center mt-3'>
            <Link to="/notifications" className='font-14 btn btn-outline-light pill py-2 fw-600'>View All <i class="las la-long-arrow-alt-right"></i></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsDropdwon;
