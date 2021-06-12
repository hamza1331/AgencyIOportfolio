import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PageNotFound extends Component {
     constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    render() {
        return (
            <div id="main-page" className="page-content">
                {/*coming soon start*/}
                <section className="fullscreen-banner p-0 error-page">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-12 text-center h-100 d-flex align-items-center">
                                <div className="w-100">
                                    <h1 className="bnr-title2">404</h1>
                                    <h2>Oops! Page Not Found</h2>
                                    <div className="col-lg-6 col-md-10 ml-auto mr-auto">
                                        <p className="line-h-3 lead">You’re either misspelling the URL
                            or requesting a page that's no longer here.</p>
                                        <Link className="btn btn-theme" to="/"><span>Back To Home Page <i className="fas fa-home ml-2" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*coming soon end*/}
            </div>
        );
    }
}

export default PageNotFound;