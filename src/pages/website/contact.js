import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'


const Contact = props => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Contact";
    }, []);

    return (
        <div>
            <div>
                <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Contact Us</h1>
                                <nav className="d-flex align-items-center">
                                <Link to="/">Home<span className="lnr lnr-arrow-right" /></Link>
                                <Link to="/contact">Contact</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="product_description_area">
                    <div className="container">
                        
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="contact_info">
                                    <div className="info_item">
                                        <i className="lnr lnr-home" />
                                        <h6>Trinh Van Bo, Ha Noi</h6>
                                        <p>Santa monica bullevard</p>
                                    </div>
                                    <div className="info_item">
                                        <i className="lnr lnr-phone-handset" />
                                        <h6>00 (440) 9865 562</h6>
                                        <p>Mon to Fri 9am to 6 pm</p>
                                    </div>
                                    <div className="info_item">
                                        <i className="lnr lnr-envelope" />
                                        <h6>thupthph08004@fpt.edu.vn</h6>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <form className="row contact_form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name"  />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address"   />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject"  />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" id="message" rows={1} placeholder="Enter Message" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-right">
                                        <button type="submit" value="submit" className="primary-btn">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================Contact Area =================*/}
            </div>

        </div>
    )
}


export default Contact
