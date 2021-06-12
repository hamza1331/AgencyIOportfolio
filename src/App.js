import React, { Component, Fragment } from 'react';
import { HashRouter, Switch, Route ,withRouter} from 'react-router-dom';
import Header1 from './layout/header/header1';
import Footer from './layout/footer/footer1';

import $ from 'jquery';

import './App.css';
import './Vendor.js';

// Home Pages
import Index from './pages/Index/index1';
import Index2 from './pages/Index/index2';
import Index3 from './pages/Index/index3';
import Index4 from './pages/Index/index4';
import Index5 from './pages/Index/index5';

// Shop Pages
import ProductList from './pages/shop/productlist';
import ProductGrid from './pages/shop/productgrid';
import ProductSingle from './pages/shop/productlistsingle';
import Cart from './pages/shop/cart';
import Checkout from './pages/shop/checkout';
import OrderComplate from './pages/shop/ordercomplate';
import About1 from './pages/components/aboutus/about1';
import About2 from './pages/components/aboutus/about2';
import Team2 from './pages/components/team/team2';
import Team1 from './pages/components/team/team1';
import CaseStudie from './pages/components/casestudie/casestudie';
import CaseStudieSingle from './pages/components/casestudie/casestudie-single';
import Accordion from './pages/components/elements/accordion';
import BlogPost from './pages/components/elements/blogpost';
import Counter from './pages/components/elements/counter';
import FeatureBox from './pages/components/elements/featurebox';
import Team from './pages/components/elements/team';
import Testimonial from './pages/components/elements/testimonial';
import PageNotFound from './pages/components/404';
import CommingSoon from './pages/components/commingsoon';
import Faq from './pages/components/faq';
import Price from './pages/components/price';
import PortfolioMasonry from './pages/portfolio/PortfolioMasonry';
import PortfolioFullwidth from './pages/portfolio/PortfolioFullwidth';
import PortfolioSingle from './pages/portfolio/PortfolioSingle';
import BlogGrid2 from './pages/blog/BlogGrid2';
import BlogGrid3 from './pages/blog/BlogGrid3';
import BlogLeft from './pages/blog/BlogLeft';
import BlogRight from './pages/blog/BlogRight';
import BlogSingle from './pages/blog/BlogSingle';
import Contact1 from './pages/contactus/Contact1';
import Contact2 from './pages/contactus/Contact2';
import Scrolltop from './layout/back-to-top';

import  {getProducts} from './actions';
import { connect } from 'react-redux';
import PrivacyPolicy from './pages/common/privacy-policy';
import TermsConditions from './pages/common/terms-and-conditions';
import Header2 from './layout/header/header2';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount()
  {
    this.props.getProducts();
  }
  getUrl(pathname) {
    let pathArray = pathname.split('/');
    return `/${pathArray[1]}` === '/comming-soon' ? true : `/${pathArray[1]}` === '/page-not-found' ? true : false;
  }
  setHeader(pathname) {
    let pathArray = pathname.split('/');
    return `/${pathArray[1]}` === '/index2' ? true :  false;
  }
  render() {
    const { location } = this.props;
    return (
      <Fragment>
         {
             this.getUrl(location.pathname) ?
                <Switch>
                    <Route path="/comming-soon" component={CommingSoon} />
                    <Route path="/page-not-found" component={PageNotFound} />
                </Switch>
              :
        <div className="page-wrapper">
          {this.setHeader(location.pathname) ? <Header2 /> :   <Header1 />} 
        
          <Switch>

            {/* Index Pages */}
            <Route exact path="/" component={Index} />
            <Route exact path="/index2" component={Index2} />
            <Route exact path="/index3" component={Index3} />
            <Route exact path="/index4" component={Index4} />
            <Route exact path="/index5" component={Index5} />

            {/* Shop Pages */}
            <Route path="/product-list" component={ProductList} />
            <Route path="/product-grid" component={ProductGrid} />
            <Route path={`/product-single/:category/:id`} component={ProductSingle} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/order-complate" component={OrderComplate} /> 

            {/* Component Pages */}
            <Route path="/about-us" component={About1} />
            <Route path="/about-us2" component={About2} />
            
            {/* Teams Pages */}
            <Route path="/team" component={Team1} />
            <Route path="/team2" component={Team2} />
            
            {/* Case Studie Pages */}
            <Route path="/case-studie" component={CaseStudie} />
            <Route path="/case-studie-single" component={CaseStudieSingle} />
            
            {/* Feature Pages */}
            <Route path="/accordion" component={Accordion} />
            <Route path="/blog-post" component={BlogPost} />
            <Route path="/counter" component={Counter} />
            <Route path="/feature-box" component={FeatureBox} />
            <Route path="/team-list" component={Team} />
            <Route path="/testimonial" component={Testimonial} />
          
            {/* Utilitie Pages */}
            <Route path="/faq" component={Faq} />
            <Route path="/price" component={Price} />
            
            {/* Portfolio Pages */}
            <Route path="/portfolio-masonry" component={PortfolioMasonry} />
            <Route path="/portfolio-fullwidth" component={PortfolioFullwidth} />
            <Route path="/portfolio-single" component={PortfolioSingle} />

            {/* Blog Pages */}
            <Route path="/blog-grid-2" component={BlogGrid2} />
            <Route path="/blog-grid-3" component={BlogGrid3} />
            <Route path="/blog-left-sidebar" component={BlogLeft} />
            <Route path="/blog-right-sidebar" component={BlogRight} /> 
            <Route path="/blog-single" component={BlogSingle} /> 

            {/* Contact Pages */}
            <Route path="/contact-us" component={Contact1} />
            <Route path="/contact-us2" component={Contact2} />

            {/* Contact Pages */}
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-and-conditions" component={TermsConditions} />    
          </Switch>
          <Footer />
          <Scrolltop /> 
        </div>
         }
      </Fragment>
    );
  }
}

const AppMapStateToProps = state => {
  return {
    products: state.data.products
  };
};

const AppMapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    }
  };
};


export default connect(AppMapStateToProps,AppMapDispatchToProps)(withRouter(App))

