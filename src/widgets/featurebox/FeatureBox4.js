import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
window.fn = OwlCarousel;

class FeatureBox4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: 2,
      options: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
      },
    };
  }
  handleMenuHover(itemno) {
    this.setState({
      isHovered: itemno
    });
  }
  render() {
    const { isHovered } = this.state;

    return (
      <OwlCarousel
        className="owl-theme"
        items={this.props.logoitems}
        autoplay={true}
        loop={true}
        responsive={this.state.options}
      >
        <div className="item">
          <div className={(isHovered == 1) ? 'featured-item style-4 active' : 'featured-item style-4'} onClick={() => this.handleMenuHover(1)}    >
            <div className="featured-icon"> <i className="flaticon-domain" />
            </div>
            <div className="featured-title">
              <h5>Web Development</h5>
            </div>
            <div className="featured-desc">
              <p>Design professionals, there's a bit of controversy the filler text Agencio</p>
              <Link className="btn btn-white mt-5" to="/"><span>Learn More <i className="fas fa-plus-square" /></span></Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className={(isHovered == 2) ? 'featured-item style-4 active' : 'featured-item style-4'} onClick={() => this.handleMenuHover(2)}    >
            <div className="featured-icon"> <i className="flaticon-analytics" />
            </div>
            <div className="featured-title">
              <h5>Data Analytics</h5>
            </div>
            <div className="featured-desc">
              <p>Design professionals, there's a bit of controversy the filler text Agencio</p>
              <Link className="btn btn-white mt-5" to="/"><span>Learn More <i className="fas fa-plus-square" /></span></Link>
            </div>
          </div>
        </div>
        <div className="item">
          <div className={(isHovered == 3) ? 'featured-item style-4 active' : 'featured-item style-4'} onClick={() => this.handleMenuHover(3)}    >
            <div className="featured-icon"> <i className="flaticon-challenges" />
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
        <div className="item">
          <div className={(isHovered == 4) ? 'featured-item style-4 active' : 'featured-item style-4'} onClick={() => this.handleMenuHover(4)}    >
            <div className="featured-icon"> <i className="flaticon-ui" />
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
        <div className="item">
          <div className={(isHovered == 5) ? 'featured-item style-4 active' : 'featured-item style-4'} onClick={() => this.handleMenuHover(5)}    >
            <div className="featured-icon"> <i className="flaticon-histogram" />
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
      </OwlCarousel>

    );
  }
}

export default FeatureBox4;