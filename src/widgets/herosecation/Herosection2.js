import React, { Component } from 'react';
import ParticlesBg from '../PraticlesBg';

class Herosection2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <section className="banner-2 pos-r">
          <ParticlesBg />
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <h5 className="d-inline-block text-theme px-3 py-2 white-bg box-shadow">Let Work Flow</h5>
                <h1 className="bnr-title2 mb-0 mt-3">Multiply Your Agency Bussiness</h1>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Herosection2;