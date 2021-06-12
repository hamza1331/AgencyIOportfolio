import React, { Component } from 'react';

class FeatureBox1 extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div className="row">
            <div className="col-md-4">
              <div className="featured-item style-2 text-center">
                <div className="featured-icon"> <i className="flaticon-ui" />
                  <span>01</span>
                </div>
                <div className="featured-title">
                  <h5>UX Design</h5>
                </div>
                <div className="featured-desc">
                  <p>Design professionals, there's a bit of controversy surrounding the filler text Agencio</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="featured-item style-2 text-center">
                <div className="featured-icon"> <i className="flaticon-domain" />
                  <span>02</span>
                </div>
                <div className="featured-title">
                  <h5>Development</h5>
                </div>
                <div className="featured-desc">
                  <p>Design professionals, there's a bit of controversy surrounding the filler text Agencio</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 mt-md-0">
              <div className="featured-item style-2 text-center">
                <div className="featured-icon"> <i className="flaticon-challenges" />
                  <span>03</span>
                </div>
                <div className="featured-title">
                  <h5>Strategy</h5>
                </div>
                <div className="featured-desc">
                  <p>Design professionals, there's a bit of controversy surrounding the filler text Agencio</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default FeatureBox1;