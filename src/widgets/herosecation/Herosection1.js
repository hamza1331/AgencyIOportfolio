import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Herosection1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <section className="banner pos-r fullscreen-banner dark-bg p-0" style={{ backgroundImage: 'url(' + require(`../../assets/images/pattern/02.png`) + ')' }}   >
            <div className="hero-animation"> <span />
              <span />
              <span />
              <span />
            </div>
            <div className="hero-text"> <span>A</span>
              <span>G</span>
              <span>E</span>
              <span>N</span>
              <span>C</span>
              <span>I</span>
              <span>O</span>
            </div>
            <div className="align-center pt-0 b-pl">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="bnr-title large">A.</div>
                  </div>
                  <div className="col-lg-7">
                    <div className="bnr-title text-lg-left letter-space-1">Creative Agency</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-left h-100 d-flex align-items-center justify-content-center">
              <div className="hero-social text-center">
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" > <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://dribbble.com/" target="_blank" > <i className="fab fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.skype.com/en/" target="_blank" > <i className="fab fa-skype" />
                    </a>
                  </li>
                  <li>
                    <a href="https://in.linkedin.com/" target="_blank" > <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div> <Link to="#main-page" className="scroll-down-arrow" />
            </div>
          </section>
        );
    }
}

export default Herosection1;