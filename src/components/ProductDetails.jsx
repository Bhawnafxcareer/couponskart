import { Link } from "react-router-dom";
import { useState } from 'react';

const ProductDetails = () => {
    const amounts = [50, 100, 200, 300, 500, 1000];
    const [amount, setAmount] = useState(80);
    const [quantity, setQuantity] = useState(4);

    const handleAmountChange = (value) => {
        setAmount(value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };
    return (
        <div className="product-details mt-32 padding-b-120">
            <div className="container container-two">
                <div className="row gy-4">
                    <div className="col-lg-5">

                        {/* Product Details Content Start */}
                        <div className="product-details product-sidebar section-bg">
                            <div className="product-details__thumb">
                                <img src="assets/images/thumbs/coupon4.png" alt="" />
                            </div>
                        </div>
                        <div className="pt-4">
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloremque et velit non porro recusandae repellat accusantium repellendus accusamus! Doloribus repellendus sint laboriosam itaque eos sed in culpa voluptatum eaque?</p>
                        </div>
                        {/* Product Details Content End */}

                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        {/* ======================= Product Sidebar Start ========================= */}
                        <div className="product-sidebar section-bg">
                            <div className="product-sidebar__top position-relative flx-between gap-1">
                                <h6 className="product-sidebar__title mb-0">HappyYOU Ramadan Card </h6>
                                <h6 className="product-item__price mb-0 fs-4 fw-semibold"> ₹50 - ₹5000</h6>
                            </div>

                            <div className="">
                                <div className="">
                                    <div className="flex flex-col items-center gap-6 p-6">
                                        <div className="d-flex align-items-center justify-content-center gap-4 mb-4">
                                            <button onClick={() => setAmount(amount - 10)}><img src="assets/images/icons/minus-circle.png" width={'32px'} /></button>
                                            <span className="price-amount">INR {amount}</span>
                                            <button onClick={() => setAmount(amount + 10)}><img src="assets/images/icons/plus-circle.png" width={'32px'} /></button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div class>
                                <label className="text-sm mb-2">Quantity</label>
                                <div className="d-flex align-items-center gap-4">
                                    <select
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        className="p-2 px-4 border rounded"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                            <option key={num} value={num}>
                                                {num}
                                            </option>
                                        ))}
                                    </select>
                                    <Link to="/cart" className="btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 "
                                    ><img src="assets/images/icons/add-to-cart.svg" alt="" />Buy Now </Link>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductDetails;