import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeatureBox3 extends Component {
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
        <div className="col-lg-4 col-md-6">
          <div className={(isHovered == 1) ? 'featured-item style-3 active' : 'featured-item style-3'} onMouseEnter={() => this.handleMenuHover(1)}    >
            <div className="featured-icon"> <i className="flaticon-ui" />
              <span className="border-anim" />
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
        <div className="col-lg-4 col-md-6 mt-5">
          <div className={(isHovered == 2) ? 'featured-item style-3 active' : 'featured-item style-3'} onMouseEnter={() => this.handleMenuHover(2)}    >
            <div className="featured-icon"> <i className="flaticon-analysis" />
              <span className="border-anim" />
            </div>
            <div className="featured-title">
              <h5>Development</h5>
            </div>
            <div className="featured-desc">
              <p>Design professionals, there's a bit of controversy the filler text Agencio</p>
              <Link className="btn btn-white mt-5" to="/"><span>Learn More <i className="fas fa-plus-square" /></span></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-5">
          <div className={(isHovered == 3) ? 'featured-item style-3 active' : 'featured-item style-3'} onMouseEnter={() => this.handleMenuHover(3)}    >
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
        <div className="col-lg-4 col-md-6">
          <div className={(isHovered == 4) ? 'featured-item style-3 active' : 'featured-item style-3'} onMouseEnter={() => this.handleMenuHover(4)}    >
           <div className="featured-icon"> <i className="flaticon-idea" />
              <span className="border-anim" />
            </div>
            <div className="featured-title">
              <h5>Web Design</h5>
            </div>
            <div className="featured-desc">
              <p>Design professionals, there's a bit of controversy the filler text Agencio</p>
              <Link className="btn btn-white mt-5" to="/"><span>Learn More <i className="fas fa-plus-square" /></span></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-5">
          <div className={(isHovered == 5) ? 'featured-item style-3 active' : 'featured-item style-3'} onMouseEnter={() => this.handleMenuHover(5)}    >
            <div className="featured-icon"> <i className="flaticon-optimization" />
              <span className="border-anim" />
            </div>
            <div className="featured-title">
              <h5>Optimization</h5>
            </div>
            <div className="featured-desc">
              <p>Design professionals, there's a bit of controversy the filler text Agencio</p>
              <Link className="btn btn-white mt-5" to="/"><span>Learn More <i className="fas fa-plus-square" /></span></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-5">
          <div className={(isHovered == 6) ? 'featured-item style-3 active' : 'featured-item style-3'} onMouseEnter={() => this.handleMenuHover(6)}    >
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

    );
  }
}

export default FeatureBox3;