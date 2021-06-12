import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ImageGallery from 'react-image-gallery';
class SingleProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductClick: this.props.ProductClick,
            qty:1,
        }
    }
    AddToCart(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("CartProduct"));
        if (Cart == null)
            Cart = new Array();
        let selectedProduct = Cart.find(product => product.ProductID === ProductID);
        if (selectedProduct == null) {
            Cart.push({ ProductID: ProductID, ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
            localStorage.removeItem("CartProduct");
            localStorage.setItem("CartProduct", JSON.stringify(Cart));
            var flag = 0;
            if (flag == 0) {
                toast.success("Item Added to Cart");
                flag = 1;
            }
        }
        else {
            toast.warning("Item is already in Cart");
        }
    }
    AddToWishList(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("WishlistProduct"));
        if (Cart == null)
            Cart = new Array();

        let selectedProduct = Cart.find(product => product.ProductID === ProductID);
        if (selectedProduct == null) {

            Cart.push({ ProductID: ProductID, ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
            localStorage.removeItem("WishlistProduct");
            localStorage.setItem("WishlistProduct", JSON.stringify(Cart));

            toast.success("Item Added to WishList");
        }
        else {
            toast.warning("Item is already in WishList");
        }


    }
    CheckCardItem(ID) {
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
    CheckWishList(ID) {
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
    
    AddQty(){
        this.setState({
            qty:this.state.qty+1
        })
    }

    RemoveQty(){
        if(this.state.qty > 1)
        {
            this.setState({
                qty:this.state.qty-1
            })
        }
    }
    render() {
        const { ProductClick,qty } = this.state;
        const imageGalleryView = [];
        if (ProductClick !== null) {
            ProductClick.pictures.map((image, index) => {
                imageGalleryView.push({
                    original: require(`../../assets/images/` + image),
                    thumbnail: require(`../../assets/images/` + image),
                })
            });
        }
        let rat = [];
        if (ProductClick !== null) {
            let rating = ProductClick.rating;
            let i = 1;
            while (i <= 5) {
                if (i <= rating) {
                    rat.push(<i className="ti-star" style={{ color: 'gold' }} ></i>)
                }
                else {
                    rat.push(<i className="ti-star" style={{ color: 'burlywood' }} ></i>)
                }
                i += 1;
            };
        }
        return (
            <div className="row">
                 <ToastContainer autoClose={1000} />
                {(ProductClick !== null) ?
                    <>
                        <div className="col-lg-6 col-md-6 sm-mt-5">
                            <ImageGallery items={imageGalleryView} showPlayButton={false} />
                        </div>
                        <div className="col-lg-6 col-md-6 mt-5 mt-lg-0">
                            <div className="product-details">
                                <h4>
                                    {ProductClick.name}
                                </h4>
                                <div className="product-price my-4">${ProductClick.salePrice} <span> ${ProductClick.price}</span>
                                    <span className="text-primary">
                                        {rat}
                                    </span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2"><span className="text-black"> Availibility: </span> In Stock</li>
                                    <li><span className="text-black"> Categories :</span> {ProductClick.category}</li>
                                </ul>
                                <p className="mb-4">{ProductClick.description}</p>
                                <div className="filter-color">
                                    <ul className="list-inline">
                                        {ProductClick.colors.map((color, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className="form-check pl-0">
                                                        <input type="checkbox" className="form-check-input" id={`color-filter1${index}`} name="ExampleRadios" />
                                                        <label className="form-check-label" htmlFor={`color-filter1${index}`} style={{ background: color }} />
                                                    </div>
                                                </li>
                                            )
                                        }
                                        )}
                                    </ul>
                                </div>
                                <div className="my-4">
                                    <span className="mb-3 text-black d-block">Select Size</span>
                                    <div className="size-choose">
                                        <ul className="list-inline">
                                            {ProductClick.size.map((sizes, index) => {
                                                return (
                                                    <li key={index}>
                                                        <input name="sc" id={`${sizes}-size`} type="checkbox" />
                                                        <label htmlFor={`${sizes}-size`}>{sizes}</label>
                                                    </li>
                                                )
                                            }
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <span className="mb-3 text-black d-block">Quantity</span>
                                    <button className="btn-product btn-product-up" onClick={() => this.RemoveQty()}> <i className="fas fa-minus" />
                                    </button>
                                    <input className="form-product" type="number" name="form-product" value={qty} />
                                    <button className="btn-product btn-product-down" onClick={() => this.AddQty()}> <i className="fas fa-plus" />
                                    </button>
                                </div>
                                <div className="d-sm-flex align-items-center mt-5">
                                    {!this.CheckCardItem(ProductClick.id) ?
                                        <Link to="#" onClick={() => this.AddToCart(ProductClick.id, ProductClick.name, ProductClick.pictures[0], qty, ProductClick.salePrice, "In Stock")} className="mr-4 add-cart " rel="nofollow">
                                            <button className="btn btn-theme"><span>Add To Cart <i className="fas fa-shopping-bag ml-1" /></span></button>
                                        </Link>
                                        :
                                        <Link to="/cart" className="mr-4 add-cart" rel="nofollow"><button className="btn btn-theme"><span>View Cart <i className="fas fa-shopping-bag ml-1" /></span></button></Link>
                                    }

                                    {!this.CheckWishList(ProductClick.id) ?
                                        <Link to="#" onClick={() => this.AddToWishList(ProductClick.id, ProductClick.name, ProductClick.pictures[0], qty, ProductClick.salePrice, "In Stock")} className="wishlist-btn" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top">
                                            <button className="btn btn-theme"><span>Add To WishList <i className="far fa-heart ml-1" /></span></button>
                                        </Link>
                                        :
                                        <Link to="#" className="wishlist-btn"><button className="btn btn-theme"><span>View WishList <i className="far fa-heart ml-1" /></span></button></Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                    : null}
            </div>

        );
    }
}

export default SingleProductView;