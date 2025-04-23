


import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import NotificationsDropdwon from "../components/NotificationsDropdwon";
//import ThemeToggle from "../components/ThemeToggle";

const MasterLayout = ({ children }) => {

    let [active, setActive] = useState(false)
    let [show, setShow] = useState(false)
    let dashboardControl = () => {
        setActive(!active)
    }
    let showProfileControl = () => {
        setShow(!show)

    }
    const location = useLocation();

    // Automatically set open dropdowns based on current route
    const [openDropdowns, setOpenDropdowns] = useState({});

    useEffect(() => {
        setOpenDropdowns({
            blog: location.pathname.startsWith("/blogs") || location.pathname.startsWith("/all-blog") || location.pathname.startsWith("/add-new-blog"),
            seo: location.pathname.startsWith("/seo") || location.pathname.startsWith("/all-pages") || location.pathname.startsWith("/add-seo-details") || location.pathname.startsWith("/edit-seo") ,
            category: location.pathname.startsWith("/all-categories") || location.pathname.startsWith("/add-categories") ,
            invoice: location.pathname.startsWith("/all-invoices") || location.pathname.startsWith("/create-invoice")            
            // Add more sections as needed
        });
    }, [location]);

    const toggleDropdown = (key) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };


    return (
        <>
            <section className={`dashboard ${active && "active"}`} onClick={() => show === true && setShow(false)}>
                <div className="dashboard__inner d-flex">
                    {/* Dashboard Sidebar Start */}
                    <div className={`dashboard-sidebar ${active && "active"}`}>
                        <button
                            type="button"
                            className="dashboard-sidebar__close d-lg-none d-flex text-body hover-text-main" onClick={dashboardControl}
                        >
                            <i className="las la-times" />
                        </button>
                        <div className="dashboard-sidebar__inner">
                            <Link to="/" className="logo mb-4">
                                <img
                                    src="/assets/images/logo/logo-two.png"
                                    alt=""
                                    className="white-version"
                                />
                                <img
                                    src="/assets/images/logo/white-logo.png"
                                    alt=""
                                    className="dark-version"
                                />
                            </Link>
                            <Link to="/" className="logo favicon mb-4">
                                <img src="/assets/images/logo/favicon.png" alt="" />
                            </Link>
                            {/* Sidebar List Start */}
                            <ul className="sidebar-list">
                                <li className="sidebar-list__item">
                                    <NavLink to="/dashboard" className={(navData) =>
                                        navData.isActive ? "sidebar-list__link activePage" : "sidebar-list__link"
                                    }  >
                                        <span className="sidebar-list__icon">

                                            <i className="las la-home"></i>
                                        </span>
                                        <span className="text">Dashboard</span>
                                    </NavLink>
                                </li>
                                <li className="sidebar-list__item">
                                    <NavLink to="/dashboard-profile" className={(navData) =>
                                        navData.isActive ? "sidebar-list__link activePage" : "sidebar-list__link"
                                    }>
                                        <span className="sidebar-list__icon">

                                            <i className="las la-user-alt"></i>
                                        </span>
                                        <span className="text">Profile</span>
                                    </NavLink>
                                </li>
                                <li className="sidebar-list__item">
                                    <NavLink to="/customers" className={(navData) =>
                                        navData.isActive ? "sidebar-list__link activePage" : "sidebar-list__link"
                                    }>
                                        <span className="sidebar-list__icon"><i className="las la-users"></i></span>
                                        <span className="text">Customers</span>
                                    </NavLink>
                                </li>
                                <li className="sidebar-list__item">
                                    <NavLink to="/vendors" className={(navData) =>
                                        navData.isActive ? "sidebar-list__link activePage" : "sidebar-list__link"
                                    }>
                                        <span className="sidebar-list__icon"><i className="las la-store-alt"></i></span>
                                        <span className="text">Sellers/Vendors</span>
                                    </NavLink>
                                </li>
                                <li className="sidebar-list__item">
                                    <NavLink to="/orders" className={(navData) =>
                                        navData.isActive ? "sidebar-list__link activePage" : "sidebar-list__link"
                                    }>
                                        <span className="sidebar-list__icon">

                                            <i className="las la-ticket-alt"></i>
                                        </span>
                                        <span className="text">Orders</span>
                                    </NavLink>
                                </li>

                                <li className="sidebar-list__item">
                                    <NavLink to="/earning" className={(navData) =>
                                        navData.isActive ? "sidebar-list__link activePage" : "sidebar-list__link"
                                    }>
                                        <span className="sidebar-list__icon">

                                            <i className="las la-money-bill-wave"></i>
                                        </span>
                                        <span className="text">Payment & Earnings</span>
                                    </NavLink>
                                </li>
                                <li className="sidebar-list__item">
                                    <NavLink to="/product-management" className={(navData) =>
                                        navData.isActive ? "sidebar-list__link activePage" : "sidebar-list__link"
                                    }>
                                        <span className="sidebar-list__icon">

                                            <i className="las la-shopping-cart"></i>
                                        </span>
                                        <span className="text">Product Management</span>
                                    </NavLink>
                                </li>

                                <li className="sidebar-list__item">
                                    <NavLink to="/purchases" className={(navData) =>
                                        navData.isActive ? "sidebar-list__link activePage" : "sidebar-list__link"
                                    }>
                                        <span className="sidebar-list__icon"><i class="las la-rupee-sign"></i>
                                        </span>
                                        <span className="text">Purchases</span>
                                    </NavLink>
                                </li>
                                <li className="sidebar-list__item">
                                    <div className="sidebar-list__link with-dropdown" onClick={() => toggleDropdown("invoice")}>
                                        <span className="sidebar-list__icon">
                                        <i className="las la-file-invoice"></i>
                                        </span>
                                        <span className="text">Invoice</span>
                                        <i className={`las la-angle-${openDropdowns.invoice ? "up" : "down"} dropdown-arrow`}></i>
                                    </div>

                                    {openDropdowns.invoice && (
                                        <ul className="sidebar-sublist">
                                            <li>
                                                <NavLink to="/invoices" className={({ isActive }) =>
                                                    isActive ? "sidebar-sublist__link activePage" : "sidebar-sublist__link"
                                                }>
                                                    <i className="las la-minus"></i> All Invoices
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/create-invoice" className={({ isActive }) =>
                                                    isActive ? "sidebar-sublist__link activePage" : "sidebar-sublist__link"
                                                }>
                                                    <i className="las la-minus"></i>  Create Invoice
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="sidebar-list__item">
                                    <div className="sidebar-list__link with-dropdown" onClick={() => toggleDropdown("category")}>
                                        <span className="sidebar-list__icon">
                                        <i class="las la-list"></i>
                                        </span>
                                        <span className="text">Categories</span>
                                        <i className={`las la-angle-${openDropdowns.category ? "up" : "down"} dropdown-arrow`}></i>
                                    </div>

                                    {openDropdowns.category && (
                                        <ul className="sidebar-sublist">
                                            <li>
                                                <NavLink to="/all-categories" className={({ isActive }) =>
                                                    isActive ? "sidebar-sublist__link activePage" : "sidebar-sublist__link"
                                                }>
                                                    <i className="las la-minus"></i> All Categories
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/add-category" className={({ isActive }) =>
                                                    isActive ? "sidebar-sublist__link activePage" : "sidebar-sublist__link"
                                                }>
                                                    <i className="las la-minus"></i>  Add Category
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                <li className="sidebar-list__item">
                                    <NavLink to="/notifications" className={(navData) =>
                                        navData.isActive ? "sidebar-list__link activePage" : "sidebar-list__link"
                                    }>
                                        <span className="sidebar-list__icon">
                                            <i class="las la-bell"></i>
                                        </span>
                                        <span className="text">All Notifictaion</span>
                                    </NavLink>
                                </li>
                                <li className="sidebar-list__item">
                                    <p>CMS</p>
                                </li>
                                <li className="sidebar-list__item">
                                    <div
                                        className={`sidebar-list__link with-dropdown ${openDropdowns.blog ? "activePage" : ""}`}
                                        onClick={() => toggleDropdown("blog")}
                                    >
                                        <span className="sidebar-list__icon">
                                            <i className="las la-pen-nib"></i>
                                        </span>
                                        <span className="text">Blog</span>
                                        <i className={`las la-angle-${openDropdowns.blog ? "up" : "down"} dropdown-arrow`}></i>
                                    </div>

                                    {openDropdowns.blog && (
                                        <ul className="sidebar-sublist">
                                            <li>
                                                <NavLink to="/all-blog" className={({ isActive }) =>
                                                    isActive ? "sidebar-sublist__link activePage" : "sidebar-sublist__link"
                                                }>
                                                    <i className="las la-minus"></i>  View All Blogs
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/add-new-blog" className={({ isActive }) =>
                                                    isActive ? "sidebar-sublist__link activePage" : "sidebar-sublist__link"
                                                }>
                                                    <i className="las la-minus"></i>   Add New Blog
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                {/* SEO DROPDOWN */}
                                <li className="sidebar-list__item">
                                    <div className="sidebar-list__link with-dropdown" onClick={() => toggleDropdown("seo")}>
                                        <span className="sidebar-list__icon">
                                            <i className="lar la-chart-bar"></i>
                                        </span>
                                        <span className="text">SEO</span>
                                        <i className={`las la-angle-${openDropdowns.seo ? "up" : "down"} dropdown-arrow`}></i>
                                    </div>

                                    {openDropdowns.seo && (
                                        <ul className="sidebar-sublist">
                                            <li>
                                                <NavLink to="/all-pages" className={({ isActive }) =>
                                                    isActive ? "sidebar-sublist__link activePage" : "sidebar-sublist__link"
                                                }>
                                                    <i className="las la-minus"></i> All SEO Details
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/add-seo-details" className={({ isActive }) =>
                                                    isActive ? "sidebar-sublist__link activePage" : "sidebar-sublist__link"
                                                }>
                                                    <i className="las la-minus"></i>  Add SEO Details
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                <li className="sidebar-list__item">
                                    <NavLink to="/login" className={(navData) =>
                                        navData.isActive ? "sidebar-list__link activePage" : "sidebar-list__link"
                                    }>
                                        <span className="sidebar-list__icon">

                                            <i className="las la-sign-out-alt"></i>
                                        </span>
                                        <span className="text">Logout</span>
                                    </NavLink>
                                </li>

                            </ul>
                            {/* Sidebar List End */}
                        </div>
                    </div>

                    <div className="dashboard-body">
                        {/* Dashboard Nav Start */}
                        <div className="dashboard-nav bg-white flx-between gap-md-3 gap-2">
                            <div className="dashboard-nav__left flx-align gap-md-3 gap-2">
                                <button onClick={dashboardControl}
                                    type="button"
                                    className="icon-btn bar-icon text-heading bg-gray-seven flx-center"
                                >
                                    <i className="las la-bars" />
                                </button>
                                <button onClick={dashboardControl}
                                    type="button"
                                    className="icon-btn arrow-icon text-heading bg-gray-seven flx-center"
                                >
                                    <img src="/assets/images/icons/angle-right.svg" alt="" />
                                </button>
                                <form action="#" className="search-input d-sm-block d-none">
                                    <span className="icon">
                                        <img
                                            src="/assets/images/icons/search-dark.svg"
                                            alt=""
                                            className="white-version"
                                        />
                                        <img
                                            src="/assets/images/icons/search-dark-white.svg"
                                            alt=""
                                            className="dark-version"
                                        />
                                    </span>
                                    <input
                                        type="text"
                                        className="common-input common-input--md common-input--bg pill w-100"
                                        placeholder="Search here..."
                                    />
                                </form>
                            </div>
                            <div className="dashboard-nav__right" >
                                <div className="header-right flx-align">
                                    <div className="header-right__inner gap-sm-3 gap-2 flx-align d-flex">
                                        {/* Light Dark Mode */}
                                        <NotificationsDropdwon className="master-layout-notifications" />
                                        <div className="user-profile">
                                            <button className="user-profile__button flex-align" onClick={showProfileControl}>
                                                <span className="user-profile__thumb">
                                                    <img
                                                        src="/assets/images/thumbs/user-profile.png"
                                                        className="cover-img"
                                                        alt=""
                                                    />
                                                </span>
                                            </button>
                                            <ul className={`user-profile-dropdown ${show && "show"} `}>
                                                <li className="sidebar-list__item">
                                                    <Link to="/dashboard-profile" className="sidebar-list__link">
                                                        <span className="sidebar-list__icon">
                                                            <img
                                                                src="/assets/images/icons/sidebar-icon2.svg"
                                                                alt=""
                                                                className="icon"
                                                            />
                                                            <img
                                                                src="/assets/images/icons/sidebar-icon-active2.svg"
                                                                alt=""
                                                                className="icon icon-active"
                                                            />
                                                        </span>
                                                        <span className="text">Profile</span>
                                                    </Link>
                                                </li>
                                                <li className="sidebar-list__item">
                                                    <Link to="/orders" className="sidebar-list__link">
                                                        <span className="sidebar-list__icon">
                                                            <img
                                                                src="/assets/images/icons/sidebar-icon10.svg"
                                                                alt=""
                                                                className="icon"
                                                            />
                                                            <img
                                                                src="/assets/images/icons/sidebar-icon-active10.svg"
                                                                alt=""
                                                                className="icon icon-active"
                                                            />
                                                        </span>
                                                        <span className="text">Orders</span>
                                                    </Link>
                                                </li>

                                                <li className="sidebar-list__item">
                                                    <Link to="/login" className="sidebar-list__link">
                                                        <span className="sidebar-list__icon">
                                                            <img
                                                                src="/assets/images/icons/sidebar-icon13.svg"
                                                                alt=""
                                                                className="icon"
                                                            />
                                                            <img
                                                                src="/assets/images/icons/sidebar-icon-active13.svg"
                                                                alt=""
                                                                className="icon icon-active"
                                                            />
                                                        </span>
                                                        <span className="text">Logout</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* children */}
                        {children}
                        {/* Dashboard Footer */}
                        <div className="dashboard-footer bottom-footer-two mt-32 border-0 bg-white">
                            <div className="bottom-footer__inner flx-between gap-3">
                                <p className="bottom-footer__text font-14">
                                    {" "}
                                    Copyright © 2024 Couponskart, All rights reserved.
                                </p>
                                <div className="footer-links gap-4">
                                    <Link to="/#" className="footer-link hover-text-heading font-14">
                                        Terms of service
                                    </Link>
                                    <Link to="/#" className="footer-link hover-text-heading font-14">
                                        Privacy Policy
                                    </Link>
                                    <Link to="/#" className="footer-link hover-text-heading font-14">
                                        cookies
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>




        </>
    );
}

export default MasterLayout;