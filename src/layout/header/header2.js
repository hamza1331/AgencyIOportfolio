import React, { Component } from 'react';
import navLinks from '../../api/NavLinks';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      visible: false,
      loader: true,
      isCartview: false,
    }
    this.toggle = this.toggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.ReadCartItems = this.ReadCartItems.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick(event) {
    var elems = document.querySelectorAll(".childsubmenu");
    [].forEach.call(elems, function (el) {
      el.classList.remove("show");
    });
  }

  ReadCartItems() {
    return JSON.parse(localStorage.getItem("CartProduct"));
  }
  removeCartItems = (Index) => {
      var CartUpdate = JSON.parse(localStorage.getItem("CartProduct"));
      CartUpdate = CartUpdate.slice(0, Index).concat(CartUpdate.slice(Index + 1, CartUpdate.length));
      localStorage.removeItem("CartProduct");
      localStorage.setItem("CartProduct", JSON.stringify(CartUpdate));
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        isCartview: !this.state.isCartview
      });
    }
  }

  handleScroll() {

    var scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (scrollTop > 100) {
      this.setState({
        visible: true
      });
    }
    else {
      this.setState({
        visible: false
      });
    }
  }

  Viewcart() {
    this.setState({
      isCartview: !this.state.isCartview
    });
  }

  render() {
    const { visible, isCartview } = this.state;
    if (this.state.loader == true) {
      setTimeout(function () {
        this.setState({ loader: false });
      }.bind(this), 2000);
    }
    return (
      <header id="site-header" className="header header-2">
        {(this.state.loader == false) ?
          <div id="header-wrap" className={`${(visible) ? "fixed-header " : ""}`}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* Navbar */}
                  <Navbar className="navbar-expand-lg">
                    {/* <NavbarToggler onClick={this.toggle} /> */}
                    <Link className="navbar-brand logo" to="/">
                      <img className="img-fluid" src={require(`../../assets/images/logo.png`)} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span />
                      <span />
                      <span />
                    </button>
                    <Collapse isOpen={this.state.isOpen} className="navbar-collapse" navbar>
                      <Nav className="ml-auto mr-auto" navbar>
                        {navLinks.map((navLink, index) => (
                          (navLink.type && navLink.type === 'subMenu') ?
                            <UncontrolledDropdown nav inNavbar key={index}>
                              <DropdownToggle nav caret >
                                {navLink.menu_title}
                              </DropdownToggle>
                              <DropdownMenu id={`submenu_${index}`} >
                                {navLink.child_routes && navLink.child_routes.map((subNavLink, keys) => (
                                  (subNavLink.type && subNavLink.type === 'childsubMenu') ?
                                    <UncontrolledDropdown  inNavbar className="dropdown-submenu" key={keys}>
                                       <DropdownToggle tag="a" caret>
                                        {subNavLink.menu_title}
                                      </DropdownToggle>
                                      <DropdownMenu id={`childsubmenu_${keys}`}>
                                        {subNavLink.child_routes && subNavLink.child_routes.map((ChildsubNavLink, i) =>
                                          <DropdownItem key={i} tag={Link} to={ChildsubNavLink.path} onClick={this.handleClick.bind(this)} >{ChildsubNavLink.menu_title}
                                          </DropdownItem>
                                        )}
                                      </DropdownMenu>
                                    </UncontrolledDropdown>
                                    :
                                    <ul className="list-unstyled">
                                      <li>
                                        <DropdownItem key={keys} tag={Link} to={subNavLink.path}>{subNavLink.menu_title}
                                        </DropdownItem>
                                      </li>
                                    </ul>
                                ))}
                              </DropdownMenu>
                            </UncontrolledDropdown>
                            :
                            <NavItem>
                              <NavLink href={navLink.path} > {navLink.menu_title}</NavLink>
                            </NavItem>
                        ))}
                      </Nav>
                    </Collapse>
                    <div className="right-nav align-items-center d-flex justify-content-end">
                      <div>
                        <div className="cart">
                          <Link to="#" id="header-cart-btn" onClick={() => this.Viewcart()}>
                            <span className="cart-badge">{this.ReadCartItems() == null ? 0 : this.ReadCartItems().length} </span> <i className="flaticon-shopping-bag" />
                          </Link>
                          {/* Cart List Area Start */}
                          {(isCartview == true) ?
                            <>
                              {(this.ReadCartItems() != null && this.ReadCartItems().length > 0) ?
                                <ul className="cart-list" ref={this.setWrapperRef}>
                                  {this.ReadCartItems().map((CartItem, index) => (
                                    <li key={index}>
                                      <Link to="/" className="image">
                                        <img src={require(`../../assets/images/${CartItem.ProductImage}`)} className="img-fluid cart-thumb" alt="" />
                                      </Link>
                                      <div className="cart-item-desc">
                                        <h6><Link to="/">{CartItem.ProductName}</Link></h6>
                                        <p>{CartItem.Qty} x - <span className="price">${CartItem.Rate}</span>
                                        </p>
                                      </div>
                                      <Link onClick={() => this.removeCartItems(index)} id={`Product_${CartItem.ProductID}`} className="remove remove_cart">×</Link>
                                    </li>
                                  ))}
                                  <li className="total d-flex justify-content-between align-items-center"><span>Total:</span>
                                    <h6 className="mb-0"> ${this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)}</h6>
                                  </li>
                                  <li><Link to="/cart" className="btn btn-theme"><span>Cart</span></Link>
                                    <Link to="/checkout" className="btn btn-theme"><span>Checkout</span></Link>
                                  </li>
                                </ul>
                                :
                                <div  className="cart-list"> Cart is empty. </div>
                              }
                            </>
                            : null}
                        </div>
                      </div> <Link className="btn btn-sm btn-theme ml-3" to="#" >Hire Me</Link>
                    </div>
                  </Navbar>
                </div>
              </div>
            </div>
          </div>
          :
          <div id="ht-preloader">
            <div className="clear-loader">
              <div className="loader"></div>
            </div>
          </div>
        }
      </header>
    );
  }
}

export default Header2;