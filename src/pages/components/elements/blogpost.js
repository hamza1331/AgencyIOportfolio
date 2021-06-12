import React, { Component } from 'react';
import BlogStyle1 from '../../../widgets/Blog/BlogStyle1';
import BlogStyle2 from '../../../widgets/Blog/BlogStyle2';
import BlogStyle3 from '../../../widgets/Blog/BlogStyle3';
import BlogStyle4 from '../../../widgets/Blog/BlogStyle4';
import Pageheading from '../../../widgets/Pageheading';

class BlogPost extends Component {
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
        <Pageheading foldername={"Element"} title={"Blog Post"} />
        {/*page title end*/}
        {/*body content start*/}
        <div id="main-page" className="page-content">
          {/*blog style1 start*/}
          <section>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-12">
                  <div className="section-title">
                    <h2 className="title">Post <span>Style 1</span></h2>
                    <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                  </div>
                </div>
              </div>
              <BlogStyle1 />
            </div>
          </section>
          {/*blog style1 end*/}
          {/*blog style2 start*/}
          <section className="grey-bg parallaxie" style={{ backgroundImage: 'url(' + require(`../../../assets/images/pattern/03.png`) + ')' }} >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h2 className="title">Post <span>Style 2</span></h2>
                    <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid pr-lg-0">
              <BlogStyle3 logoitems={2} />
            </div>
          </section>
          {/*blog style2 end*/}
          {/*blog style3 start*/}
          <section>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h2 className="title">Post <span>Style 3</span></h2>
                    <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                  </div>
                </div>
              </div>
              <BlogStyle4 />
            </div>
          </section>
          {/*blog style3 end*/}
          {/*blog style4 start*/}
          <section>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-12">
                  <div className="section-title">
                    <h2 className="title">Post <span>Style 4</span></h2>
                    <p>Agencio discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                  </div>
                </div>
              </div>
              <BlogStyle2 />
            </div>
          </section>
          {/*blog style4 end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default BlogPost;