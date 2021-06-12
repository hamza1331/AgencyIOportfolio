import React, { Component } from 'react';
import CountUp from 'react-countup';

class Counter3 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="counter">
                        <div className="d-flex align-items-center">
                            <div className="counter-icon mr-3"> <i className="flaticon-suitcase" />
                            </div>  <CountUp className="count-number" end={900} duration={50} />
                        </div>
                        <h6>Lot's Of Work Completed</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-5 mt-sm-0">
                    <div className="counter">
                        <div className="d-flex align-items-center">
                            <div className="counter-icon mr-3"> <i className="flaticon-experience" />
                            </div> <CountUp className="count-number" end={20} duration={50} />
                        </div>
                        <h6>Years of Experience</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-5 mt-lg-0">
                    <div className="counter">
                        <div className="d-flex align-items-center">
                            <div className="counter-icon mr-3"> <i className="flaticon-trophy" />
                            </div>  <CountUp className="count-number" end={400} duration={50} />
                        </div>
                        <h6>Best Awards Winning</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-5 mt-lg-0">
                    <div className="counter">
                        <div className="d-flex align-items-center">
                            <div className="counter-icon mr-3"> <i className="flaticon-rating" />
                            </div> <CountUp className="count-number" end={950} duration={50} />
                        </div>
                        <h6>Reviews from clients</h6>
                    </div>
                </div>
            </div>

        );
    }
}

export default Counter3;
