import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import { ToastContainer, toast } from 'react-toastify';

class Gridview extends Component {
    constructor(props) {
        super(props);
        this.state={
          photoIndex:0,
          isOpen: false,
        }

    }
    Productaddcart(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("CartProduct"));
        if (Cart == null)
            Cart = new Array();
        let Productadd = Cart.find(product => product.ProductID === ProductID);
        if (Productadd == null) {
            Cart.push({ ProductID: ProductID, ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
            localStorage.removeItem("CartProduct");
            localStorage.setItem("CartProduct", JSON.stringify(Cart));
            var flag=0;
            if(flag == 0)
            {
                toast.success("Item Added to Cart");
                flag=1;
            }
        }
        else {
            toast.warning("Item is already in Cart");
        }
    }
    Productaddwishlist(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("WishlistProduct"));
        if (Cart == null)
            Cart = new Array();

        let Productadd = Cart.find(product => product.ProductID === ProductID);
        if (Productadd == null) {

            Cart.push({ ProductID: ProductID, ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
            localStorage.removeItem("WishlistProduct");
            localStorage.setItem("WishlistProduct", JSON.stringify(Cart));

            toast.success("Item Added to WishList");
        }
        else {
            toast.warning("Item is already in WishList");
        }


    }
    CartItems(ID) {
        let checkcart = false;
        var Cart = JSON.parse(localStorage.getItem("CartProduct"));
        if (Cart && Cart.length > 0) {
            for (const cartItem of Cart) {
                if (cartItem.ProductID === ID) {
                    checkcart = true
                }
            }
        }
        return checkcart;
    }
    WishlistItems(ID) {
        let wishlist = false;
        var Wish = JSON.parse(localStorage.getItem("WishlistProduct"));

        if (Wish && Wish.length > 0) {
            for (const wishItem of Wish) {
                if (wishItem.ProductID === ID) {
                    wishlist = true
                }
            }
        }
        return wishlist;
    }
    render() {
        const { photoIndex, isOpen  } = this.state;
        const { productdata } = this.props;
        const images=[];
        {productdata.pictures.map((pic)=>
            images.push(require(`../../assets/images/${pic}`))
        )}
        return (
              <div className="col-lg-4 col-md-6 mt-5">
                  
                <ToastContainer autoClose={1000} />
              <div className="product-item">
                <div className="product-img">
                <Link to={`/product-single/${productdata.category}/${productdata.id}`}>
                        <img className="img-fluid" src={require(`../../assets/images/${productdata.pictures[0]}`)} alt="" />
  
                    </Link>
                  <div className="sale-label">New</div>
                  <div className="product-overlay">
                    <ul className="list-inline">
                      <li>
                        {!this.WishlistItems(productdata.id) ?
                                <Link to="#" onClick={() => this.Productaddwishlist(productdata.id, productdata.name, productdata.pictures[0], 1, productdata.salePrice, "In Stock")}><i className="far fa-heart" /></Link>
                                :
                                <Link to="#" className="wishlist-btn"><i className="fas fa-heart" /></Link>
                            }
                      </li>
                      <li> 
                      {!this.CartItems(productdata.id) ?
                            <Link to="#" onClick={() => this.Productaddcart(productdata.id, productdata.name, productdata.pictures[0], 1, productdata.salePrice, "In Stock")} >Add To Cart <i className="fas fa-shopping-bag ml-1" /></Link>
                            :
                            <Link to="/cart" className="add-cart" rel="nofollow">View Cart <i className="fas fa-shopping-bag" /></Link>
                        }
                        
                      </li>
                      <li>
                        <div onClick={() => this.setState({ isOpen: true })}> <Link to="#"><i className="far fa-eye" /></Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-desc"> <Link to="/product-single" className="product-name">{productdata.name}</Link>
                <div className="product-price">${productdata.price}<span> ${productdata.salePrice}</span></div>
              </div>
              </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        enableZoom={false}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                        }
                    />
                )}
            </div>
        );
    }
}

export default Gridview;