import React, { Component } from 'react';
import PortfolioMasonryStyle from '../../widgets/portfolio/PortfolioMasory';
import Pageheading from '../../widgets/Pageheading';

class PortfolioFullwidth extends Component {
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
          <Pageheading foldername={"Portfolio"} title={"Portfolio FullWidth"} />
          {/*page title end*/}
          {/*body content start*/}
          <div id="main-page" className="page-content">
            <section>
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <PortfolioMasonryStyle />
                   </div>
                </div>
              </div>
            </section>
          </div>
          {/*body content end*/}
        </div>
        );
    }
}

export default PortfolioFullwidth;