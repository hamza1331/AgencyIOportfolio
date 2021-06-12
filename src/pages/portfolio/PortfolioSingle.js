import React, { Component } from 'react';
import PortfolioSingleBox from '../../widgets/portfolio/PortfolioSingle';
import Pageheading from '../../widgets/Pageheading';

class PortfolioSingle extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    render() {
        return (
          <div>
        {/*page title start*/}
        <Pageheading foldername={"Portfolio"} title={"Portfolio Single"} />
        {/*page title end*/}
        {/*body content start*/}
        <div id="main-page" className="page-content">
          {/*portfolio details start*/}
          <section>
            <div className="container">
              <div className="portfolio-info">
                <PortfolioSingleBox />
               </div>
            </div>
          </section>
          <section className="p-0">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-md-12">
                  <img className="img-fluid w-100" src={require(`../../assets/images/portfolio/large/01.jpg`)} alt="" />
                </div>
              </div>
            </div>
          </section>
          {/*portfolio details end*/}
        </div>
        {/*body content end*/}
      </div>
        );
    }
}

export default PortfolioSingle;