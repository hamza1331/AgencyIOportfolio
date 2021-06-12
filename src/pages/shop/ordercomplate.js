import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pageheading from '../../widgets/Pageheading';

class OrderComplate extends Component {
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
            <Pageheading foldername={"Shop"} title={"Order Complete"} />
            {/*page title end*/}
            {/*body content start*/}
            <div id="main-page" className="page-content">
              <section className="text-center">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="mb-4">Thank you for purchasing, Your order is complete</h3>
                      <Link className="btn btn-theme" to="/"><span>Home</span></Link>
                      <Link className="btn btn-theme" to="/product-grid"><span>Continue Shopping <i className="fas fa-shopping-cart ml-2" /></span></Link>
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

export default OrderComplate;