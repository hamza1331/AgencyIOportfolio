import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
window.fn = OwlCarousel;


class ServiceBox1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="row">
            <div className="col">  
                <OwlCarousel
                    items={this.props.logoitems}
                    autoplay={true}
                    loop={true}
                >
                  <div className="item">
                        <div className="featured-item style-4">
                            <div className="featured-icon"> <i className="flaticon-domain" />
                            </div>
                            <div className="featured-title">
                                <h5>Web Development</h5>
                            </div>
                            <div className="featured-desc">
                                <p>Design professionals, there's a bit of controversy the filler text Agencio</p>
                                <Link className="btn btn-white mt-5" to="/"><span>Learn More <i className="fas fa-plus-square" /></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="featured-item style-4 active">
                            <div className="featured-icon"> <i className="flaticon-analytics" />
                            </div>
                            <div className="featured-title">
                                <h5>Data Analytics</h5>
                            </div>
                            <div className="featured-desc">
                                <p>Design professionals, there's a bit of controversy the filler text Agencio</p>
                                <Link className="btn btn-white mt-5" to="/"><span>Learn More <i className="fas fa-plus-square" /></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="featured-item style-4">
                            <div className="featured-icon"> <i className="flaticon-challenges" />
                            </div>
                            <div className="featured-title">
                                <h5>Strategy</h5>
                            </div>
                            <div className="featured-desc">
                                <p>Design professionals, there's a bit of controversy the filler text Agencio</p>
                                <Link className="btn btn-white mt-5" to="/"><span>Learn More <i className="fas fa-plus-square" /></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="featured-item style-4">
                            <div className="featured-icon"> <i className="flaticon-ui" />
                            </div>
                            <div className="featured-title">
                                <h5>UX Design</h5>
                            </div>
                            <div className="featured-desc">
                                <p>Design professionals, there's a bit of controversy the filler text Agencio</p>
                                <Link className="btn btn-white mt-5" to="/"><span>Learn More <i className="fas fa-plus-square" /></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="featured-item style-4">
                            <div className="featured-icon"> <i className="flaticon-histogram" />
                            </div>
                            <div className="featured-title">
                                <h5>Marketing</h5>
                            </div>
                            <div className="featured-desc">
                                <p>Design professionals, there's a bit of controversy the filler text Agencio</p>
                                <Link className="btn btn-white mt-5" to="/"><span>Learn More <i className="fas fa-plus-square" /></span></Link>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
        );
    }
}

export default ServiceBox1;
