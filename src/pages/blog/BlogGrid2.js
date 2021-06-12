import React, { Component } from 'react';
import Pageheading from '../../widgets/Pageheading';
import { Link } from 'react-router-dom';

class BlogGrid2 extends Component {
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
        <Pageheading foldername={"Blog"} title={"Blog Grid 2"} />
        {/*page title end*/}
        {/*body content start*/}
        <div id="main-page" className="page-content">
          {/*blog start*/}
          <section>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
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
                      <p>Agencio discovering the source behind the filler In seeing a sample</p><Link to="/blog-single"><i className="fas fa-long-arrow-alt-right mr-2" /> Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="post">
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
                      <p>Agencio discovering the source behind the filler In seeing a sample</p><Link to="/blog-single"><i className="fas fa-long-arrow-alt-right mr-2" /> Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-6">
                  <div className="post">
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
                      <p>Agencio discovering the source behind the filler In seeing a sample</p><Link to="/blog-single"><i className="fas fa-long-arrow-alt-right mr-2" /> Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
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
                      <p>Agencio discovering the source behind the filler In seeing a sample</p><Link to="/blog-single"><i className="fas fa-long-arrow-alt-right mr-2" /> Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 text-center">
                <div className="col-sm-12">
                  <nav aria-label="Page navigation">
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

export default BlogGrid2;