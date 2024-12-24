import React from 'react'

const WhyChoose = () => {
    return (
        <>
            <section className="whychoose bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-heading__title text-center">
                                Why Choose Us
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                        <div className="why_Choose_tab mt-3">
                                            <h3 className="num">01</h3>
                                            <h5>
                                                Create The Gift</h5>
                                            <p>Easily get people together to celebrate, regardless of distance.</p>
                                        </div>
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                        <div className="why_Choose_tab mt-3">
                                            <h3 className="num">02</h3>
                                            <h5>
                                                Create The Gift</h5>
                                            <p>Easily get people together to celebrate, regardless of distance.</p>
                                        </div>
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                        <div className="why_Choose_tab mt-3">
                                            <h3 className="num">03</h3>
                                            <h5>
                                                Create The Gift</h5>
                                            <p>Easily get people together to celebrate, regardless of distance.</p>
                                        </div>
                                    </button>
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-6">

                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                    <img src="assets/images/About/tab-img-1.webp" className='img-fluid' alt="" />
                                </div>
                                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                    <img src="assets/images/About/tab-img-2.webp" className='img-fluid' alt="" />
                                </div>
                                <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                    <img src="assets/images/About/tab-img-3.webp" className='img-fluid' alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default WhyChoose
