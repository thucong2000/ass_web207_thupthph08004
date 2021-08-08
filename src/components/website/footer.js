import React from 'react'

const Footer = props => {
    return (
        <footer className="footer-area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>About Us</h6>
                            <p>
                                <i className="lnr lnr-envelope"> Thupthph08004@fpt.edu.vn</i>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Newsletter</h6>
                            <p>Stay update with our latest</p>
                            <div id="mc_embed_signup">
                                <form className="form-inline">
                                    <div className="d-flex flex-row">
                                        <input className="form-control" name="EMAIL" placeholder="Enter Email" />
                                        <button className="click-btn btn btn-default"><i className="fa fa-search" /></button>
                                        <div style={{ position: 'absolute', left: '-5000px' }}>
                                            <input defaultValue type="text" />
                                        </div>
                                    </div>
                                    <div className="info" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget mail-chimp">
                            <h6 className="mb-20">Instragram Feed</h6>
                            <ul className="instafeed d-flex flex-wrap">
                                <li><img src="http://lorempixel.com/58/58/animals" alt="" /></li>
                                <li><img src="http://lorempixel.com/58/58/city" alt="" /></li>
                                <li><img src="http://lorempixel.com/58/58/food" alt="" /></li>
                                <li><img src="http://lorempixel.com/58/58/nightlife" alt="" /></li>
                                <li><img src="http://lorempixel.com/58/58/cats" alt="" /></li>
                                <li><img src="http://lorempixel.com/58/58/transport" alt="" /></li>
                                <li><img src="http://lorempixel.com/58/58/technics" alt="" /></li>
                                <li><img src="http://lorempixel.com/58/58/nature" alt="" /></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
