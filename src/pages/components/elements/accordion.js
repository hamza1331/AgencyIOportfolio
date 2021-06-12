import React, { Component } from 'react';
import TeamSection2 from '../../../widgets/team/TeamSection2';
import Pageheading from '../../../widgets/Pageheading';

class Accordion extends Component {
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
        <Pageheading foldername={"Element"} title={"Accordion"} />
        {/*page title end*/}
        {/*body content start*/}
        <div id="main-page" className="page-content">
          {/*accordion start*/}
          <section>
            <div className="container">
              <TeamSection2 />
            </div>
          </section>
          {/*accordion end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Accordion;