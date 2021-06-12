import React, { Component } from 'react';
import Herosection3 from '../../widgets/herosecation/Herosection3';
import AboutBox2 from '../../widgets/about/AboutBox2';
import FeatureBox4 from '../../widgets/featurebox/FeatureBox4';
import TeamSection2 from '../../widgets/team/TeamSection2';
import CaseStudieBox from '../../widgets/casestudies/casestudieBox';
import Testimonial3 from '../../widgets/testimonial/Testimonial3';
import BlogStyle4 from '../../widgets/Blog/BlogStyle4';
import TeamSection4 from '../../widgets/team/TeamSection4';

class Index3 extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.insideText();
  }

  // On Scroll Inside Text Move
  insideText() {
    var e, i = $(window).height(),
    n = i / 2;
    $(document).scroll(function () {
      e = $(window).scrollTop(), $(".inside-text").each(function () {
        var i = $(this),
          o = i.parent("section"),
          s = o.offset().top;
        i.css({
          top: -(s - e) + n + "px"
        })
      })
    })
  };
  render() {
    return (
      <div>
        {/*hero section start*/}
        <Herosection3 />
        {/*hero section end*/}
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
              <div className="row">
                <div className="col">
                  <FeatureBox4 logoitems={3} />
                </div>
              </div>
            </div>
          </section>
          {/*service end*/}
          <section className="pt-0 o-hidden pos-r">
            <div className="inside-text">
              <span>F.A.Q.</span>
            </div>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-12">
                  <div className="section-title">
                    <h6>F.A.Q.</h6>
                    <h2 className="title mb-0">Faq and Stuff</h2>
                  </div>
                </div>
              </div>
              <TeamSection2 />
            </div>
          </section>
          {/*case study start*/}
          <section className="theme-bg pos-r o-hidden" style={{ backgroundImage: 'url(' + require(`../../assets/images/pattern/01.png`) + ')' }}  >
            <div className="inside-text">
              <span>Case Studies</span>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h6>Our Work</h6>
                    <h2 className="title mb-0">Explore some of our latest Case Study.</h2>
                  </div>
                </div>
              </div>
              <CaseStudieBox />
            </div>
          </section>
          {/*case study end*/}
          {/*testimonial start*/}
          <section className="o-hidden pos-r">
            <div className="inside-text">
              <span>Testimonial</span>
            </div>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h6>Testimonial</h6>
                    <h2 className="title mb-0">What Client Say?</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Testimonial3 logoitems={1} />
                </div>
              </div>
            </div>
          </section>
          {/*testimonial end*/}
          {/*team start*/}
          <section className="grey-bg o-hidden pos-r">
            <div className="inside-text">
              <span>Team</span>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h6>Expert Team</h6>
                    <h2 className="title mb-0">Meet Our Expert will ready for your service</h2>
                  </div>
                </div>
              </div>
              <TeamSection4 />
            </div>
          </section>
          {/*team end*/}
          {/*blog start*/}
          <section className="o-hidden pos-r">
            <div className="inside-text">
              <span>Blog</span>
            </div>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h6>Blog</h6>
                    <h2 className="title">Read Our Latest News</h2>
                    <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                  </div>
                </div>
              </div>
              <BlogStyle4 />
            </div>
          </section>
          {/*blog end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Index3;