import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Herosection3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="banner fullscreen-banner o-hidden gradient-bg p-0">
        <div className="banner-bg"  style={{ backgroundImage: 'url(' + require(`../../assets/images/bg/02.jpg`) + ')' }}    data-overlay={6} />
        <div className="align-center b-pl">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h6 className="text-uppercase letter-space-2 text-white">We Provide Outsourced</h6>
                <h1 className="text-white mb-3"><span className="font-w-4">We Build A</span> Amazing Design</h1>
                <p className="mb-4 text-light">We created a experienced a surge in popularity during the 1960s when<br /> Letraset used it on their dry-transfer sheets</p>
                <Link className="btn btn-white" to="/"><span>Learn More <i className="fas fa-plus-square" /></span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-left bg-transparent h-100 d-flex align-items-center justify-content-center">
          <div className="hero-social text-center">
            <ul className="list-unstyled">
              <li> <Link to="/"> <i className="fab fa-facebook-f" /></Link></li>
              <li> <Link to="/"> <i className="fab fa-dribbble" /></Link></li>
              <li> <Link to="/"> <i className="fab fa-skype" /></Link></li>
              <li> <Link to="/"> <i className="fab fa-linkedin-in" /></Link></li>
            </ul>
          </div>
          <Link to="#main-page" className="scroll-down-arrow" />
        </div>
      </section>
    );
  }
}

export default Herosection3;