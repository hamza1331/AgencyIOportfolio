import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <div className="primary-footer">
              <div className="container">
                <div className="row mb-10 align-items-center">
                  <div className="col-lg-8 col-md-7">
                    <h2 className="title text-white">Let's Start Work With Agencio Today</h2>
                  </div>
                  <div className="col-lg-4 col-md-5 text-md-right mt-4 mt-md-0">
                    <Link className="btn btn-theme" to="/"><span>Get In Touch <i className="fas fa-plus-square" /></span></Link>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-6">
                    <div className="footer-logo mb-3">
                      <Link to="/"><img className="img-fluid" src={require(`../../assets/images/logo-white.png`)} alt="" /></Link>
                    </div>
                    <p className="mb-0">Agencio - Agency And Portfolio Template Is fully responsible, Build whatever you like with the Agencio, Agencio is the creative, modern React.JS Template suitable for Your business.</p>
                  </div>
                  <div className="col-lg-6 ml-auto col-md-6 mt-5 mt-md-0">
                    <h4 className="mb-4 text-white">Useful Link</h4>
                    <div className="footer-list">
                      <ul className="list-inline">
                        <li><Link to="/">Home</Link>
                        </li>
                        <li><Link to="/about-us">About Us</Link>
                        </li>
                        <li> <Link to="/blog-left-sidebar">Blog</Link>
                        </li>
                        <li> <Link to="/team">Team</Link>
                        </li>
                        <li> <Link to="/faq">Faq</Link>
                        </li>
                        <li> <Link to="/portfolio-masonry">Portfolio</Link>
                        </li>
                        <li> <Link to="/contact-us">Contact Us</Link>
                        </li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li><Link to="/terms-and-conditions">Terms</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="secondary-footer">
              <div className="container">
                <div className="copyright">
                  <div className="row align-items-center">
                    <div className="col-lg-7 order-lg-1 text-lg-right"> <span>Copyright 2020 Agencio Theme by <u><Link to="/">Skytouch Infotech</Link></u> | All Rights Reserved</span>
                    </div>
                    <div className="col-lg-5 mt-3 mt-lg-0">
                      <div className="footer-social">
                        <ul className="list-inline">
                          <li><a href="https://www.facebook.com/" target="_blank" ><i className="fab fa-facebook-f" /></a>
                          </li>
                          <li><a href="https://dribbble.com/" target="_blank" ><i className="fab fa-dribbble" /></a>
                          </li>
                          <li><a href="https://www.skype.com/en/" target="_blank" ><i className="fab fa-skype" /></a>
                          </li>
                          <li><a href="https://in.linkedin.com/" target="_blank" ><i className="fab fa-linkedin-in" /></a>
                          </li>
                          <li><a href="https://www.youtube.com/" target="_blank" ><i className="fab fa-youtube" /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dot-bg">
              <img className="img-fluid" src={require(`../../assets/images/pattern/05.png`)} alt="" />
            </div>
          </footer>
        );
    }
}

export default Footer;