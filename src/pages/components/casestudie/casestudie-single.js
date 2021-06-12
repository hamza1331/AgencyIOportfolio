import React, { Component } from 'react';
import CasestudieSlider from '../../../widgets/casestudies/CasestudieSlider';
import RelativeCasestudie from '../../../widgets/casestudies/RelativeCasestudie';
import Pageheading from '../../../widgets/Pageheading';

class CaseStudieSingle extends Component {
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
            <Pageheading foldername={"Case Studies"} title={"Case Studies Single"} />
            {/*page title end*/}
            {/*body content start*/}
            <div id="main-page" className="page-content">
              {/*case studies single start*/}
              <section>
                <div className="container">
                  <div className="row">
                    <CasestudieSlider logoitems={1} />
                  </div>
                </div>
              </section>
              <section className="dark-bg">
                <div className="container">
                  <div className="portfolio-info">
                    <div className="row align-items-center">
                      <div className="col-lg-8 col-md-12 p-5">
                        <h3 className="mb-3 text-white">Experience for Agency</h3>
                        <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers. Discover how we gave this startup a fresh visual start</p>
                        <ul className="list-unstyled">
                          <li className="mb-2">1. Strategic Discovery</li>
                          <li className="mb-2">2. Web application redesign &amp; optimization</li>
                          <li className="mb-2">3. Mobile application redesign &amp; optimization</li>
                          <li className="mb-2">4. Landing page Template</li>
                          <li>5. Component-based UI-kit</li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-12 p-5">
                        <ul className="portfolio-meta list-unstyled">
                          <li className="mb-4"><i className="flaticon-domain" />  <span className="text-white"> Category</span> Agency</li>
                          <li className="mb-4"><i className="flaticon-support-1" />  <span className="text-white"> Client</span> ThemeHt</li>
                          <li><i className="flaticon-experience" />  <span className="text-white"> Release</span> March, 2020</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/*case studies single end*/}
              {/*case studies start*/}
              <section>
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-lg-8 col-md-12">
                      <div className="section-title">
                        <h6>Our Work</h6>
                        <h2 className="title mb-0">Related <span>Case Studies</span></h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <RelativeCasestudie logoitems={3} />
                     </div>
                  </div>
                </div>
              </section>
              {/*case studies end*/}
            </div>
            {/*body content end*/}
          </div>
            );
    }
}

export default CaseStudieSingle;