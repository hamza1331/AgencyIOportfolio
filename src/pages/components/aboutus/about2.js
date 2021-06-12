import React, { Component } from 'react';
import AboutBox2 from '../../../widgets/about/AboutBox2';
import ServiceBox1 from '../../../widgets/service/ServiceBox1';
import TeamSection2 from '../../../widgets/team/TeamSection2';
import Testimonial1 from '../../../widgets/testimonial/Testimonial1';
import BlogStyle2 from '../../../widgets/Blog/BlogStyle2';
import Pageheading from '../../../widgets/Pageheading';

class About2 extends Component {
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
        <Pageheading foldername={"Pages"} title={"About Us 2"} />
        {/*page title end*/}
        {/*body content start*/}
        <div id="main-page" className="page-content">
          {/*about start*/}
          <section className="pb-0 z-index-1 pos-r o-hidden">
            <div className="inside-text">
              <span>About</span>
            </div>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-md-10">
                  <h4 className="text-black font-w-5 line-h-2">Agencio far away behind the word mountains <span className="text-theme">Agency</span> like you. With useful features an interface and <span className="text-theme">powerful Design</span> built by a community of developers, there live the blind texts.</h4>
                </div>
              </div>
              <AboutBox2 />
            </div>
          </section>
          {/*about end*/}
          {/*service start*/}
          <section className="pos-r py-15 z-index-0 o-hidden dark-bg custom-mt-10">
            <div className="inside-text">
              <span>Service</span>
            </div>
            <div className="container">
              <div className="row align-items-end mb-5">
                <div className="col-lg-6 col-12">
                  <div className="section-title mb-0">
                    <h6>What We Offer</h6>
                    <h2 className="title mb-0">Building Brands More Quickly</h2>
                  </div>
                </div>
                <div className="col-lg-6 col-12 md-mt-5">
                  <p className="lead text-light font-w-5 mb-0">Agencio discovering the source behind the ubiquitous filler text In seeing a sample of lorem ipsum, his interest was piqued by consectetur Agencio discovering</p>
                </div>
              </div>
            </div>
          </section>
          <section className="custom-mt-10 pt-0">
            <div className="container">
              <ServiceBox1 logoitems={3} />
            </div>
          </section>
          {/*service end*/}
          <section className="pt-0">
            <div className="container">
              <TeamSection2 />
            </div>
          </section>
          {/*testimonial start*/}
          <section className="pb-0 pos-r" style={{ backgroundImage: 'url(' + require(`../../../assets/images/bg/06.png`) + ')' }} >
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <Testimonial1 logoitems={2} />
                </div>
              </div>
            </div>
          </section>
          {/*testimonial end*/}
          {/*blog start*/}
          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h6>What We Offer</h6>
                    <h2 className="title">Read Our Latest News</h2>
                    <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                  </div>
                </div>
              </div>
              <BlogStyle2 />
            </div>
          </section>
          {/*blog end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default About2;