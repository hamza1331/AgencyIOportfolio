import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
window.fn = OwlCarousel;

class FeatureBox5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: 2
    };
  }
  handleMenuHover(itemno) {
    this.setState({
      isHovered: itemno
    });
  }
  render() {
    const {isHovered} = this.state;
    return (
      <div className="row">
        <div className="col-12">
          <div className="white-bg py-5 px-3 p-md-5 box-shadow">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12">
                <div className="section-title">
                  <h2 className="title mb-0">We’re a Building Brands More <span>Quickly design agency</span></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className={(isHovered == 1) ? 'featured-item style-3 active' : 'featured-item style-3'} onMouseEnter={() => this.handleMenuHover(1)}    >
                  <div className="featured-icon"> <i className="flaticon-histogram" />
                    <span className="border-anim" />
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
              <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
              <div className={(isHovered == 2) ? 'featured-item style-3 active' : 'featured-item style-3'} onMouseEnter={() => this.handleMenuHover(2)}    >
                 <div className="featured-icon"> <i className="flaticon-challenges" />
                    <span className="border-anim" />
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
              <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
              <div className={(isHovered == 3) ? 'featured-item style-3 active' : 'featured-item style-3'} onMouseEnter={() => this.handleMenuHover(3)}    >
                 <div className="featured-icon"> <i className="flaticon-support" />
                    <span className="border-anim" />
                  </div>
                  <div className="featured-title">
                    <h5>24/7 Support</h5>
                  </div>
                  <div className="featured-desc">
                    <p>Design professionals, there's a bit of controversy the filler text Agencio</p>
                    <Link className="btn btn-white mt-5" to="/"><span>Learn More <i className="fas fa-plus-square" /></span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default FeatureBox5;