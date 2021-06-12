import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pageheading from '../../widgets/Pageheading';

class BlogRight extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    render() {
        return (
          <div>
          {/*page title start*/}
          <Pageheading foldername={"Blog"} title={"Blog Right Sidebar"} />
          {/*page title end*/}
          {/*body content start*/}
          <div id="main-page" className="page-content">
            {/*blog start*/}
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <div className="post">
                      <div className="post-image">
                        <img className="img-fluid w-100" src={require(`../../assets/images/blog/large/01.jpg`)} alt="" />
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
                        </div>
                        <p>Agencio discovering the source behind the filler In seeing a sample</p> <Link to="/blog-single"><i className="fas fa-long-arrow-alt-right mr-2" /> Read More</Link>
                      </div>
                    </div>
                    <div className="post mt-5">
                      <div className="post-image">
                        <img className="img-fluid w-100" src={require(`../../assets/images/blog/large/02.jpg`)} alt="" />
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
                        </div>
                        <p>Agencio discovering the source behind the filler In seeing a sample</p> <Link to="/blog-single"><i className="fas fa-long-arrow-alt-right mr-2" /> Read More</Link>
                      </div>
                    </div>
                    <div className="post mt-5">
                      <div className="post-image">
                        <img className="img-fluid w-100" src={require(`../../assets/images/blog/large/03.jpg`)} alt="" />
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
                        </div>
                        <p>Agencio discovering the source behind the filler In seeing a sample</p> <Link to="/blog-single"><i className="fas fa-long-arrow-alt-right mr-2" /> Read More</Link>
                      </div>
                    </div>
                    <nav aria-label="Page navigation" className="mt-5">
                      <ul className="pagination">
                        <li className="page-item"><Link className="page-link" to="/"><i className="fas fa-arrow-left" /></Link>
                        </li>
                        <li className="page-item active"><Link className="page-link" to="/">1</Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="/">2</Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="/">3</Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="/"><i className="fas fa-arrow-right" /></Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-lg-4 col-md-12 sidebar md-mt-5">
                    <div className="widget">
                      <div className="widget-search">
                        <form className="form-inline form">
                          <div className="widget-searchbox">
                            <button type="submit" className="search-btn"> <i className="fas fa-search" />
                            </button>
                            <input type="text" placeholder="Search Here..." className="form-control" />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="widget">
                      <h4 className="widget-title">Categories</h4>
                      <ul className="widget-categories list-unstyled">
                        <li> <Link to="/">Design</Link>  <small>(8)</small>
                        </li>
                        <li> <Link to="/">Travel News</Link>  <small>(5)</small>
                        </li>
                        <li> <Link to="/">Creative Strategies</Link>  <small>(7)</small>
                        </li>
                        <li> <Link to="/">Modern Technology</Link>  <small>(3)</small>
                        </li>
                        <li> <Link to="/">Product</Link>  <small>(4)</small>
                        </li>
                        <li> <Link to="/">Web Hosting </Link>  <small>(6)</small>
                        </li>           
                        <li> <Link to="/">Portfolio</Link>  <small>(9)</small>
                        </li>
                      </ul>
                    </div>
                    <div className="widget">
                      <h4 className="widget-title">Latest News</h4>
                      <div className="recent-post">
                        <ul className="list-unstyled">
                          <li>
                            <div className="recent-post-desc">
                              <Link to="/blog-single">We Develop Digital Strategy</Link> 
                            </div>
                          </li>
                          <li>
                            <div className="recent-post-desc">
                              <Link to="/blog-single">These guide Designing work</Link> 
                            </div>
                          </li>
                          <li>
                            <div className="recent-post-desc">
                              <Link to="/blog-single">We're Nominated To Agency</Link> 
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget">
                      <h4 className="widget-title">Tag Clouds</h4>
                      <ul className="widget-tags list-inline">
                        <li> <Link to="/">Agency</Link>
                        </li>
                        <li> <Link to="/">Portfolio</Link>
                        </li>
                        <li> <Link to="/">Creative</Link>
                        </li>
                        <li> <Link to="/">HTML5</Link>
                        </li>
                        <li> <Link to="/">Modern</Link>
                        </li>
                        <li> <Link to="/">Design</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="widget">
                      <h4 className="widget-title">Archives</h4>
                      <ul className="widget-categories list-unstyled">
                        <li> <Link to="/">September 2019</Link>
                        </li>
                        <li> <Link to="/">October 2019</Link>
                        </li>
                        <li> <Link to="/">November 2019</Link>
                        </li>
                      </ul>
                    </div>  
                  </div>
                </div>
              </div>
            </section>
            {/*blog end*/}
          </div>
          {/*body content end*/}
        </div>
          );
    }
}

export default BlogRight;