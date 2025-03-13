
import { Link } from "react-router-dom";


const BreadcrumbTwo = () => {

    return (
        <section className="breadcrumb border-bottom p-0 d-block section-bg position-relative z-index-1" >
            <div className="breadcrumb-two">
                <img
                    src="assets/images/gradients/breadcrumb-gradient-bg.png"
                    alt=""
                    className="bg--gradient"
                />
                <div className="container container-two">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="breadcrumb-two-content">
                                <ul className="breadcrumb-list flx-align gap-2 mb-2">
                                    <li className="breadcrumb-list__item font-14 text-body">
                                        <Link
                                            to="/"
                                            className="breadcrumb-list__link text-body hover-text-main"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-list__item font-14 text-body">
                                        <span className="breadcrumb-list__icon font-10">
                                            <i className="fas fa-chevron-right" />
                                        </span>
                                    </li>
                                    <li className="breadcrumb-list__item font-14 text-body">
                                        <Link
                                            to="/all-product"
                                            className="breadcrumb-list__link text-body hover-text-main"
                                        >
                                            Products
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-list__item font-14 text-body">
                                        <span className="breadcrumb-list__icon font-10">
                                            <i className="fas fa-chevron-right" />
                                        </span>
                                    </li>
                                    <li className="breadcrumb-list__item font-14 text-body">
                                        <span className="breadcrumb-list__text">SaaS</span>
                                    </li>
                                </ul>
                                <h3 className="breadcrumb-two-content__title mb-3 text-capitalize">
                                    HappyYOU Ramadan Card
                                </h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default BreadcrumbTwo;