import React, { Component } from 'react';
import Pageheading from '../../../widgets/Pageheading';
import TeamSection3 from '../../../widgets/team/TeamSection3';

class Team2 extends Component {
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
            <Pageheading foldername={"Pages"} title={"Team"} />
            {/*page title end*/}
            {/*body content start*/}
            <div id="main-page" className="page-content">
              {/*team start*/}
              <section>
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-lg-8 col-md-12">
                      <div className="section-title">
                        <h6>Expert Team</h6>
                        <h2 className="title mb-0">Meet Our Expert will ready <span>for your service</span></h2>
                      </div>
                    </div>
                  </div>
                  <TeamSection3 />
                  <br />
                  <br />
                  <TeamSection3 />
                </div>
              </section>
              {/*team end*/}
            </div>
            {/*body content end*/}
          </div>
        );
    }
}

export default Team2;