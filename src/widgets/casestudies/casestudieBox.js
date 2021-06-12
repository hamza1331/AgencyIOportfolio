import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
class CaseStudieBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-lg-4">
                     <Tilt className="cases-item style-3 Tilt" options={{ perspective:1000,speed:500,max : 15,scale:1 }}  >
                        <div className="cases-images">
                            <img className="img-fluid" src={require(`../../assets/images/cases/05.jpg`)} alt="" />
                        </div>
                        <div className="cases-desc">
                            <div> <span>Design</span>
                                <h3><Link to="/case-studie-single">Experience for Agency</Link></h3>
                            </div>
                        </div>
                    </Tilt>
                </div>
                <div className="col-md-6 col-lg-4 mt-5 mt-md-0">
                     <Tilt className="cases-item style-3 Tilt" options={{ perspective:1000,speed:500,max : 15,scale:1 }}  >
                        <div className="cases-images">
                            <img className="img-fluid" src={require(`../../assets/images/cases/06.jpg`)} alt="" />
                        </div>
                        <div className="cases-desc">
                            <div> <span>UX/UI Design</span>
                                <h3><Link to="/case-studie-single">Crafted with Love</Link></h3>
                            </div>
                        </div>
                    </Tilt>
                </div>
                <div className="col-md-6 col-lg-4 mt-5 mt-lg-0">
                     <Tilt className="cases-item style-3 Tilt" options={{ perspective:1000,speed:500,max : 15,scale:1 }}  >
                        <div className="cases-images">
                            <img className="img-fluid" src={require(`../../assets/images/cases/07.jpg`)} alt="" />
                        </div>
                        <div className="cases-desc">
                            <div> <span>Branding</span>
                                <h3><Link to="/case-studie-single">Colibri Identity</Link></h3>
                            </div>
                        </div>
                    </Tilt>
                </div>
                <div className="col-md-6 col-lg-4 mt-5">
                     <Tilt className="cases-item style-3 Tilt" options={{ perspective:1000,speed:500,max : 15,scale:1 }}  >
                        <div className="cases-images">
                            <img className="img-fluid" src={require(`../../assets/images/cases/08.jpg`)} alt="" />
                        </div>
                        <div className="cases-desc">
                            <div> <span>Design</span>
                                <h3><Link to="/case-studie-single">Experience for Agency</Link></h3>
                            </div>
                        </div>
                    </Tilt>
                </div>
                <div className="col-md-6 col-lg-4 mt-5">
                     <Tilt className="cases-item style-3 Tilt" options={{ perspective:1000,speed:500,max : 15,scale:1 }}  >
                        <div className="cases-images">
                            <img className="img-fluid" src={require(`../../assets/images/cases/09.jpg`)} alt="" />
                        </div>
                        <div className="cases-desc">
                            <div> <span>UX/UI Design</span>
                                <h3><Link to="/case-studie-single">Crafted with Love</Link></h3>
                            </div>
                        </div>
                    </Tilt>
                </div>
                <div className="col-md-6 col-lg-4 mt-5">
                     <Tilt className="cases-item style-3 Tilt" options={{ perspective:1000,speed:500,max : 15,scale:1 }}  >
                        <div className="cases-images">
                            <img className="img-fluid" src={require(`../../assets/images/cases/10.jpg`)} alt="" />
                        </div>
                        <div className="cases-desc">
                            <div> <span>Branding</span>
                                <h3><Link to="/case-studie-single">Colibri Identity</Link></h3>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>


        );
    }
}

export default CaseStudieBox;
