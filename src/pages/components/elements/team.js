import React, { Component } from 'react';
import TeamSection1 from '../../../widgets/team/TeamSection1';
import TeamSection3 from '../../../widgets/team/TeamSection3';
import TeamSection4 from '../../../widgets/team/TeamSection4';
import Pageheading from '../../../widgets/Pageheading';

class Team extends Component {
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
          <Pageheading foldername={"Element"} title={"Team"} />
          {/*page title end*/}
          {/*body content start*/}
          <div id="main-page" className="page-content">
            {/*team style1 start*/}
            <section>
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-lg-8 col-md-12">
                    <div className="section-title">
                      <h2 className="title">Team <span>Style 1</span></h2>
                      <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                    </div>
                  </div>
                </div>
                  <TeamSection1 />
              </div>
            </section>
            {/*team style1 end*/}
            {/*team style2 start*/}
            <section>
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-lg-8 col-md-12">
                    <div className="section-title">
                      <h2 className="title">Team <span>Style 2</span></h2>
                      <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                    </div>
                  </div>
                </div>
                <TeamSection3 />
               </div>
            </section>
            {/*team style2 end*/}
            {/*team style3 start*/}
            <section className="pt-0">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-lg-8 col-md-12">
                    <div className="section-title">
                      <h2 className="title">Team <span>Style 3</span></h2>
                      <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                    </div>
                  </div>
                </div>
                <TeamSection4 />
               </div>
            </section>
            {/*team style3 end*/}
          </div>
          {/*body content end*/}
        </div>
          );
    }
}

export default Team;