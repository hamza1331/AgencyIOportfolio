import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogStyle4 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
            <div className="col-md-4">
              <div className="post style-3">
                <div className="post-image">
                  <img className="img-fluid w-100" src={require(`../../assets/images/blog/04.jpg`)} alt="" />
                </div>
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
                  </div><Link to="/blog-single"><i className="fas fa-long-arrow-alt-right mr-2" /> Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 mt-md-0">
              <div className="post style-3">
                <div className="post-image">
                  <img className="img-fluid w-100" src={require(`../../assets/images/blog/05.jpg`)} alt="" />
                </div>
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
                  </div><Link to="/blog-single"><i className="fas fa-long-arrow-alt-right mr-2" /> Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 mt-md-0">
              <div className="post style-3">
                <div className="post-image">
                  <img className="img-fluid w-100" src={require(`../../assets/images/blog/06.jpg`)} alt="" />
                </div>
                <div className="post-desc">
                  <div className="post-meta">
                    <ul className="list-inline">
                      <li><Link to="/">Admin</Link>
                      </li>
                      <li>February 08, 2020</li>
                    </ul>
                  </div>
                  <div className="post-title">
                    <h5>We're Nominated To Agency</h5>
                  </div><Link to="/blog-single"><i className="fas fa-long-arrow-alt-right mr-2" /> Read More</Link>
                </div>
              </div>
            </div>
          </div>
       

        );
    }
}

export default BlogStyle4;
