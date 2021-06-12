import React, { Component } from 'react';
import PriceTable1 from '../../widgets/price/PriceTable1';
import Pageheading from '../../widgets/Pageheading';

class Price extends Component {
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
        <Pageheading foldername={"Pages"} title={"Pricing"} />
        {/*page title end*/}
        {/*body content start*/}
        <div id="main-page" className="page-content">
          {/*pricing table start*/}
          <section>
            <div className="container">
              <PriceTable1 />
            </div>
          </section>
          {/*pricing table end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Price;