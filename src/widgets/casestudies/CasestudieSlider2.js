import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
window.fn = OwlCarousel;

class CasestudieSlider2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                 <OwlCarousel
                    className={`owl-carousel no-pb`}
                    items={this.props.logoitems}
                    autoplay={true}
                    loop={true}
                >
                <div className="item">
                    <div className="cases-item">
                        <div className="cases-images">
                            <img className="img-fluid box-shadow" src={require(`../../assets/images/cases/01.jpg`)} alt="" />
                        </div>
                        <div className="cases-desc d-sm-flex align-items-center justify-content-between">
                            <div> <span>Design</span>
                                <h3>Experience for Agency</h3>
                            </div> <Link className="btn btn-white btn-sm" to="/case-studies-single">Read Case Study <i className="fas fa-plus-square ml-2" /></Link>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="cases-item">
                        <div className="cases-images">
                            <img className="img-fluid box-shadow" src={require(`../../assets/images/cases/02.jpg`)} alt="" />
                        </div>
                        <div className="cases-desc d-sm-flex align-items-center justify-content-between">
                            <div> <span>UX/UI Design</span>
                                <h3>Crafted with Love</h3>
                            </div> <Link className="btn btn-white btn-sm" to="/case-studies-single">Read Case Study <i className="fas fa-plus-square ml-2" /></Link>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="cases-item">
                        <div className="cases-images">
                            <img className="img-fluid box-shadow" src={require(`../../assets/images/cases/03.jpg`)} alt="" />
                        </div>
                        <div className="cases-desc d-sm-flex align-items-center justify-content-between">
                            <div> <span>Branding</span>
                                <h3>Colibri Identity</h3>
                            </div> <Link className="btn btn-white btn-sm" to="/case-studies-single">Read Case Study <i className="fas fa-plus-square ml-2" /></Link>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        );
    }
}

export default CasestudieSlider2;
