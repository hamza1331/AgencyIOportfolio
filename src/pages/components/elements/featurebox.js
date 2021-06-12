import React, { Component } from 'react';
import FeatureBox2 from '../../../widgets/featurebox/FeatureBox2';
import FeatureBox1 from '../../../widgets/featurebox/FeatureBox1';
import ParticlesBg from '../../../widgets/PraticlesBg';
import FeatureBox3 from '../../../widgets/featurebox/FeatureBox3';
import FeatureBox4 from '../../../widgets/featurebox/FeatureBox4';
import Pageheading from '../../../widgets/Pageheading';

class FeatureBox extends Component {
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
          <Pageheading foldername={"Element"} title={"Feuture Box"} />
          {/*page title end*/}
          {/*body content start*/}
          <div id="main-page" className="page-content">
            {/*featured box style1 start*/}
            <section>
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-lg-8 col-md-12">
                    <div className="section-title">
                      <h2 className="title">Feature Box <span>Style 1</span></h2>
                      <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6 z-index-1">
                    <FeatureBox2 />
                   </div>
                </div>
              </div>
            </section>
            {/*featured box style1 end*/}
            {/*featured box style2 start*/}
            <section className="pos-r">
              <ParticlesBg />
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-lg-8 col-md-12">
                    <div className="section-title">
                      <h2 className="title">Feature Box <span>Style 2</span></h2>
                      <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                    </div>
                  </div>
                </div>
                <FeatureBox1 />
              </div>
            </section>
            {/*featured box style2 end*/}
            {/*featured box style3 start*/}
            <section>
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-lg-8 col-md-12">
                    <div className="section-title">
                      <h2 className="title">Feature Box <span>Style 3</span></h2>
                      <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                    </div>
                  </div>
                </div>
                <FeatureBox3 />
               </div>
            </section>
            {/*featured box style3 end*/}
            {/*featured box style4 end*/}
            <section>
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-lg-8 col-md-12">
                    <div className="section-title">
                      <h2 className="title">Feature Box <span>Style 4</span></h2>
                      <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <FeatureBox4 logoitems={3} />
                  </div>
                </div>
              </div>
            </section>
            {/*featured box style4 end*/}
          </div>
          {/*body content end*/}
        </div>
          );
    }
}

export default FeatureBox;