import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <>

      {/* Blog Details Section */}
      <section className="blog-details padding-y-120 position-relative overflow-hidden">
        <div className="container container-two">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* blog details top Start */}
              <div className="blog-details-top mb-64">
                <div className="blog-details-top__info flx-align gap-3 mb-4">
                  <div className="blog-details-top__thumb flx-align gap-2">
                    <img src="assets/images/thumbs/blog-details-user.png" alt="" />
                    <span className="text-heading fw-500">Michel Smith</span>
                  </div>
                  <span className="blog-details-top__date flx-align gap-2">
                    <img src="assets/images/icons/clock.svg" alt="" />
                    25 Jan 2024
                  </span>
                </div>
                <h2 className="blog-details-top__title mb-4 text-capitalize">
                  How to hire a right business executive for your company
                </h2>
                <p className="blog-details-top__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi
                  pellentesque lorem turpis feugiat non sed sed sed aliquam lectus
                  sodales gravida turpis maassa odio faucibus accumsan.
                </p>
              </div>
              {/* blog details top End */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* blog details content Start */}
              <div className="blog-details-content">
                <div className="blog-details-content__thumb mb-32">
                  <img src="assets/images/thumbs/blog1.png" alt="" />
                </div>
                <p className="blog-details-content__desc mb-40">
                  Design and development may seem like two separate worlds, but they
                  can work together seamlessly to create stunning and functional
                  software. In this post, we'll explore the benefits of integrating
                  design and development early on in a project.
                </p>
                <h4 className="blog-details-content__title mb-24">
                  Interview multiple candidates
                </h4>
                <p className="blog-details-content__desc mb-40">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi
                  pellentesque lorem turpis feugiat non sed sed sed aliquam lectus
                  sodales gravida turpis maassa.
                </p>

                <h5 className="blog-details-content__title mb-3">
                  Search for the right experience
                </h5>
                <p className="blog-details-content__desc mb-32">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi
                  pellentesque lorem turpis feugiat non sed sed sed aliquam lectus
                  sodales gravida turpis maassa odio. we'll explore the importance
                  of design in the software development process and how it can lead
                  to more successful projects.
                </p>
                <p className="blog-details-content__desc mb-24">
                  Lorem ipsum dolor sit amet consectetur. Ipsum vitae tincidunt
                  adipiscing sed tellus nulla sit ultrices. Arcu maecenas quam
                  iaculis ullamcorper id posuere. Leo congue nulla quam pharetra.
                  Pellentesque morbi dictumst congue risus luctus.
                </p>
                <ul className="product-list mb-40">
                  <li className="product-list__item font-18 fw-500 text-heading">
                    Morbi dictumst congue risus luctus
                  </li>
                  <li className="product-list__item font-18 fw-500 text-heading">
                    Porttitor nibh est vulputate vitae sem vitae.
                  </li>
                  <li className="product-list__item font-18 fw-500 text-heading">
                    Amet tellus nisl risus lorem vulputate velit eget.
                  </li>
                  <li className="product-list__item font-18 fw-500 text-heading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
                {/* Quote Text Start */}
                <div className="quote-text mb-40">
                  <img
                    src="assets/images/icons/quote-icon.svg"
                    alt=""
                    className="quote-text__icon"
                  />
                  <p className="quote-text__desc mb-3 font-20 fw-500 text-heading">
                    “Through their vision, determination, and exacting standards,
                    the winning young developers inspire not only their peers in the
                    Apple developer.
                  </p>
                  <h6 className="quote-text__name">Esabela Marun</h6>
                </div>
                {/* Quote Text Ebd */}
                <h5 className="blog-details-content__title mb-3">
                  Once you hire them, give them access for all tools &amp; resources
                  for success
                </h5>
                <p className="blog-details-content__desc mb-40">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  suspendisse convallis enim tincidunt nunc condimentum facilisi
                  accumsan tempor donec.
                </p>
                {/* Post Tag & Share Start */}
                <div className="flx-between gap-2 mb-40 mt-40">
                  <div className="post-tag flx-align gap-3">
                    <span className="post-tag__text text-heading fw-500">
                      Post Tag:{" "}
                    </span>
                    <ul className="post-tag__list flx-align gap-2">
                      <li className="post-tag__item">
                        <Link
                          to="/blog"
                          className="post-tag__link font-14 text-heading pill fw-500"
                        >
                          Business
                        </Link>
                      </li>
                      <li className="post-tag__item">
                        <Link
                          to="/blog"
                          className="post-tag__link font-14 text-heading pill fw-500"
                        >
                          Marketing
                        </Link>
                      </li>
                      <li className="post-tag__item">
                        <Link
                          to="/blog"
                          className="post-tag__link font-14 text-heading pill fw-500"
                        >
                          Strategy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="socail-share flx-align gap-3">
                    <span className="socail-share__text text-heading fw-500">
                      Share On:{" "}
                    </span>
                    <ul className="social-icon-list colorful-style">
                      <li className="social-icon-list__item">
                        <Link
                          to="https://www.facebook.com"
                          className="social-icon-list__link text-heading font-16 flex-center"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link
                          to="https://www.twitter.com"
                          className="social-icon-list__link text-heading font-16 flex-center"
                        >
                          {" "}
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li className="social-icon-list__item">
                        <Link
                          to="https://www.google.com"
                          className="social-icon-list__link text-heading font-16 flex-center"
                        >
                          {" "}
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Post Tag & Share End */}

            
              </div>
              {/* blog details content End*/}
            </div>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="article padding-y-120 section-bg">
        <div className="container container-two">
          <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
            <div className="section-heading__inner">
              <h3 className="section-heading__title">
                Browse all latest blogs and articles
              </h3>
            </div>
            <Link to="/blog" className="btn btn-outline-light btn-lg pill">
              Browse All Articles
            </Link>
          </div>
          <div className="article-item-wrapper">
            <div className="article-item">
              <div className="article-item__inner d-flex position-relative">
                <div className="article-item__start">
                  <div className="user-info">
                    <div className="user-info__thumb">
                      <img src="assets/images/thumbs/user-info-img1.png" alt="" />
                    </div>
                    <span className="user-info__text mt-2 mb-1 font-14 text-heading">
                      Posted by
                    </span>
                    <h6 className="user-info__name font-16 font-body fw-600 mb-0">
                      Ralph Edwards
                    </h6>
                  </div>
                </div>
                <div className="article-item__center d-flex align-items-center">
                  <div className="article-item__content">
                    <div className="article-item__top flx-align">
                      <Link to="/blog" className="article-item__tag font-14">
                        Startup
                      </Link>
                      <Link to="/blog" className="article-item__tag font-14">
                        Marketing
                      </Link>
                      <span className="text-heading font-16 fw-500">
                        June 24, 2024
                      </span>
                    </div>
                    <h4 className="article-item__title mb-3">
                      <Link to="/blog-details" className="link">
                        {" "}
                        Data-Driven Insights Unlock The Hidden Potential
                      </Link>
                    </h4>
                    <p className="article-item__desc">
                      Etiam id euismod odio. Ut euismod sem a lacus ringill a
                      hendrerit. facilisi orbi a arcu turpis...
                    </p>
                  </div>
                  <div className="article-item__thumb">
                    <img src="assets/images/thumbs/blog1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="article-item__end flex-shrink-0">
                <Link to="/blog-details" className="btn-simple">
                  Read More{" "}
                  <span className="icon font-26">
                    <i className="las la-arrow-right" />
                  </span>{" "}
                </Link>
              </div>
            </div>
            <div className="article-item">
              <div className="article-item__inner d-flex position-relative">
                <div className="article-item__start">
                  <div className="user-info">
                    <div className="user-info__thumb">
                      <img src="assets/images/thumbs/user-info-img2.png" alt="" />
                    </div>
                    <span className="user-info__text mt-2 mb-1 font-14 text-heading">
                      Posted by
                    </span>
                    <h6 className="user-info__name font-16 font-body fw-600 mb-0">
                      Jacob Jones
                    </h6>
                  </div>
                </div>
                <div className="article-item__center d-flex align-items-center">
                  <div className="article-item__content">
                    <div className="article-item__top flx-align">
                      <Link to="/blog" className="article-item__tag font-14">
                        Startup
                      </Link>
                      <Link to="/blog" className="article-item__tag font-14">
                        Marketing
                      </Link>
                      <span className="text-heading font-16 fw-500">
                        June 24, 2024
                      </span>
                    </div>
                    <h4 className="article-item__title mb-3">
                      <Link to="/blog-details" className="link">
                        we offer best training for individuals and teams
                      </Link>
                    </h4>
                    <p className="article-item__desc">
                      Etiam id euismod odio. Ut euismod sem a lacus ringill a
                      hendrerit. facilisi orbi a arcu turpis...
                    </p>
                  </div>
                  <div className="article-item__thumb">
                    <img src="assets/images/thumbs/blog1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="article-item__end flex-shrink-0">
                <Link to="/blog-details" className="btn-simple">
                  Read More{" "}
                  <span className="icon font-26">
                    <i className="las la-arrow-right" />
                  </span>{" "}
                </Link>
              </div>
            </div>
            <div className="article-item">
              <div className="article-item__inner d-flex position-relative">
                <div className="article-item__start">
                  <div className="user-info">
                    <div className="user-info__thumb">
                      <img src="assets/images/thumbs/user-info-img1.png" alt="" />
                    </div>
                    <span className="user-info__text mt-2 mb-1 font-14 text-heading">
                      Posted by
                    </span>
                    <h6 className="user-info__name font-16 font-body fw-600 mb-0">
                      Jenny Wilson
                    </h6>
                  </div>
                </div>
                <div className="article-item__center d-flex align-items-center">
                  <div className="article-item__content">
                    <div className="article-item__top flx-align">
                      <Link to="/blog" className="article-item__tag font-14">
                        Startup
                      </Link>
                      <Link to="/blog" className="article-item__tag font-14">
                        Marketing
                      </Link>
                      <span className="text-heading font-16 fw-500">
                        June 24, 2024
                      </span>
                    </div>
                    <h4 className="article-item__title mb-3">
                      <Link to="/blog-details" className="link">
                        The analytics feature is like having a personal fortune.
                      </Link>
                    </h4>
                    <p className="article-item__desc">
                      Etiam id euismod odio. Ut euismod sem a lacus ringill a
                      hendrerit. facilisi orbi a arcu turpis...
                    </p>
                  </div>
                  <div className="article-item__thumb">
                    <img src="assets/images/thumbs/blog1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="article-item__end flex-shrink-0">
                <Link to="/blog-details" className="btn-simple">
                  Read More{" "}
                  <span className="icon font-26">
                    <i className="las la-arrow-right" />
                  </span>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default BlogDetails;