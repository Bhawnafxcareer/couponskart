import React from 'react'

const SingleInvoice = () => {
    return (
        <>
            <div className="dashboard-body__content">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="clearfix pb-3 bg-info-subtle p-lg-3 p-2 m-n2 rounded position-relative">
                                    <div className="float-sm-start">
                                        <div className="auth-logo">
                                            <img className="logo-dark me-1" src="assets/images/logo-dark.png" alt="logo-dark" height="24" />
                                        </div>
                                        <div className="mt-4">
                                            <h4>Larkon Admin.</h4>
                                            <address className="mt-3 mb-0">
                                                1729 Bangor St,<br />
                                                Houlton, ME, 04730 , United States <br />
                                                <abbr title="Phone">Phone:</abbr> +1(142)-532-9109
                                            </address>
                                        </div>
                                    </div>
                                    <div className="float-sm-end">
                                        <div className="table-responsive">
                                            <table className="table table-borderless mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td className="p-0 pe-5 py-1">
                                                            <p className="mb-0 text-dark fw-semibold"> Invoice : </p>
                                                        </td>
                                                        <td className="text-end text-dark fw-semibold px-0 py-1">#INV-0758267/90</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-0 pe-5 py-1">
                                                            <p className="mb-0">Issue Date: </p>
                                                        </td>
                                                        <td className="text-end text-dark fw-medium px-0 py-1">23 April 2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-0 pe-5 py-1">
                                                            <p className="mb-0">Due Date : </p>
                                                        </td>
                                                        <td className="text-end text-dark fw-medium px-0 py-1">26 April 2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-0 pe-5 py-1">
                                                            <p className="mb-0">Amount : </p>
                                                        </td>
                                                        <td className="text-end text-dark fw-medium px-0 py-1">$737.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-0 pe-5 py-1">
                                                            <p className="mb-0">Status : </p>
                                                        </td>
                                                        <td className="text-end px-0 py-1"><span className="badge bg-success text-white  px-2 py-1 fs-13">Paid</span></td>
                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="position-absolute top-100 start-50 translate-middle">
                                        <img src="assets/images/check-2.png" alt="" className="img-fluid" />
                                    </div>
                                </div>

                                <div className="clearfix pb-3 mt-4">
                                    <div className="float-sm-start">
                                        <div className="">
                                            <h4 className="card-title">Issue From :</h4>
                                            <div className="mt-3">
                                                <h4>Larkon Admin.INC</h4>
                                                <p className="mb-2">2437 Romano Street Cambridge, MA 02141</p>
                                                <p className="mb-2"><span className="text-decoration-underline">Phone :</span> +(31)781-417-2004</p>
                                                <p className="mb-2"><span className="text-decoration-underline">Email :</span> JulianeKuhn@jourrapide.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-sm-end">
                                        <div className="">
                                            <h4 className="card-title">Issue For :</h4>
                                            <div className="mt-3">
                                                <h4>Gaston Lapierre</h4>
                                                <p className="mb-2">1344 Hershell Hollow Road WA 98168 , USA</p>
                                                <p className="mb-2"><span className="text-decoration-underline">Phone :</span> +(123) 732-760-5760</p>
                                                <p className="mb-2"><span className="text-decoration-underline">Email :</span> hello@dundermuffilin.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-12">
                                        <div className="table-responsive table-borderless text-nowrap table-centered">
                                            <table className="table mb-0">
                                                <thead className="bg-light bg-opacity-50">
                                                    <tr>
                                                        <th className="border-0 py-2">Product Name</th>
                                                        <th className="border-0 py-2">Quantity</th>
                                                        <th className="border-0 py-2">Price</th>
                                                        <th className="border-0 py-2">Tax</th>
                                                        <th className="text-end border-0 py-2">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="rounded bg-light avatar d-flex align-items-center justify-content-center">
                                                                    <img src="assets/images/product/p-1.png" alt="" className="avatar" />
                                                                </div>
                                                                <div>
                                                                    <a href="#!" className="text-dark fw-medium fs-15">Men Black Slim Fit T-shirt</a>
                                                                    <p className="text-muted mb-0 mt-1 fs-13"><span>Size : </span>M</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>1</td>
                                                        <td>$80.00</td>
                                                        <td>$3.00</td>
                                                        <td className="text-end">$83.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="rounded bg-light avatar d-flex align-items-center justify-content-center">
                                                                    <img src="assets/images/product/p-5.png" alt="" className="avatar" />
                                                                </div>
                                                                <div>
                                                                    <a href="#!" className="text-dark fw-medium fs-15">Dark Green Cargo Pent</a>
                                                                    <p className="text-muted mb-0 mt-1 fs-13"><span>Size : </span>M</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>3</td>
                                                        <td>$110.00</td>
                                                        <td>$4.00</td>
                                                        <td className="text-end">$330.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="rounded bg-light avatar d-flex align-items-center justify-content-center">
                                                                    <img src="assets/images/product/p-8.png" alt="" className="avatar" />
                                                                </div>
                                                                <div>
                                                                    <a href="#!" className="text-dark fw-medium fs-15">Men Dark Brown Wallet</a>
                                                                    <p className="text-muted mb-0 mt-1 fs-13"><span>Size : </span>S</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>1</td>
                                                        <td>$132.00</td>
                                                        <td>$5.00</td>
                                                        <td className="text-end">$137.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="rounded bg-light avatar d-flex align-items-center justify-content-center">
                                                                    <img src="assets/images/product/p-10.png" alt="" className="avatar" />
                                                                </div>
                                                                <div>
                                                                    <a href="#!" className="text-dark fw-medium fs-15">Kid's Yellow T-shirt</a>
                                                                    <p className="text-muted mb-0 mt-1 fs-13"><span>Size : </span>S</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>2</td>
                                                        <td>$110.00</td>
                                                        <td>$5.00</td>
                                                        <td className="text-end">$223.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="row justify-content-end">
                                            <div className="col-lg-5 col-6">
                                                <div className="table-responsive">
                                                    <table className="table table-borderless mb-0">
                                                        <tbody>
                                                            <tr className="">
                                                                <td className="text-end p-0 pe-5 py-2">
                                                                    <p className="mb-0"> Sub Total : </p>
                                                                </td>
                                                                <td className="text-end text-dark fw-medium  py-2">$777.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-end p-0 pe-5 py-2">
                                                                    <p className="mb-0">Discount : </p>
                                                                </td>
                                                                <td className="text-end text-dark fw-medium  py-2">-$60.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-end p-0 pe-5 py-2">
                                                                    <p className="mb-0">Estimated Tax (15.5%) : </p>
                                                                </td>
                                                                <td className="text-end text-dark fw-medium  py-2">$20.00</td>
                                                            </tr>
                                                            <tr className="border-top">
                                                                <td className="text-end p-0 pe-5 py-2">
                                                                    <p className="mb-0 text-dark fw-semibold">Grand Amount : </p>
                                                                </td>
                                                                <td className="text-end text-dark fw-semibold  py-2">$737.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-lg-12">
                                                <div className="alert alert-danger alert-icon p-2" role="alert">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-sm rounded bg-danger d-flex justify-content-center align-items-center fs-18 me-2 flex-shrink-0">
                                                            <i className="bx bx-info-circle text-white"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-3 mb-1">
                                            <div className="text-end d-print-none">
                                                <a href="javascript:window.print()" className="btn btn-info width-xl">Print</a>
                                                <a href="javascript:void(0);" className="btn btn-outline-primary width-xl">Submit</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleInvoice