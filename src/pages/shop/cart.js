import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pageheading from '../../widgets/Pageheading';

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.GetCartItems = this.GetCartItems.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  GetCartItems() {
    return JSON.parse(localStorage.getItem("CartProduct"));
  }
  RemoveItem = (Index) => {
    var CartValue = JSON.parse(localStorage.getItem("CartProduct"));
    CartValue = CartValue.slice(0, Index).concat(CartValue.slice(Index + 1, CartValue.length));
    localStorage.removeItem("CartProduct");
    localStorage.setItem("CartProduct", JSON.stringify(CartValue));
  }

  AddQty = (Index) => {
    var CartValue = JSON.parse(localStorage.getItem("CartProduct"));
    CartValue[Index].Qty = parseInt(CartValue[Index].Qty + 1);
    localStorage.removeItem("CartProduct");
    localStorage.setItem("CartProduct", JSON.stringify(CartValue));
  }

  RemoveQty = (Index) => {
    var CartValue = JSON.parse(localStorage.getItem("CartProduct"));

    if (CartValue[Index].Qty != 1) {

      CartValue[Index].Qty = parseInt(CartValue[Index].Qty - 1);
      localStorage.removeItem("CartProduct");
      localStorage.setItem("CartProduct", JSON.stringify(CartValue));
    } else {
      this.RemoveItem(Index);
    }
  }
    render() {
        return (
          <div>
          {/*page title start*/}
          <Pageheading foldername={"Shop"} title={"Shoping Cart"} />
          {/*page title end*/}
          {/*body content start*/}
          <div id="main-page" className="page-content">
            <section>
            {(this.GetCartItems() != null && this.GetCartItems().length > 0) ?
              <div className="container">
                <div className="table-responsive">
                  <table className="cart-table table">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.GetCartItems().map((CartItem, index) => (
                          <tr>
                            <td>
                              <div className="media align-items-center">
                                <Link to="/">
                                  <img className="img-fluid rounded box-shadow" src={require(`../../assets/images/${CartItem.ProductImage}`)} alt="" />
                                </Link>
                                <div className="media-body">
                                  <p>{CartItem.ProductName}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h5 className="mb-0">
                                ${CartItem.Rate.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                              </h5>
                            </td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <Link to="#" className="btn-product btn-product-up" onClick={() => this.RemoveQty(index)}><i className="fas fa-minus" />
                                </Link>
                                <input className="form-product" type="number" name="form-product" value={CartItem.Qty} />
                                <Link to="#"  className="btn-product btn-product-down" onClick={() => this.AddQty(index)}> <i className="fas fa-plus" />
                                </Link>
                              </div>
                            </td>
                            <td>
                              <h5 className="mb-0">
                                ${(CartItem.Rate * CartItem.Qty).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                              </h5>
                            </td>
                            <td>
                              <Link to="#" type="submit" className="btn btn-primary btn-sm" onClick={() => this.RemoveItem(index)}><i className="fas fa-trash" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
                </div>
                <div className="row mt-5">
                  <div className="col"> <Link   className="btn btn-theme" to="#">Update Cart</Link>
                  </div>
                  <div className="col text-md-right"> <Link className="btn btn-theme" to="#">Close Coupon</Link>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col text-right">
                    <div>
                      <ul className="list-unstyled">
                        <li className="mb-2"><span> Sub Total : </span> $ ${this.GetCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</li>
                        <li className="mb-2"><span> VAT  : </span> $ 20.00</li>
                        <li><span><strong className="cart-total"> Total :</strong></span>  <strong className="cart-total">$ {this.GetCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 20).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end mt-5">
                  <div className="col text-md-right"> 
                    <Link className="btn btn-white" to="/product-grid">Continue Shopping</Link>
                    <Link className="btn btn-theme" to="/checkout">Proceed to checkout</Link>
                  </div>
                </div>
              </div>
             :
                  <div className="row">
                    <div className="col-md-12 text-center pb-11">
                      <h3 className="mb-4">Your cart is Currently Empty.</h3>
                      <Link className="btn btn-primary mr-3" to="/">Homes</Link>
                      <Link className="btn btn-primary" to="/product-grid">Continue Shoppings</Link>
                    </div>
                  </div>
            }
            </section>
          </div>
          {/*body content end*/}
        </div>
        );
    }
}

export default Cart;