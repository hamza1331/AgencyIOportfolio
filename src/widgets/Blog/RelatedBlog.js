import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
window.fn = OwlCarousel;
class RelatedBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                0: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                1000: {
                  items: 2,
                },
            },
        };
    }
    render() {
        return (
             <OwlCarousel
                    className="no-pb"
                    dotData={false}
                    items={this.props.logoitems}
                    autoplay={true}
                    responsive={this.state.options}
                        >
                <div className="item">
                    <div className="row no-gutters post style-2">
                        <div className="col-sm-6">
                            <div className="post-image h-100" style={{ backgroundImage: 'url(' + require(`../../assets/images/blog/01.jpg`) + ')' }} />
                        </div>
                        <div className="col-sm-6">
                            <div className="post-desc">
                                <div className="post-meta">
                                    <ul className="list-inline">
                                        <li><Link to="/">Admin</Link>
                                        </li>
                                        <li>February 08, 2020</li>
                                    </ul>
                                </div>
                                <div className="post-title">
                                    <h5>We Develop Digital Strategy</h5>
                                </div> <Link to="/blog-single"><i className="fas fa-long-arrow-alt-right mr-2" /> Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row no-gutters post style-2">
                        <div className="col-sm-6">
                            <div className="post-image h-100"  style={{ backgroundImage: 'url(' + require(`../../assets/images/blog/02.jpg`) + ')' }}  />
                        </div>
                        <div className="col-sm-6">
                            <div className="post-desc">
                                <div className="post-meta">
                                    <ul className="list-inline">
                                        <li><Link to="/">Admin</Link>
                                        </li>
                                        <li>February 08, 2020</li>
                                    </ul>
                                </div>
                                <div className="post-title">
                                    <h5>These guide Designing work</h5>
                                </div> <Link to="/blog-single"><i className="fas fa-long-arrow-alt-right mr-2" /> Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row no-gutters post style-2">
                        <div className="col-sm-6">
                            <div className="post-image h-100"  style={{ backgroundImage: 'url(' + require(`../../assets/images/blog/03.jpg`) + ')' }}   />
                        </div>
                        <div className="col-sm-6">
                            <div className="post-desc">
                                <div className="post-meta">
                                    <ul className="list-inline">
                                        <li><Link to="/">Admin</Link>
                                        </li>
                                        <li>February 08, 2020</li>
                                    </ul>
                                </div>
                                <div className="post-title">
                                    <h5>We Nominated To Agency</h5>
                                </div> <Link to="/blog-single"><i className="fas fa-long-arrow-alt-right mr-2" /> Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </OwlCarousel>
        );
    }
}

export default RelatedBlog;
