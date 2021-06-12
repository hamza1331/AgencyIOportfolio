import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import Herosection5 from '../../widgets/herosecation/Herosection5';
import SkillBox1 from '../../widgets/skill/SkillBox1';
import AboutBox3 from '../../widgets/about/AboutBox3';
import PortfolioMasonryStyle from '../../widgets/portfolio/PortfolioMasory';
import FeatureBox5 from '../../widgets/featurebox/FeatureBox5';
import TeamSection2 from '../../widgets/team/TeamSection2';
import PriceTable1 from '../../widgets/price/PriceTable1';
import Clientbox1 from '../../widgets/client/Clientbox1';
import Testimonial4 from '../../widgets/testimonial/Testimonial4';
import BlogStyle2 from '../../widgets/Blog/BlogStyle2';

class Index5 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  openModal() {
    this.setState({ isOpen: true })
  }
  render() {
    return (
      <div>
        {/*hero section start*/}
        <Herosection5 />
        {/*hero section end*/}
        {/*body content start*/}
        <div id="main-page" className="page-content">
          {/*feature start*/}
          <section className="p-0 custom-mt-10">
            <div className="container">
              <SkillBox1 />
            </div>
          </section>
          {/*feature end*/}
          {/*about start*/}
          <section>
            <div className="container">
              <AboutBox3 />
            </div>
          </section>
          {/*about end*/}
          {/*portfolio start*/}
          <section>
            <div className="container">
              <PortfolioMasonryStyle />
            </div>
          </section>
          {/*portfolio end*/}
          {/*team start*/}
          <section className="theme-bg pb-20"  >
            <div className="container">
              <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay={true} videoId='P_wKDMcr1Tg' onClose={() => this.setState({ isOpen: false })} />
              <div className="row align-items-center">
               <div className="col-md-8">
                  <div className="section-title mb-md-0">
                    <h2 className="title mb-0">We Make It Simple To Take Your <span className="font-w-3 text-light">Business With Target Success.</span></h2>
                  </div>
                </div>
                <div className="col-md-4 text-md-center">
                  <div className="video-btn">
                    <Link to="#" className="popup-youtube play-btn" onClick={this.openModal}><i className="fas fa-play-circle" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*team end*/}
          {/*service start*/}
          <section className="custom-mt-10 pt-0 text-center">
            <div className="container">
              <FeatureBox5 />
            </div>
          </section>
          {/*service end*/}
          <section className="pt-0">
            <div className="container">
              <TeamSection2 />
            </div>
          </section>
          {/*pricing table start*/}
          <section className="pos-r">
            <div className="dot-bg">
              <img className="img-fluid rotateme" src={require(`../../assets/images/pattern/04.png`)} alt="" />
            </div>
            <div className="container">
              <div className="row align-items-end mb-5">
                <div className="col-lg-6 col-md-12 text-lg-right order-lg-1">
                  <div className="section-title mb-lg-0 mb-2">
                    <h2 className="title mb-0">Choose Your Best <span>Pricing plan</span></h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <p className="lead mb-0">Agencio discovering the source behind the ubiquitous filler text In seeing a sample of lorem ipsum, his interest was piqued by consectetur Agencio discovering</p>
                </div>
              </div>
              <PriceTable1 />
            </div>
          </section>
          {/*pricing table end*/}
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
                <div className="col-lg-6 col-12 mt-5 mt-lg-0">
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
          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h2 className="title">Read Our <span>Latest News</span></h2>
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

export default Index5;