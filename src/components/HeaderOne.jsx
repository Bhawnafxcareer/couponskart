
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link, NavLink } from "react-router-dom";
const HeaderOne = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var menuExpand = offCanvasNav.querySelectorAll(
      ".has-submenu > .nav-menu__link"
    );
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }

  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="overlay"></div>
      <div className={`side-overlay ${active && "show"}`}></div>
      {/* ==================== Header Start Here ==================== */}
      <header className={`header ${scroll ? "fixed-header" : ""} `}>
        <div className="container">
          <nav className="header-inner flx-between">
            {/* Logo Start */}
            <div className="logo">
              <Link to="/" className="link white-version" >
                <img src="assets/images/logo/logo-two.png" alt="Logo" />
              </Link>
              <Link to="/" className="link dark-version">
                <img src="assets/images/logo/white-logo.png" alt="Logo" />
              </Link>
            </div>
            {/* Logo End  */}
            {/* Menu Start  */}
            <div className="header-menu d-lg-block d-none">
              <ul className="nav-menu flx-align">
                <li className="nav-menu__item ">
                  <Link to="/" className="nav-menu__link">
                    Home
                  </Link>
                </li>
                <li className="nav-menu__item ">
                  <Link to="/about" className="nav-menu__link">
                    About
                  </Link>
                </li>
                <li className="nav-menu__item has-submenu">
                  <Link to="#" className="nav-menu__link">
                   All Coupons
                  </Link>
                  <ul className="nav-submenu">    
                    <li className="nav-submenu__item">
                      <NavLink to="/all-product" className="nav-submenu__link">
                        UP TO 50% Off
                      </NavLink>
                    </li>
                    <li className="nav-submenu__item">
                      <NavLink to="/all-product" className="nav-submenu__link">
                        UP TO 30% off
                      </NavLink>
                    </li>
                  
                  </ul>
                </li>
                
                <li className="nav-menu__item ">
                  <Link to="/blog" className="nav-menu__link">
                    Blog
                  </Link>
                </li>
                <li className="nav-menu__item">
                  <NavLink to="/contact" className="nav-menu__link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Menu End  */}
            {/* Header Right start */}
            <div className="header-right flx-align">
            <Link
                to="/"
                className="header-right__button cart-btn position-relative"
              >
                <img
                  src="assets/images/icons/notification.png"
                  alt=""
                  className="white-version"
                />
                <img
                  src="assets/images/icons/notification-white.png"
                  alt=""
                  className="dark-version"
                />
                <span className="qty-badge font-12">0</span>
              </Link>
              {/* Light Dark Mode */}
              {/* <ThemeToggle /> */}
              {/* Light Dark Mode */}
              <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">
                <Link to="/register" className="btn btn-main pill">
                  <span className="icon-left icon">
                    <img src="assets/images/icons/user.svg" alt="" />
                  </span>
                  Create Account
                </Link>
                <div className="language-select flx-align select-has-icon">
                  <img
                    src="assets/images/icons/globe.svg"
                    alt=""
                    className="globe-icon white-version"
                  />
                  <img
                    src="assets/images/icons/globe-white.svg"
                    alt=""
                    className="globe-icon dark-version"
                  />
                  <select className="select py-0 ps-2 border-0 fw-500" defaultValue={1}>
                    <option value={1}>Eng</option>
                    <option value={2}>Bn</option>
                    <option value={3}>Eur</option>
                    <option value={4}>Urd</option>
                  </select>
                </div>
              </div>
              <button
                type="button"
                className="toggle-mobileMenu d-lg-none"
                onClick={mobileMenu}
              >
                <i className="las la-bars" />
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
        <div className="container">
        <div className="search-box">
          <button
            type="submit"
            className=" icon border-0"
          >
            <img src="assets/images/icons/search-01.svg" alt="" />
          </button>
          <input
            type="text"
            className="common-input common-input--sm  bg-light rounded "
            placeholder="Search theme, plugins & more..."
          />

        </div>
      </div>
      </header>

      {/* ==================== Header End Here ==================== */}

      <div className={`mobile-menu d-lg-none d-block ${active && "active"}`}>
        <button type="button" className="close-button text-body hover-text-main" onClick={mobileMenu}>
          <i className="las la-times" />
        </button>
        <div className="mobile-menu__inner">
          <Link to="/" className="mobile-menu__logo">
            <img
              src="assets/images/logo/logo-two.png"
              alt="Logo"
              className="white-version"
            />
            <img
              src="assets/images/logo/white-logo.png"
              alt="Logo"
              className="dark-version"
            />
          </Link>
          <div className="mobile-menu__menu">
            <ul
              className="nav-menu flx-align nav-menu--mobile"
              id="offcanvas-navigation"
            >
              <li className="nav-menu__item  ">
                <Link to="/" className="nav-menu__link">
                  Home
                </Link>

              </li>
              <li className="nav-menu__item  ">
                <Link to="/about" className="nav-menu__link">
                  About
                </Link>

              </li>
              <li className="nav-menu__item has-submenu">
                <Link to="#" className="nav-menu__link">
                  All Coupons
                </Link>
                <ul className="nav-submenu">

                  <li className="nav-submenu__item">
                    <NavLink to="/all-product" className={(navData) =>
                      navData.isActive ? "nav-submenu__link activePage" : "nav-submenu__link"
                    } >
                      UP TO 50% Off
                    </NavLink>
                  </li>
                  <li className="nav-submenu__item">
                    <NavLink to="/all-product" className={(navData) =>
                      navData.isActive ? "nav-submenu__link activePage" : "nav-submenu__link"
                    } >
                      UP TO 30% Off
                    </NavLink>
                  </li>

                </ul>
              </li>
            
              <li className="nav-menu__item ">
                <Link to="/blog" className="nav-menu__link">
                  Blog
                </Link>



              </li>
              <li className="nav-menu__item">
                <NavLink to="/contact" className="nav-menu__link">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="header-right__inner d-lg-none my-3 gap-1 d-flex flx-align">
              <Link to="/register" className="btn btn-main pill">
                <span className="icon-left icon">
                  <img src="assets/images/icons/user.svg" alt="" />
                </span>
                Create Account
              </Link>
              <div className="language-select flx-align select-has-icon">
                <img
                  src="assets/images/icons/globe.svg"
                  alt=""
                  className="globe-icon white-version"
                />
                <img
                  src="assets/images/icons/globe-white.svg"
                  alt=""
                  className="globe-icon dark-version"
                />
                <select className="select py-0 ps-2 border-0 fw-500" defaultValue={1}>
                  <option value={1}>Eng</option>
                  <option value={2}>Bn</option>
                  <option value={3}>Eur</option>
                  <option value={4}>Urd</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;
