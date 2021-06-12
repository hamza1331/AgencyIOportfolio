import React, { Component } from 'react';
import Counter1 from '../../../widgets/counter/Counter1';
import Counter2 from '../../../widgets/counter/Counter2';
import Counter3 from '../../../widgets/counter/Counter3';
import Pageheading from '../../../widgets/Pageheading';

class Counter extends Component {
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
          <Pageheading foldername={"Element"} title={"Counter"} />
          {/*page title end*/}
          {/*body content start*/}
          <div id="main-page" className="page-content">
            {/*counter style1 start*/}
            <section>
              <div className="container">
                <Counter1 />
             </div>
            </section>
            {/*counter style1 end*/}
            {/*counter style2 start*/}
            <section className="dark-bg parallaxie" style={{ backgroundImage: 'url(' + require(`../../../assets/images/pattern/01.png`) + ')' }}  >
              <div className="container">
              <Counter2 />
               </div>
            </section>
            {/*counter style2 end*/}
            {/*counter style3 start*/}
            <section className="theme-bg">
              <div className="container">
                  <Counter3 />
               </div>
            </section>
            {/*counter style3 end*/}
          </div>
          {/*body content end*/}
        </div>
        );
    }
}

export default Counter;