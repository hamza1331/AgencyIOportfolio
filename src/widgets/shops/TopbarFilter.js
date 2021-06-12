import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TotalProduct from '../../api/product';
import {filterSort} from '../../actions/saidfilter';
import {FilterProduct} from '../../services';
import { connect } from 'react-redux';

class TopbarFilter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ProductLength=this.props.ProductLength;
        var Viewname=this.props.StateView;
        return (
            <div className="row mb-4 align-items-center">
                <div className="col-md-5 mb-3 mb-md-0">
                    {ProductLength > 0 ? 
                        <span className="text-muted">Showing 1 to {ProductLength} of {TotalProduct.length} total</span>
                    : 
                        <p className="result-count">
                            Showing 0 of total {TotalProduct.length}
                        </p>
                    }
                </div>
                <div className="col-md-7 d-flex align-items-center justify-content-md-end">
                    <div className="view-filter"> 
                        <Link to="#" className={(Viewname == "Gridview") ? 'active' : ''} onClick={() => this.props.ViewChange('Gridview')}><i className="flaticon-squares" /></Link>
                        <Link  to="#" className={(Viewname == "Listview") ? 'active' : ''} onClick={() => this.props.ViewChange('Listview')} ><i className="flaticon-list" /></Link>
                    </div>
                    <div className="sort-filter ml-2 d-flex align-items-center" >
                        <select onChange={(e) => this.props.filterSort(e.target.value)} tabIndex={-1} >
                            <option  value=" " selected="selected">Default Sorting</option>
                            <option  value="NewProduct">Newest Item</option>
                            <option  value="HighPrice">High To Low</option>
                            <option  value="LowPrice">Low To High</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: FilterProduct(state.data, state.filters),
    filters: state.filters
})

export default connect(mapStateToProps, {filterSort})(TopbarFilter);