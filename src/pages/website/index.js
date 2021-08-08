import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


const Home = ({ products }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Home";
    }, []);

    

    return (
        <div>
            {/* Start category Area */}
            <section className="features-area section_gap_top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-8 col-md-8">
                                    <div className="single-deal">
                                        <div className="overlay" />
                                        <img className="img-fluid w-100" src="https://www.elle.vn/wp-content/uploads/2017/05/05/thoi-trang-han-quoc-elle-vn-.jpg" alt="" />

                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="single-deal">
                                        <div className="overlay" />
                                        <img className="img-fluid w-100" src="https://www.lavender.com.vn/wp-content/uploads/studio-chup-anh-thoi-trang-ha-noi-03.jpg" alt="" />

                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="single-deal">
                                        <div className="overlay" />
                                        <img className="img-fluid w-100" src="https://i.pinimg.com/originals/49/00/41/49004163743c5bd5cb7cf58c75d4c09d.jpg" alt="" />

                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="single-deal">
                                        <div className="overlay" />
                                        <img className="img-fluid w-100" src="https://kenh14cdn.com/thumb_w/650/2017/11-1484108795627.jpg" alt="" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-deal">
                                <div className="overlay" />
                                <img className="img-fluid w-100" src="https://danviet.mediacdn.vn/upload/1-2017/images/2017-02-21/148766854160287-1.jpg" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* End category Area */}
            {/* start features Area */}
            <section className="category-area">
                <div className="container">
                    <div className="row features-inner">
                        {/* single features */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src="https://img.icons8.com/all/500/free-shipping.png" height={50} alt="" />
                                </div>
                                <h6>Free Delivery</h6>
                                <p>Free Shipping on all order</p>
                            </div>
                        </div>
                        {/* single features */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/return-policy-1451839-1226834.png" height={50} alt="" />
                                </div>
                                <h6>Return Policy</h6>
                                <p>Free Shipping on all order</p>
                            </div>
                        </div>
                        {/* single features */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src="https://static.thenounproject.com/png/531787-200.png" height={50} alt="" />
                                </div>
                                <h6>24/7 Support</h6>
                                <p>Free Shipping on all order</p>
                            </div>
                        </div>
                        {/* single features */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src="https://image.flaticon.com/icons/png/512/102/102649.png" height={50} alt="" />
                                </div>
                                <h6>Secure Payment</h6>
                                <p>Free Shipping on all order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end features Area */}
            {/* start product Area */}
            <section className="owl-carousel active-product-area section_gap">
                {/* single product slide */}
                <div className="single-product-slider">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <div className="section-title">
                                    <h1>Product List</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* single product slide */}
            </section>
            {/* end product Area */}
            {/* start footer Area */}
        </div>

    )
}

export default Home;

