import React, { Component } from 'react';
import { Row, Col, Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleProductView from '../../widgets/shops/productsingle';
import Pageheading from '../../widgets/Pageheading';


class ProductSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductList: this.props.products,
      ActiveProductID: parseInt(this.props.match.params.id),
      SelectedProduct: null,
      SelectedTab: '1',
      tech:'1'
    }
    this.toggle = this.toggle.bind(this);
   }
   componentDidMount() {
      window.scrollTo(0, 0)
      let ActiveProduct = this.state.ActiveProductID;
      let ProductList = this.state.ProductList;
      if (ProductList && ProductList.length > 0) {
        ProductList.map((product) => {
          if (product.id === ActiveProduct) {
            this.setState({
              ...this.state,
              SelectedProduct: product
            })
          }
        })
      }
    }
    handleChange(e){
      this.setState({
        tech: e.target.value
      })
    }
    toggle(tab) {
      if (this.state.SelectedTab !== tab) {
        this.setState({
          SelectedTab: tab
        });
      }
    }
    render() {
      var {SelectedProduct} = this.state;

        return (
          <div>
          {/*page title start*/}
          <Pageheading foldername={"Shop"} title={"Product Single"} />
          {/*page title end*/}
          {/*body content start*/}
          <div id="main-page" className="page-content">
            <section>
            {(SelectedProduct !== null) ?
              <div className="container">
                <SingleProductView ProductClick={SelectedProduct}/>
              </div>
            : null }
            </section>
            {/*tab start*/}
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="tab">
                      <Nav tabs >
                        <NavItem active>
                          <NavLink className={classnames({ active: this.state.SelectedTab === '1' })} onClick={() => { this.toggle('1'); }} >Description</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink className={classnames({ active: this.state.SelectedTab === '2' })} onClick={() => { this.toggle('2'); }}>Additional information</NavLink>
                        </NavItem>
                        <NavItem disabled>
                          <NavLink className={classnames({ active: this.state.SelectedTab === '3' })} onClick={() => { this.toggle('3'); }}>Reviews (2)</NavLink>
                        </NavItem>
                      </Nav>
                      {/* Tab panes */}
                       {/* Tab panes */}
                       <TabContent activeTab={this.state.SelectedTab} className="pt-5">
                        <TabPane tabId="1" className="fade show" active>
                          <h5 className="mb-3">Product Description</h5>
                          <p className="lead mb-0">ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam, congue laoreet elit metus eget diam. Proin ac metus diam. In quis scelerisque velit. Proin pellentesque neque ut scelerisque dapibus. Praesent elementum feugiat dignissim. Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam, nisi interdum mollis. Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam.</p>
                        </TabPane>
                        <TabPane tabId="2" className="fade show">
                        <h5 className="mb-3">Additional information</h5>
                          <table className="table table-bordered mb-0">
                            <tbody>
                              <tr>
                                <td>Size</td>
                                <td>Small, Medium, Large &amp; Extra Large</td>
                              </tr>
                              <tr>
                                <td>Color</td>
                                <td>Read, Blue, Green &amp; Black</td>
                              </tr>
                              <tr>
                                <td>Chest</td>
                                <td>38 inches</td>
                              </tr>
                              <tr>
                                <td>Waist</td>
                                <td>20 cm</td>
                              </tr>
                              <tr>
                                <td>Length</td>
                                <td>35 cm</td>
                              </tr>
                              <tr>
                                <td>Fabric</td>
                                <td>Cotton, Silk &amp; Synthetic</td>
                              </tr>
                              <tr>
                                <td>Warranty</td>
                                <td>6 Months</td>
                              </tr>
                            </tbody>
                          </table>
                      
                        </TabPane>
                        <TabPane tabId="3" className="fade show">
                        <div className="row">
                            <div className="col-md-7">
                              <div className="row total-rating">
                                <div className="col-md-6">
                                  <div className="box-total">
                                    <h5>Overall</h5>
                                    <h4>4.0</h4>
                                    <h6>(03 Reviews)</h6>
                                  </div>
                                </div>
                                <div className="col-md-6 mt-5 mt-md-0">
                                  <div className="rating-list">
                                    <h5>Based on 3 Reviews</h5>
                                    <ul className="list-unstyled">
                                      <li> <Link to="/">5 Star
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" /> 01</Link>
                                      </li>
                                      <li> <Link to="/">4 Star
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" /> 01</Link>
                                      </li>
                                      <li> <Link to="/">3 Star
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" /> 01</Link>
                                      </li>
                                      <li> <Link to="/">2 Star
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" /> 01</Link>
                                      </li>
                                      <li> <Link to="/">1 Star
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" /> 01</Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="media-holder review-list mt-5">
                                <div className="media">
                                  <img className="img-fluid mr-3" alt="image" src={require(`../../assets/images/thumbnail/01.jpg`)} />
                                  <div className="media-body">
                                    <h6>Charlote Kerry</h6>
                                    <p>It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!</p> <span className="review-rating">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </span>
                                  </div>
                                </div>
                                <div className="media mt-5">
                                  <img className="img-fluid mr-3" alt="image" src={require(`../../assets/images/thumbnail/02.jpg`)} />
                                  <div className="media-body">
                                    <h6>Jesson Mart</h6>
                                    <p>May a cusstums offficer somewon nothing of a poison-filled. Until, from a twho, twho chaffinch may also pursue it, not even a lump. But as twho, as a tank</p> <span className="review-rating">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="post-comments mt-5 pos-r">
                                <div className="section-title mb-3">
                                  <h5>Add REVIEW</h5>
                                </div>
                                <form id="contact-form" method="post" action="contact.php">
                                  <div className="messages" />
                                  <div className="form-group">
                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" required="required" data-error="Name is required." />
                                    <div className="help-block with-errors" />
                                  </div>
                                  <div className="form-group">
                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Email Address" required="required" data-error="Valid email is required." />
                                    <div className="help-block with-errors" />
                                  </div>
                                  <div className="form-group clearfix">
                                    <select className="form-control" onChange={this.handleChange.bind(this)} defaultValue={this.state.tech}>
                                      <option defaultValue="0">Rating -- Select</option>
                                      <option defaultValue="1">1</option>
                                      <option defaultValue="2">2</option>
                                      <option defaultValue="3">3</option>
                                      <option defaultValue="4">4</option>
                                      <option defaultValue="5">5</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <input id="form_number" type="text" name="name" className="form-control" placeholder="Phone Number" required="required" />
                                  </div>
                                  <div className="form-group">
                                    <textarea id="form_message" name="message" className="form-control" placeholder="Type Comment" rows={4} required="required" data-error="Please,leave us a message." defaultValue={""} />
                                    <div className="help-block with-errors" />
                                  </div>
                                  <button className="btn btn-theme mt-3">Post Comment</button>
                                </form>
                              </div>
                            </div>
                          </div>
                       </TabPane>
                      </TabContent>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*tab end*/}
          </div>
          {/*body content end*/}
        </div>
        );
    }
}

const ProductStatetoProps = state => {
  return {
    products: state.data.products
  };
};

export default connect(ProductStatetoProps)(withRouter(ProductSingle));