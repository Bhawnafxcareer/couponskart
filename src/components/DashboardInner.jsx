
import Chart from 'react-apexcharts'

import { Link } from "react-router-dom";
import Slider from "react-slick";

const DashboardInner = () => {

    let series = [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }]
    let options = {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    }


    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className="dashboard-body__content">
            {/* welcome balance Content Start */}
            <div className="welcome-balance mt-2 mb-40 flx-between gap-2">
                <div className="welcome-balance__left">
                    <h4 className="welcome-balance__title mb-0">Welcome back! Michel</h4>
                </div>
                <div className="welcome-balance__right flx-align gap-2">
                    <span className="welcome-balance__text fw-500 text-heading">
                        Available Balance:
                    </span>
                    <h4 className="welcome-balance__balance mb-0">$580.00</h4>
                </div>
            </div>
            {/* welcome balance Content End */}
            <div className="dashboard-body__item-wrapper">
                {/* dashboard body Item Start */}
                <div className="dashboard-body__item">
                    <div className="row gy-4">
                        <div className="col-xl-3 col-sm-6">
                            <div className="dashboard-widget">
                                <img
                                    src="assets/images/shapes/widget-shape1.png"
                                    alt=""
                                    className="dashboard-widget__shape one"
                                />
                                <img
                                    src="assets/images/shapes/widget-shape2.png"
                                    alt=""
                                    className="dashboard-widget__shape two"
                                />
                                <span className="dashboard-widget__icon">
                                    <img
                                        src="assets/images/icons/dashboard-widget-icon1.svg"
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
                                    <img src="assets/images/icons/chart-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="dashboard-widget">
                                <img
                                    src="assets/images/shapes/widget-shape1.png"
                                    alt=""
                                    className="dashboard-widget__shape one"
                                />
                                <img
                                    src="assets/images/shapes/widget-shape2.png"
                                    alt=""
                                    className="dashboard-widget__shape two"
                                />
                                <span className="dashboard-widget__icon">
                                    <img
                                        src="assets/images/icons/dashboard-widget-icon2.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                    <div>
                                        <h4 className="dashboard-widget__number mb-1 mt-3">
                                            $5289.00
                                        </h4>
                                        <span className="dashboard-widget__text font-14">
                                            Total Earnings
                                        </span>
                                    </div>
                                    <img src="assets/images/icons/chart-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="dashboard-widget">
                                <img
                                    src="assets/images/shapes/widget-shape1.png"
                                    alt=""
                                    className="dashboard-widget__shape one"
                                />
                                <img
                                    src="assets/images/shapes/widget-shape2.png"
                                    alt=""
                                    className="dashboard-widget__shape two"
                                />
                                <span className="dashboard-widget__icon">
                                    <img
                                        src="assets/images/icons/dashboard-widget-icon3.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                    <div>
                                        <h4 className="dashboard-widget__number mb-1 mt-3">5,2458</h4>
                                        <span className="dashboard-widget__text font-14">
                                            Total Downloads
                                        </span>
                                    </div>
                                    <img src="assets/images/icons/chart-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="dashboard-widget">
                                <img
                                    src="assets/images/shapes/widget-shape1.png"
                                    alt=""
                                    className="dashboard-widget__shape one"
                                />
                                <img
                                    src="assets/images/shapes/widget-shape2.png"
                                    alt=""
                                    className="dashboard-widget__shape two"
                                />
                                <span className="dashboard-widget__icon">
                                    <img
                                        src="assets/images/icons/dashboard-widget-icon4.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                    <div>
                                        <h4 className="dashboard-widget__number mb-1 mt-3">2,589</h4>
                                        <span className="dashboard-widget__text font-14">
                                            Total Sales
                                        </span>
                                    </div>
                                    <img src="assets/images/icons/chart-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* dashboard body Item End */}
                <section className=" position-relative z-index-1 overflow-hidden pb-5">

                    <div className="">
                        <div className="section-heading style-left style-flex flx-between align-items-end gap-3 mb-3">
                            <div className="section-heading__inner w-lg">
                                <h3 className="">Recently Viewed Coupons</h3>
                            </div>
                        </div>
                        <div className="resource-slider gy-4">
                            <Slider {...settings}>
                                <div className="product-item shadow-sm">
                                    <div className="product-item__thumb d-flex">
                                        <Link to="/product-details" className="link w-100">
                                            <img
                                                src="assets/images/thumbs/card1.webp"
                                                alt=""
                                                className="cover-img"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="product-item shadow-sm">
                                    <div className="product-item__thumb d-flex">
                                        <Link to="/product-details" className="link w-100">
                                            <img
                                                src="assets/images/thumbs/card2.webp"
                                                alt=""
                                                className="cover-img"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="product-item shadow-sm">
                                    <div className="product-item__thumb d-flex">
                                        <Link to="/product-details" className="link w-100">
                                            <img
                                                src="assets/images/thumbs/card3.webp"
                                                alt=""
                                                className="cover-img"
                                            />
                                        </Link>
                                    </div>
                                </div>

                                <div className="product-item shadow-sm">
                                    <div className="product-item__thumb d-flex">
                                        <Link to="/product-details" className="link w-100">
                                            <img
                                                src="assets/images/thumbs/card2.webp"
                                                alt=""
                                                className="cover-img"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="product-item shadow-sm">
                                    <div className="product-item__thumb d-flex">
                                        <Link to="/product-details" className="link w-100">
                                            <img
                                                src="assets/images/thumbs/card5.webp"
                                                alt=""
                                                className="cover-img"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>
                {/* dashboard body Item Start */}
                <div className="dashboard-body__item">
                    <div className="row gy-4">
                        <div className="col-xl-12">
                            <div className="dashboard-card">
                                <div className="dashboard-card__header flx-between gap-2">
                                    <h6 className="dashboard-card__title mb-0">Sales History</h6>
                                    <div className="select-has-icon d-inline-block">
                                        <select className="select common-input select-sm" defaultValue={1}>
                                            <option value={1}>Monthly</option>
                                            <option value={2}>Daily</option>
                                            <option value={3}>Yearly</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="dashboard-card__chart">
                                    <Chart options={options} series={series} type="area" height={"500"} width={"100%"} />
                                </div>
                            </div>
                        </div>
              
                    </div>
                </div>
                {/* dashboard body Item End */}
              
            </div>
        </div>
    );
}

export default DashboardInner;