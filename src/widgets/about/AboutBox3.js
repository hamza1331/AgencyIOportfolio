import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import CountUp from 'react-countup';

class AboutBox3 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <img className="img-fluid w-75 box-shadow" src={require(`../../assets/images/about/01.jpg`)} alt="" />
              <div className="img-bg">
                <svg className="morph-shape" viewBox="0 0 500 500">
                  <defs>
                    <linearGradient id="main-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="10%" style={{stopColor: '#0083ff'}} />
                      <stop offset="100%" style={{stopColor: '#00f2aa'}} />
                    </linearGradient>
                  </defs>
                  <path id="object" className="js-items-shape-path" fill="url(#main-gradient)" d="M418.1 159.8 C460.9 222.9 497 321.5 452.4 383.4 417.2 432.4 371.2 405.6 271.3 420.3 137.19 440 90.45 500.6 42.16 442.8 -9.57 381 86.33 289.1 117.7 215.5 144.3 153.4 145.69 54.21 212.7 36.25 290.3 15.36 373.9 94.6 418.1 159.8 " data-original="M 418.1,159.8 C 460.9,222.9 497,321.5 452.4,383.4 417.2,432.4 371.2,405.6 271.3,420.3 137.2,440 90.45,500.6 42.16,442.8 -9.572,381 86.33,289.1 117.7,215.5 144.3,153.4 145.7,54.21 212.7,36.25 290.3,15.36 373.9,94.6 418.1,159.8 Z" />
                </svg>
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <div className="section-title">
                <h2 className="title">We are specialize for <span>Creative Brands</span></h2>
                <p className="lead">Agencio discovering the source behind the ubiquitous filler text In seeing a sample of lorem ipsum, his interest was piqued by consectetur Agencio discovering</p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="ht-progress-bar">
                    <h6>Business</h6>
                    <Progress  value="75"> 
                        <div className="progress-parcent"><span>75</span>%</div>
                    </Progress>
                  </div>
                </div>
                <div className="col-sm-6 mt-5 mt-sm-0">
                  <div className="ht-progress-bar">
                    <h6>Marketing</h6>
                    <Progress  value="70"> 
                        <div className="progress-parcent"><span>70</span>%</div>
                    </Progress>
                  </div>
                </div>
                <div className="col-sm-6 mt-5">
                  <div className="ht-progress-bar">
                    <h6>Design</h6>
                    <Progress  value="90"> 
                        <div className="progress-parcent"><span>90</span>%</div>
                    </Progress>
                  </div>
                </div>
                <div className="col-sm-6 mt-5">
                  <div className="ht-progress-bar">
                    <h6>Consulting</h6>
                    <Progress  value="85"> 
                        <div className="progress-parcent"><span>85</span>%</div>
                    </Progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default AboutBox3;