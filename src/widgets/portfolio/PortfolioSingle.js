import React, { Component } from 'react';



class PortfolioSingleBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-lg-8 col-md-12 p-5">
          <div className="section-title mb-3">
            <h2 className="title mb-0">About <span>Project</span></h2>
          </div>
          <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers. Discover how we gave this startup a fresh visual start</p>
          <ul className="list-unstyled">
            <li className="mb-2">1. Strategic Discovery</li>
            <li className="mb-2">2. Web application redesign &amp; optimization</li>
            <li className="mb-2">3. Mobile application redesign &amp; optimization</li>
            <li className="mb-2">4. Landing page Template</li>
            <li>5. Component-based UI-kit</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 p-5">
          <ul className="portfolio-meta list-unstyled">
            <li className="mb-4"><i className="flaticon-domain" />  <span> Category</span> Agency</li>
            <li className="mb-4"><i className="flaticon-support-1" />  <span> Client</span> ThemeHt</li>
            <li><i className="flaticon-experience" />  <span> Release</span> March, 2020</li>
          </ul>
        </div>
      </div>
      );
  }
}

export default PortfolioSingleBox;

