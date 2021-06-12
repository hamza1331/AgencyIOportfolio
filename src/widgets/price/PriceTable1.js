import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PriceTable1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="price-table theme-bg">
                <div className="price-header">
                  <h4 className="price-title">Free</h4>
                  <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum</p>
                </div>
                <div className="price-value">
                  <h2>
                    <span className="price-dollar">$</span>23
                  </h2>
                </div>
                <div className="price-list">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check" /> Free Domian</li>
                    <li><i className="fas fa-check" /> 500 MB Storage</li>
                    <li><i className="fas fa-check" /> 20 Database</li>
                    <li><i className="fas fa-check" /> Unlimited Site licenses</li>
                    <li><i className="fas fa-check" /> Professional Support</li>
                  </ul>
                </div>
                <Link className="btn btn-white btn-block mt-4" to="/"> <span>Get Started <i className="fas fa-long-arrow-alt-right ml-2" /></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 md-mt-5">
              <div className="price-table box-shadow">
                <div className="price-header">
                  <h4 className="price-title">Standard</h4>
                  <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum</p>
                </div>
                <div className="price-value">
                  <h2>
                    <span className="price-dollar">$</span>88
                  </h2>
                </div>
                <div className="price-list">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check" /> Free Domian</li>
                    <li><i className="fas fa-check" /> 500 MB Storage</li>
                    <li><i className="fas fa-check" /> 20 Database</li>
                    <li><i className="fas fa-check" /> Unlimited Site licenses</li>
                    <li><i className="fas fa-check" /> Professional Support</li>
                  </ul>
                </div>          
                <Link className="btn btn-theme btn-block mt-4" to="/"> <span>Get Started <i className="fas fa-long-arrow-alt-right ml-2" /></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 md-mt-5">
              <div className="price-table dark-bg">
                <div className="price-header">
                  <h4 className="price-title">Premium</h4>
                  <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum</p>
                </div>
                <div className="price-value">
                  <h2>
                    <span className="price-dollar">$</span>139
                  </h2>
                </div>
                <div className="price-list">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check" /> Free Domian</li>
                    <li><i className="fas fa-check" /> 500 MB Storage</li>
                    <li><i className="fas fa-check" /> 20 Database</li>
                    <li><i className="fas fa-check" /> Unlimited Site licenses</li>
                    <li><i className="fas fa-check" /> Professional Support</li>
                  </ul>
                </div>          
                <Link className="btn btn-white btn-block mt-4" to="/"> <span>Get Started <i className="fas fa-long-arrow-alt-right ml-2" /></span>
                </Link>
              </div>
            </div>
          </div>
       
            );
    }
}

export default PriceTable1;
