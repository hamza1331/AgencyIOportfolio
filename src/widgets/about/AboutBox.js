import React, { Component } from 'react';
import CountUp from 'react-countup';

class AboutBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                    <img className="img-fluid w-100 box-shadow" src={require(`../../assets/images/bg/01.jpg`)} alt="" />
                    <div className="row mt-4">
                        <div className="col-sm-6 order-sm-1">
                            <img className="img-fluid w-100 box-shadow" src={require(`../../assets/images/bg/02.jpg`)} alt="" />
                        </div>
                        <div className="col-sm-6 mt-4 mt-sm-0">
                            <div className="theme-bg p-4 box-shadow">
                                <h3 className="text-white mb-0 font-w-5">20+ Years Experience of Business </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-12 mt-5 mt-lg-0 mr-auto">
                    <div className="section-title">
                        <h6>About US</h6>
                        <h2 className="title">We are Design and Development <span>based on Agencio</span></h2>
                        <p className="lead mb-0">Agencio discovering the source behind the ubiquitous filler text In seeing a sample of lorem ipsum, his interest was piqued by consectetur Agencio discovering the source behind the ubiquitous</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="counter">
                                <div className="d-flex align-items-center">
                                    <div className="counter-icon mr-3"> <i className="flaticon-suitcase" />
                                    </div><CountUp className="count-number" end={900} duration={50} />
                                </div>
                                <h6>Lot's Of Work Completed</h6>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-5 mt-sm-0">
                            <div className="counter">
                                <div className="d-flex align-items-center">
                                    <div className="counter-icon mr-3"> <i className="flaticon-trophy" />
                                    </div> <CountUp className="count-number" end={400} duration={50} />
                                </div>
                                <h6>Best Awards Winning</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutBox;