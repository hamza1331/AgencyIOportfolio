import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBg from '../PraticlesBg';

class Herosection4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="banner pos-r fullscreen-banner dark-bg o-hidden">
        <div className="align-center pt-0 b-pl">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="bnr-title large">P.</div>
              </div>
              <div className="col-md-7">
                <h1 className="text-white">Welcome to creative
                design portfolio</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-left h-100 d-flex align-items-center justify-content-center">
          <div className="hero-social text-center">
            <ul className="list-unstyled">
              <li>
                <Link to="/"> <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link to="/"> <i className="fab fa-dribbble" />
                </Link>
              </li>
              <li>
                <Link to="/"> <i className="fab fa-skype" />
                </Link>
              </li>
              <li>
                <Link to="/"> <i className="fab fa-linkedin-in" />
                </Link>
              </li>
            </ul>
          </div> <Link to="#main-page" className="scroll-down-arrow" />
        </div>
        <div className="inside-text"> <span>Agencio</span>
        </div>
        <div className="ripple-background">
          <div className="circle shade1" />
          <div className="circle shade2" />
          <div className="circle shade3" />
          <div className="circle shade4" />
          <div className="circle shade5" />
        </div>
      </section>

    );
  }
}

export default Herosection4;