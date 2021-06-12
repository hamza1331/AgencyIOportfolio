import React, { Component } from 'react';
import Herosection2 from '../../widgets/herosecation/Herosection2';
import ClientLogo from '../../widgets/client/ClientLogo';
import CasestudieSlider3 from '../../widgets/casestudies/CasestudieSlider3';
import FeatureBox3 from '../../widgets/featurebox/FeatureBox3';
import Counter2 from '../../widgets/counter/Counter2';
import Testimonial1 from '../../widgets/testimonial/Testimonial1';
import BlogStyle1 from '../../widgets/Blog/BlogStyle1';
import TeamSection3 from '../../widgets/team/TeamSection3';

class Index2 extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Herosection2 />
                {/*hero section end*/}
                {/*body content start*/}
                <div id="main-page" className="page-content">
                    {/*client start*/}
                    <section className="p-0">
                        <div className="container-fluid pr-0">
                            <ClientLogo logoitems={4} />
                        </div>
                    </section>
                    {/*client end*/}
                    {/*case study start*/}
                    <section className="theme-bg pos-r parallaxie" style={{ backgroundImage: 'url(' + require(`../../assets/images/pattern/01.png`) + ')' }} >
                        <div className="container-fluid px-lg-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="cases-slider pos-r">
                                        <CasestudieSlider3 logoitems={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*case study end*/}
                    {/*service start*/}
                    <section className="pos-r">
                        <div className="container">
                            <FeatureBox3 />
                        </div>
                    </section>
                    {/*service end*/}
                    {/*counter start*/}
                    <section className="dark-bg parallaxie" style={{ backgroundImage: 'url(' + require(`../../assets/images/pattern/01.png`) + ')' }}  >
                        <div className="container">
                            <Counter2 />
                        </div>
                    </section>
                    {/*counter end*/}
                    {/*team start*/}
                    <section>
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-lg-8 col-12">
                                    <div className="section-title">
                                        <h6>Expert Team</h6>
                                        <h2 className="title mb-0">Meet Our Expert will ready for your service</h2>
                                    </div>
                                </div>
                            </div>
                            <TeamSection3 />
                        </div>
                    </section>
                    {/*team end*/}
                    {/*testimonial start*/}
                    <section className="pb-0 pos-r" style={{ backgroundImage: 'url(' + require(`../../assets/images/bg/06.png`) + ')' }}  >
                        <div className="container">
                            <Testimonial1 logoitems={2} />
                        </div>
                    </section>
                    {/*testimonial end*/}
                    {/*blog start*/}
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <div className="section-title">
                                        <h6>Blog</h6>
                                        <h2 className="title">Read Our Latest News</h2>
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

export default Index2;