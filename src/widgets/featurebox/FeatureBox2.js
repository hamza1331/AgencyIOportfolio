import React, { Component } from 'react';

class FeatureBox2 extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        isHovered: 1
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
          <div className="col-lg-6 col-md-6" >
            <div className={(isHovered == 1) ? 'featured-item style-1 active' : 'featured-item style-1'}  onMouseEnter={() => this.handleMenuHover(1)}    >
              <div className="featured-icon"> <i className="flaticon-idea" />
              </div>
              <div className="featured-title">
                <h5>Design</h5>
              </div>
              <div className="featured-desc">
                <p>There are many variations of Agencio of available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-5 mt-md-0">
          <div className={(isHovered == 2) ? 'featured-item style-1 active' : 'featured-item style-1'}  onMouseEnter={() =>  this.handleMenuHover(2)}    >
         
              <div className="featured-icon"> <i className="flaticon-histogram" />
              </div>
              <div className="featured-title">
                <h5>Marketing</h5>
              </div>
              <div className="featured-desc">
                <p>There are many variations of Agencio of available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-5">
          <div className={(isHovered == 3) ? 'featured-item style-1 active' : 'featured-item style-1'}  onMouseEnter={() => this.handleMenuHover(3)}    >
              <div className="featured-icon"> <i className="flaticon-analytics" />
              </div>
              <div className="featured-title">
                <h5>Data Analytics</h5>
              </div>
              <div className="featured-desc">
                <p>There are many variations of Agencio of available</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-5">
          <div className={(isHovered == 4) ? 'featured-item style-1 active' : 'featured-item style-1'}  onMouseEnter={() => this.handleMenuHover(4)}    >
              <div className="featured-icon"> <i className="flaticon-optimization" />
              </div>
              <div className="featured-title">
                <h5>Optimization</h5>
              </div>
              <div className="featured-desc">
                <p>There are many variations of Agencio of available</p>
              </div>
            </div>
          </div>
        </div>
     
        );
    }
}

export default FeatureBox2;