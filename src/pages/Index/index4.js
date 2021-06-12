import React, { Component } from 'react';
import Herosection4 from '../../widgets/herosecation/Herosection4';
import PortfolioMasonryStyle from '../../widgets/portfolio/PortfolioMasory';
import Counter3 from '../../widgets/counter/Counter3';

class Index4 extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        {/*hero section start*/}
        <Herosection4 />
        {/*hero section end*/}
        {/*body content start*/}
        <div id="main-page" className="page-content">
          <section className="theme-bg p-0"  style={{ backgroundImage: 'url(' + require(`../../assets/images/pattern/01.png`) + ')' }}   >
            <div className="container">
              <div className="row custom-mt-10">
                <div className="col-lg-12 col-md-12">
                  <PortfolioMasonryStyle />
                </div>
              </div>
            </div>
          </section>
          {/*counter start*/}
          <section className="theme-bg">
            <div className="container">
              <Counter3 />
            </div>
          </section>
          {/*counter end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Index4;