import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogStyle2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-12">
                    <div className="post style-4">
                        <div className="post-image">
                            <img className="img-fluid w-100" src={require(`../../assets/images/blog/large/01.jpg`)} alt="" />
                            <Link className="post-categories" to="/">Agency</Link>
                        </div>
                        <div className="post-desc">
                            <div className="post-title">
                                <h5><Link to="/blog-single">We Develop Digital Strategy</Link></h5>
                            </div>
                            <div className="post-meta">
                                <ul className="list-inline">
                                    <li><Link to="/">Admin</Link>
                                    </li>
                                    <li>February 08, 2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-12 mt-5 mt-md-0">
                    <div className="post style-4">
                        <div className="post-image">
                            <img className="img-fluid w-100" src={require(`../../assets/images/blog/large/02.jpg`)} alt="" />
                            <Link className="post-categories" to="/">Agency</Link>
                        </div>
                        <div className="post-desc">
                            <div className="post-title">
                                <h5><Link to="/blog-single">These guide Designing work</Link></h5>
                            </div>
                            <div className="post-meta">
                                <ul className="list-inline">
                                    <li><Link to="/">Admin</Link>
                                    </li>
                                    <li>February 08, 2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-12 mt-5 mt-md-0">
                    <div className="post style-4">
                        <div className="post-image">
                            <img className="img-fluid w-100" src={require(`../../assets/images/blog/large/03.jpg`)} alt="" />
                            <Link className="post-categories" to="/">Agency</Link>
                        </div>
                        <div className="post-desc">
                            <div className="post-title">
                                <h5><Link to="/blog-single">We're Nominated To Agency</Link></h5>
                            </div>
                            <div className="post-meta">
                                <ul className="list-inline">
                                    <li><Link to="/">Admin</Link>
                                    </li>
                                    <li>February 08, 2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default BlogStyle2;
