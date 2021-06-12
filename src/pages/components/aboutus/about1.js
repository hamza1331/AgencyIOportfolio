import React, { Component } from 'react';
import FeatureBox1 from '../../../widgets/featurebox/FeatureBox1';
import AboutBox from '../../../widgets/about/AboutBox';
import TeamSection1 from '../../../widgets/team/TeamSection1';
import ParticlesBg from '../../../widgets/PraticlesBg';
import Clientbox1 from '../../../widgets/client/Clientbox1';
import BlogStyle1 from '../../../widgets/Blog/BlogStyle1';
import Testimonial4 from '../../../widgets/testimonial/Testimonial4';
import Pageheading from '../../../widgets/Pageheading';

class About1 extends Component {
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
        <Pageheading foldername={"Pages"} title={"About Us"} />
        {/*page title end*/}
        {/*body content start*/}
        <div id="main-page" className="page-content">
          {/*feature start*/}
          <section className="pos-r">
            <ParticlesBg />
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
          {/*about start*/}
          <section className="py-3">
            <div className="container-fluid">
              <AboutBox />
            </div>
          </section>
          {/*about end*/}
          {/*team start*/}
          <section className="pb-0">
            <div className="container">
              <TeamSection1 />
            </div>
          </section>
          {/*team end*/}
          <section>
            <div className="container-fluid pr-lg-0">
              <div className="row align-items-center">
                <div className="col-lg-5 col-12 ml-auto">
                  <div className="section-title">
                    <div className="section-title">
                      <h2 className="titl">We’re Partnering With <span>Your Favorite Brand</span></h2>
                      <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                    </div>
                  </div>
                  <Clientbox1 />
                </div>
                <div className="col-lg-6 col-12">
                  <div className="box-shadow p-5 pos-r">
                    <div className="img-bg">
                      <svg className="morph-shape" viewBox="0 0 500 500">
                        <defs>
                          <linearGradient id="main-gradien" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="10%" style={{ stopColor: '#0083ff' }} />
                            <stop offset="100%" style={{ stopColor: '#00f2aa' }} />
                          </linearGradient>
                        </defs>
                        <path id="object" className="js-items-shape-path" fill="url(#main-gradien)" d="M418.1 159.8 C460.9 222.9 497 321.5 452.4 383.4 417.2 432.4 371.2 405.6 271.3 420.3 137.19 440 90.45 500.6 42.16 442.8 -9.57 381 86.33 289.1 117.7 215.5 144.3 153.4 145.69 54.21 212.7 36.25 290.3 15.36 373.9 94.6 418.1 159.8 " data-original="M 418.1,159.8 C 460.9,222.9 497,321.5 452.4,383.4 417.2,432.4 371.2,405.6 271.3,420.3 137.2,440 90.45,500.6 42.16,442.8 -9.572,381 86.33,289.1 117.7,215.5 144.3,153.4 145.7,54.21 212.7,36.25 290.3,15.36 373.9,94.6 418.1,159.8 Z" />
                      </svg>
                    </div>
                    <Testimonial4 logoitems={1} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*blog start*/}
          <section className="pt-lg-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h6>Blog</h6>
                    <h2 className="title">Read Our <span>Latest News</span></h2>
                    <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                  </div>
                </div>
              </div>
              <BlogStyle1 />
            </div>
          </section>
          {/*blog end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default About1;