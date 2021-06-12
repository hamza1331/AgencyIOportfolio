import React, { Component } from 'react';
import Commingsoon from '../../widgets/counter/Commingsoon';

class CommingSoon extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    render() {
        return (
            <div id="main-page" className="page-content">
            {/*coming soon start*/}
            <section className="p-0">
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
              <div class="align-center">
              <div className="container-fluid px-lg-5">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-5 col-md-12">
                    <img className="img-fluid"  src={require(`../../assets/images/coming-soon.png`)} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                    <h1 className="mb-2">Coming Soon</h1> 
                    <p>We Are Creatinig Something Awesome And Exciting For You</p>
                    <div className="coming-soon w-100">
                    <Commingsoon className="countdown list-inline d-flex align-items-center"  time={'100150'} />
                   
                      <div>
                        <h4 className="title z-index-1 mb-4">Subscribe to get notified!</h4>
                        <div className="subscribe-form w-50">
                          <form id="mc-form" className="group">
                            <input type="email" defaultValue name="EMAIL" className="email" id="mc-email" placeholder="Enter Email Address" required />
                            <input className="btn" type="submit" name="subscribe" defaultValue="Subscribe" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </section>
            {/*coming soon end*/}
          </div>
        );
    }
}

export default CommingSoon;