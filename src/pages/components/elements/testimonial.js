import React, { Component } from 'react';
import Testimonial2 from '../../../widgets/testimonial/Testimonial2';
import Testimonial1 from '../../../widgets/testimonial/Testimonial1';
import Testimonial3 from '../../../widgets/testimonial/Testimonial3';
import Testimonial4 from '../../../widgets/testimonial/Testimonial4';
import Pageheading from '../../../widgets/Pageheading';

class Testimonial extends Component {
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
          <Pageheading foldername={"Element"} title={"Testimonials"} />
          {/*page title end*/}
          {/*body content start*/}
          <div id="main-page" className="page-content">
            {/*testimonial style1 start*/}
            <section className="slider-sec">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <Testimonial2 logoitems={1}/>
                   </div>
                </div>
              </div>
            </section>
            {/*testimonial style1 end*/}
            {/*testimonial style2 start*/}
            <section className="pb-0 pos-r"  style={{ backgroundImage: 'url(' + require(`../../../assets/images/bg/06.png`) + ')' }}   >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <Testimonial1 logoitems={2}/>
                   </div>
                </div>
              </div>
            </section>
            {/*testimonial style2 end*/}
            {/*testimonial style3 start*/}
            <section>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <Testimonial3 logoitems={1} />
                   </div>
                </div>
              </div>
            </section>
            {/*testimonial style3 end*/}
            {/*testimonial style4 start*/}
            <section>
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-12">
                    <div className="box-shadow p-3 p-md-5 pos-r">
                      <div className="img-bg">
                        <svg className="morph-shape" viewBox="0 0 500 500">
                          <defs>
                            <linearGradient id="main-gradien2" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="10%" style={{stopColor: '#0083ff'}} />
                              <stop offset="100%" style={{stopColor: '#00f2aa'}} />
                            </linearGradient>
                          </defs>
                          <path id="object2" className="js-items-shape-path" fill="url(#main-gradien2)" d="M418.1 159.8 C460.9 222.9 497 321.5 452.4 383.4 417.2 432.4 371.2 405.6 271.3 420.3 137.19 440 90.45 500.6 42.16 442.8 -9.57 381 86.33 289.1 117.7 215.5 144.3 153.4 145.69 54.21 212.7 36.25 290.3 15.36 373.9 94.6 418.1 159.8 " data-original="M 418.1,159.8 C 460.9,222.9 497,321.5 452.4,383.4 417.2,432.4 371.2,405.6 271.3,420.3 137.2,440 90.45,500.6 42.16,442.8 -9.572,381 86.33,289.1 117.7,215.5 144.3,153.4 145.7,54.21 212.7,36.25 290.3,15.36 373.9,94.6 418.1,159.8 Z" />
                        </svg>
                      </div>
                      <Testimonial4 logoitems={1}/>
                     </div>
                  </div>
                </div>
              </div>
            </section>
            {/*testimonial style4 end*/}
          </div>
          {/*body content end*/}
        </div>
          );
    }
}

export default Testimonial;