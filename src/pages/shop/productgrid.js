import React, { Component } from 'react';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import { FilterProduct } from '../../services';
import { connect } from 'react-redux';
import Gridview from '../../widgets/shops/gridview';
import TopbarFilter from '../../widgets/shops/TopbarFilter';
import Listview from '../../widgets/shops/listview';
import SidebarFilter from '../../widgets/shops/SidebarFilter';
import Pageheading from '../../widgets/Pageheading';


//const ProductParPage = 6;

class ProductGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      minValue: 0,
      maxValue: 6,
      status: true,
      viewname: "Gridview",
      ProductParPage: 6
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleChange = value => {
    this.setState({
      minValue: (value - 1) * this.state.ProductParPage,
      maxValue: value * this.state.ProductParPage
    });
  };

  updateViewState = Viewname => {
    if (Viewname == "Gridview") {
      this.setState({
        ...this.state,
        viewname: Viewname,
        ProductParPage: 6,
        maxValue: 6
      });
    }
    else {
      this.setState({
        ...this.state,
        viewname: Viewname,
        ProductParPage: 4,
        maxValue: 4
      });
    }

  }
  itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <Link className="page-link" to="/">Previous</Link>;
    }
    if (type === 'next') {
      return <Link className="page-link" to="/">Next</Link>;
    }
    return originalElement;
  }

  render() {
    let { products } = this.props;
    let { status, viewname, ProductParPage } = this.state;
    return (
      <div>
        {/*page title start*/}
        <Pageheading foldername={"Shop"} title={"Product Grid"} />
        {/*page title end*/}
        {/*body content start*/}
        {status ?
          <div id="main-page" className="page-content">
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 col-md-12 order-lg-1">
                    <TopbarFilter ProductLength={products.length} StateView={viewname} ViewChange={this.updateViewState} />
                    {(products.length > 0) ?
                      <>
                        <div className="row">
                          {(viewname == 'Gridview') ?
                            (products.slice(this.state.minValue, this.state.maxValue).map((product, index) => (
                              <Gridview productdata={product} key={index} />
                            )))
                            :
                            (products.slice(this.state.minValue, this.state.maxValue).map((product, index) => (
                              <Listview productdata={product} key={index} />
                            )))
                          }
                        </div>
                        <nav aria-label="Page navigation" className="mt-5">
                          <Pagination
                            className="pagination"
                            defaultCurrent={1}
                            defaultPageSize={ProductParPage}
                            onChange={this.handleChange}
                            total={products.length}
                            itemRender={this.itemRender}
                          />
                        </nav>
                      </>

                      :
                      <div className="col-lg-9 col-md-12 order-lg-12">
                        <div className="row text-center">
                          <h3>Sorry! No products were found matching your selection!    </h3>
                          <p>Please try to other words.</p>
                        </div>
                      </div>
                    }
                  </div>
                  <SidebarFilter />
                </div>
              </div>
            </section>
          </div>
          : <div>Loading</div>}
      </div>
    );
  }
}

const ProductDispatchToProps = (state) => ({
  products: FilterProduct(state.data, state.filters)

})
export default connect(
  ProductDispatchToProps, {}
)(ProductGrid)