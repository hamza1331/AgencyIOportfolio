import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import OwlCarousel from 'react-owl-carousel';
window.fn = OwlCarousel;

class RelativeCasestudie extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col">
                <OwlCarousel
                    className={`owl-carousel`}
                    dotData={true}
                    items={this.props.logoitems}
                    autoplay={true}
                    loop={true}
                >
                    <div className="item">
                         <Tilt className="cases-images Tilt" options={{ perspective:1000,speed:500,max : 15,scale:1 }}  >
                            <div className="cases-images">
                                <img className="img-fluid" src={require(`../../assets/images/cases/05.jpg`)} alt="" />
                            </div>
                            <div className="cases-desc">
                                <div> <span>Design</span>
                                    <h3><Link to="/case-studies-single">Experience for Agency</Link></h3>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                    <div className="item">
                         <Tilt className="cases-images Tilt" options={{ perspective:1000,speed:500,max : 15,scale:1 }}  >
                            <div className="cases-images">
                                <img className="img-fluid" src={require(`../../assets/images/cases/06.jpg`)} alt="" />
                            </div>
                            <div className="cases-desc">
                                <div> <span>UX/UI Design</span>
                                    <h3><Link to="/case-studies-single">Crafted with Love</Link></h3>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                    <div className="item">
                         <Tilt className="cases-images Tilt" options={{ perspective:1000,speed:500,max : 15,scale:1 }}  >
                            <div className="cases-images">
                                <img className="img-fluid" src={require(`../../assets/images/cases/07.jpg`)} alt="" />
                            </div>
                            <div className="cases-desc">
                                <div> <span>Branding</span>
                                    <h3><Link to="/case-studies-single">Colibri Identity</Link></h3>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                    <div className="item">
                         <Tilt className="cases-images Tilt" options={{ perspective:1000,speed:500,max : 15,scale:1 }}  >
                            <div className="cases-images">
                                <img className="img-fluid" src={require(`../../assets/images/cases/08.jpg`)} alt="" />
                            </div>
                            <div className="cases-desc">
                                <div> <span>Design</span>
                                    <h3><Link to="/case-studies-single">Experience for Agency</Link></h3>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </OwlCarousel>
            </div>

        );
    }
}

export default RelativeCasestudie;
