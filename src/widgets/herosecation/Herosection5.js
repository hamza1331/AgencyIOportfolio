import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import ParticlesBg from '../PraticlesBg';

class Herosection5 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="banner banner-5 fullscreen-banner o-hidden p-0 parallaxie" style={{ backgroundImage: 'url(' + require(`../../assets/images/bg/03.jpg`) + ')' }}  data-overlay={6}>
        <div className="align-center pt-0">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h4 className="text-white">Created For <Typed
                    className="text-primary"
                    strings={['Agency','Marketing','Portfolio','Creative']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                  </Typed>
                  <span style={{ fontSize: '1.2em', verticalAlign: 'middle' }} className="cursor" data-cursordisplay="|" data-owner="some-id" /></h4>
                <h1 className="text-white font-w-7 mb-4">Designed And Launch faster with Agencio</h1>
                <Link className="btn btn-theme" to="#"><span>Explore Now <i className="fas fa-plus-square" /></span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lines">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
        <img src={require(`../../assets/images/bg/07.svg`)} alt="" className="round-shape" />
      </section>

    );
  }
}

export default Herosection5;