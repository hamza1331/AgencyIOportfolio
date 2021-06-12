import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import OwlCarousel from 'react-owl-carousel';
window.fn = OwlCarousel;

class CasestudieSlider3 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="row">
                <div className="col-md-11 col-12">
                    <OwlCarousel
                        className={`owl-carousel no-pb`}
                        items={this.props.logoitems}
                        autoplay={true}
                        loop={true}
                    >
                        <div className="item">
                            <div className="cases-item style-2">
                                <Tilt className="cases-images Tilt" options={{ perspective:1000,speed:500,max : 15,scale:1 }}  >
                                    <img className="img-fluid" src={require(`../../assets/images/cases/01.jpg`)} alt="" />
                                </Tilt>
                                <div className="cases-desc">
                                    <div> <span>Design</span>
                                        <h3 className="text-white">Experience for Agency</h3>
                                        <p className="text-light">Agencio discovering the source behind the ubiquitous filler</p>
                                    </div> <Link className="btn btn-white btn-sm" to="/case-studies-single">Read Case Study <i className="fas fa-plus-square ml-2" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="cases-item style-2">
                                 <Tilt className="cases-images Tilt" options={{ perspective:1000,speed:500,max : 15,scale:1 }}  >
                                    <img className="img-fluid" src={require(`../../assets/images/cases/02.jpg`)} alt="" />
                                 </Tilt>
                                <div className="cases-desc">
                                    <div> <span>UX/UI Design</span>
                                        <h3 className="text-white">Crafted with Love</h3>
                                        <p className="text-light">Agencio discovering the source behind the ubiquitous filler</p>
                                    </div> <Link className="btn btn-white btn-sm" to="/case-studies-single">Read Case Study <i className="fas fa-plus-square ml-2" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="cases-item style-2">
                                 <Tilt className="cases-images Tilt" options={{ perspective:1000,speed:500,max : 15,scale:1 }}  >
                                    <img className="img-fluid" src={require(`../../assets/images/cases/03.jpg`)} alt="" />
                                </Tilt>
                                <div className="cases-desc">
                                    <div> <span>Branding</span>
                                        <h3 className="text-white">Colibri Identity</h3>
                                        <p className="text-light">Agencio discovering the source behind the ubiquitous filler</p>
                                    </div> <Link className="btn btn-white btn-sm" to="/case-studies-single">Read Case Study <i className="fas fa-plus-square ml-2" /></Link>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        );
    }
}

export default CasestudieSlider3;
