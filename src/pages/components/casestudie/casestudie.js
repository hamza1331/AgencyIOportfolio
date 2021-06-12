import React, { Component } from 'react';
import CaseStudieBox from '../../../widgets/casestudies/casestudieBox';
import Pageheading from '../../../widgets/Pageheading';

class CaseStudie extends Component {
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
                <Pageheading foldername={"Case Studies"} title={"Case Studies Style 1"} />
                {/*page title end*/}
                {/*body content start*/}
                <div id="main-page" className="page-content">
                    {/*case study start*/}
                    <section>
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-lg-8 col-12">
                                    <div className="section-title">
                                        <h6>Our Work</h6>
                                        <h2 className="title mb-0">Explore some of our <span>latest Case Study.</span></h2>
                                    </div>
                                </div>
                            </div>
                            <CaseStudieBox />
                     </div>
                    </section>
                    {/*case study end*/}
                </div>
                {/*body content end*/}
            </div>
        );
    }
}

export default CaseStudie;