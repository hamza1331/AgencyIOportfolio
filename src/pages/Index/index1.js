import React, { Component } from 'react';
import Herosection1 from '../../widgets/herosecation/Herosection1';
import FeatureBox2 from '../../widgets/featurebox/FeatureBox2';
import AboutBox from '../../widgets/about/AboutBox';
import CasestudieSlider2 from '../../widgets/casestudies/CasestudieSlider2';
import TeamSection1 from '../../widgets/team/TeamSection1';
import FeatureBox1 from '../../widgets/featurebox/FeatureBox1';
import Testimonial2 from '../../widgets/testimonial/Testimonial2';
import BlogStyle3 from '../../widgets/Blog/BlogStyle3';

class Index extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <Herosection1 />
        {/*hero section end*/}
        {/*body content start*/}
        <div id="main-page" className="page-content">
          {/*service start*/}
          <section className="pos-r">
            <div className="bg-effect">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 288 288">
                <path fill="#e1fdf5" d>
                  <animate repeatCount="indefinite" attributeName="d" dur="5s" values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                        c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                        c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                        c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;  
                        M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
                        c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
                        c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
                        C48.9,198.6,57.8,191,51,171.3z;  
                        M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                        c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                        c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                        c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z  " />
                </path>
              </svg>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 z-index-1">
                  <FeatureBox2 />
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0">
                  <div className="section-title">
                    <h6>What We Do</h6>
                    <h2 className="title">Agencio Make <span>Perfect Design</span></h2>
                    <p className="text-black mb-0">Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur Agencio discovering the source behind the ubiquitous filler text</p>
                  </div>
                  <ul className="list-unstyled list-icon">
                    <li className="mb-4"><i className="fas fa-check" /> Creative Agency</li>
                    <li className="mb-4"><i className="fas fa-check" /> Fully Responsive</li>
                    <li className="mb-4 mb-sm-0"><i className="fas fa-check" /> Portfolio Option</li>
                    <li><i className="fas fa-check" /> Built With Animation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*service end*/}
          {/*case study start*/}
          <section className="py-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h6>Our Work</h6>
                    <h2 className="title mb-0">Explore some of our <span>latest Case Study.</span></h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="cases-slider pos-r">
                    <div className="row">
                      <div className="col-11">
                        <CasestudieSlider2 logoitems={1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*case study end*/}
          {/*about start*/}
          <section className="pos-r">
            <div className="container-fluid">
              <AboutBox />
            </div>
          </section>
          {/*about end*/}
          {/*team start*/}
          <section className="py-3 pos-r">
            <div className="dot-bg">
              <img className="img-fluid" src={require(`../../assets/images/pattern/04.png`)} alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h6>Expert Team</h6>
                    <h2 className="title mb-0">Meet Our Expert will ready <span>for your service</span></h2>
                  </div>
                </div>
              </div>
              <TeamSection1 />
            </div>
          </section>
          {/*team end*/}
          {/*testimonial start*/}
          <section className="pb-3">
            <div className="container">
              <Testimonial2 logoitems={1} />
            </div>
          </section>
          {/*testimonial end*/}
          {/*feature start*/}
          <section className="pos-r">
            <div id="particles-js" />
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-12">
                  <div className="section-title">
                    <h6>Why Choose Us</h6>
                    <h2 className="title mb-0">We’re a full-service <span>design agency</span></h2>
                  </div>
                </div>
              </div>
              <FeatureBox1 />
            </div>
          </section>
          {/*feature end*/}
          {/*blog start*/}
          <section className="grey-bg parallaxie" style={{ backgroundImage: 'url(' + require(`../../assets/images/pattern/03.png`) + ')' }}   >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h6>Blog</h6>
                    <h2 className="title">Read Our <span>Latest News</span></h2>
                    <p className="text-black">Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid pr-lg-0">
              <BlogStyle3 logoitems={2} />
            </div>
          </section>
          {/*blog end*/}
        </div>
      </div>
    );
  }
}

export default Index;