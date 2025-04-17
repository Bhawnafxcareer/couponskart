import React from 'react'
import {Link} from 'react-router-dom'
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'

const BlogDashboard = () => {
  return (
    <>
      <MasterLayout>
        {/* Preloader */}
        <Preloader />
                <div className="dashboard-body__content">
                <div className="row g-4">
          <div className="col-lg-4 col-sm-6">
            <div className="post-item">
              <div className="post-item__thumb">
                <Link to="/blog-details" className="link">
                  <img
                    src="assets/images/thumbs/blog1.png"
                    className="cover-img"
                    alt=""
                  />
                </Link>
              </div>
              <div className="post-item__content">
                <div className="post-item__top flx-align">
                  <Link
                    to="/blog"
                    className="post-item__tag pill font-14 text-heading fw-500 hover-text-main"
                  >
                    Hiring
                  </Link>
                  <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                    <span className="icon">
                      <img
                        src="assets/images/icons/calendar.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/calendar-white.svg"
                        alt=""
                        className="dark-version"
                      />
                    </span>
                    <span className="text">Jan 17, 2024</span>
                  </div>
                </div>
                <h5 className="post-item__title">
                  <Link to="/blog-details" className="link">
                    How to hire a right business executive for your company
                  </Link>
                </h5>
                <Link
                  to="/blog-details"
                  className="btn btn-outline-light pill fw-600"
                >
                  Read More{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="post-item">
              <div className="post-item__thumb">
                <Link to="/blog-details" className="link">
                  <img
                    src="assets/images/thumbs/blog1.png"
                    className="cover-img"
                    alt=""
                  />
                </Link>
              </div>
              <div className="post-item__content">
                <div className="post-item__top flx-align">
                  <Link
                    to="/blog"
                    className="post-item__tag pill font-14 text-heading fw-500 hover-text-main"
                  >
                    Workshop
                  </Link>
                  <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                    <span className="icon">
                      <img
                        src="assets/images/icons/calendar.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/calendar-white.svg"
                        alt=""
                        className="dark-version"
                      />
                    </span>
                    <span className="text">Jan 17, 2024</span>
                  </div>
                </div>
                <h5 className="post-item__title">
                  <Link to="/blog-details" className="link">
                    The Gig Economy: Adapting to a Flexible Workforce
                  </Link>
                </h5>
                <Link
                  to="/blog-details"
                  className="btn btn-outline-light pill fw-600"
                >
                  Read More{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="post-item">
              <div className="post-item__thumb">
                <Link to="/blog-details" className="link">
                  <img
                    src="assets/images/thumbs/blog1.png"
                    className="cover-img"
                    alt=""
                  />
                </Link>
              </div>
              <div className="post-item__content">
                <div className="post-item__top flx-align">
                  <Link
                    to="/blog"
                    className="post-item__tag pill font-14 text-heading fw-500 hover-text-main"
                  >
                    Project Management
                  </Link>
                  <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                    <span className="icon">
                      <img
                        src="assets/images/icons/calendar.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/calendar-white.svg"
                        alt=""
                        className="dark-version"
                      />
                    </span>
                    <span className="text">Jan 17, 2024</span>
                  </div>
                </div>
                <h5 className="post-item__title">
                  <Link to="/blog-details" className="link">
                    The Future of Remote Work: Strategies for Success
                  </Link>
                </h5>
                <Link
                  to="/blog-details"
                  className="btn btn-outline-light pill fw-600"
                >
                  Read More{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="post-item">
              <div className="post-item__thumb">
                <Link to="/blog-details" className="link">
                  <img
                    src="assets/images/thumbs/blog1.png"
                    className="cover-img"
                    alt=""
                  />
                </Link>
              </div>
              <div className="post-item__content">
                <div className="post-item__top flx-align">
                  <Link
                    to="/blog"
                    className="post-item__tag pill font-14 text-heading fw-500 hover-text-main"
                  >
                    Project Management
                  </Link>
                  <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                    <span className="icon">
                      <img
                        src="assets/images/icons/calendar.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/calendar-white.svg"
                        alt=""
                        className="dark-version"
                      />
                    </span>
                    <span className="text">Jan 17, 2024</span>
                  </div>
                </div>
                <h5 className="post-item__title">
                  <Link to="/blog-details" className="link">
                    The Future of Remote Work: Strategies for Success
                  </Link>
                </h5>
                <Link
                  to="/blog-details"
                  className="btn btn-outline-light pill fw-600"
                >
                  Read More{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="post-item">
              <div className="post-item__thumb">
                <Link to="/blog-details" className="link">
                  <img
                    src="assets/images/thumbs/blog1.png"
                    className="cover-img"
                    alt=""
                  />
                </Link>
              </div>
              <div className="post-item__content">
                <div className="post-item__top flx-align">
                  <Link
                    to="/blog"
                    className="post-item__tag pill font-14 text-heading fw-500 hover-text-main"
                  >
                    Hiring
                  </Link>
                  <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                    <span className="icon">
                      <img
                        src="assets/images/icons/calendar.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/calendar-white.svg"
                        alt=""
                        className="dark-version"
                      />
                    </span>
                    <span className="text">Jan 17, 2024</span>
                  </div>
                </div>
                <h5 className="post-item__title">
                  <Link to="/blog-details" className="link">
                    How to hire a right business executive for your company
                  </Link>
                </h5>
                <Link
                  to="/blog-details"
                  className="btn btn-outline-light pill fw-600"
                >
                  Read More{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="post-item">
              <div className="post-item__thumb">
                <Link to="/blog-details" className="link">
                  <img
                    src="assets/images/thumbs/blog1.png"
                    className="cover-img"
                    alt=""
                  />
                </Link>
              </div>
              <div className="post-item__content">
                <div className="post-item__top flx-align">
                  <Link
                    to="/blog"
                    className="post-item__tag pill font-14 text-heading fw-500 hover-text-main"
                  >
                    Workshop
                  </Link>
                  <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                    <span className="icon">
                      <img
                        src="assets/images/icons/calendar.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/calendar-white.svg"
                        alt=""
                        className="dark-version"
                      />
                    </span>
                    <span className="text">Jan 17, 2024</span>
                  </div>
                </div>
                <h5 className="post-item__title">
                  <Link to="/blog-details" className="link">
                    The Gig Economy: Adapting to a Flexible Workforce
                  </Link>
                </h5>
                <Link
                  to="/blog-details"
                  className="btn btn-outline-light pill fw-600"
                >
                  Read More{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="post-item">
              <div className="post-item__thumb">
                <Link to="/blog-details" className="link">
                  <img
                    src="assets/images/thumbs/blog1.png"
                    className="cover-img"
                    alt=""
                  />
                </Link>
              </div>
              <div className="post-item__content">
                <div className="post-item__top flx-align">
                  <Link
                    to="/blog"
                    className="post-item__tag pill font-14 text-heading fw-500 hover-text-main"
                  >
                    Hiring
                  </Link>
                  <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                    <span className="icon">
                      <img
                        src="assets/images/icons/calendar.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/calendar-white.svg"
                        alt=""
                        className="dark-version"
                      />
                    </span>
                    <span className="text">Jan 17, 2024</span>
                  </div>
                </div>
                <h5 className="post-item__title">
                  <Link to="/blog-details" className="link">
                    How to hire a right business executive for your company
                  </Link>
                </h5>
                <Link
                  to="/blog-details"
                  className="btn btn-outline-light pill fw-600"
                >
                  Read More{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="post-item">
              <div className="post-item__thumb">
                <Link to="/blog-details" className="link">
                  <img
                    src="assets/images/thumbs/blog1.png"
                    className="cover-img"
                    alt=""
                  />
                </Link>
              </div>
              <div className="post-item__content">
                <div className="post-item__top flx-align">
                  <Link
                    to="/blog"
                    className="post-item__tag pill font-14 text-heading fw-500 hover-text-main"
                  >
                    Workshop
                  </Link>
                  <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                    <span className="icon">
                      <img
                        src="assets/images/icons/calendar.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/calendar-white.svg"
                        alt=""
                        className="dark-version"
                      />
                    </span>
                    <span className="text">Jan 17, 2024</span>
                  </div>
                </div>
                <h5 className="post-item__title">
                  <Link to="/blog-details" className="link">
                    The Gig Economy: Adapting to a Flexible Workforce
                  </Link>
                </h5>
                <Link
                  to="/blog-details"
                  className="btn btn-outline-light pill fw-600"
                >
                  Read More{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="post-item">
              <div className="post-item__thumb">
                <Link to="/blog-details" className="link">
                  <img
                    src="assets/images/thumbs/blog1.png"
                    className="cover-img"
                    alt=""
                  />
                </Link>
              </div>
              <div className="post-item__content">
                <div className="post-item__top flx-align">
                  <Link
                    to="/blog"
                    className="post-item__tag pill font-14 text-heading fw-500 hover-text-main"
                  >
                    Project Management
                  </Link>
                  <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                    <span className="icon">
                      <img
                        src="assets/images/icons/calendar.svg"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/icons/calendar-white.svg"
                        alt=""
                        className="dark-version"
                      />
                    </span>
                    <span className="text">Jan 17, 2024</span>
                  </div>
                </div>
                <h5 className="post-item__title">
                  <Link to="/blog-details" className="link">
                    The Future of Remote Work: Strategies for Success
                  </Link>
                </h5>
                <Link
                  to="/blog-details"
                  className="btn btn-outline-light pill fw-600"
                >
                  Read More{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
                 </div>

    

      </MasterLayout>
    </>
  )
}

export default BlogDashboard