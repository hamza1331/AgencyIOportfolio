import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pageheading from '../../widgets/Pageheading';

class TermsConditions extends Component {
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
                <Pageheading foldername={"Home"} title={"Terms And Conditions"} />
                {/*page title end*/}
                {/*body content start*/}
                <div id="main-page" className="page-content">
                    {/*terms start*/}
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <h2 className="title mb-0">Terms and Conditions</h2>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-12 col-md-12">
                                    <h4 className="text-theme">1. Description of Service</h4>
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi at fuga alias harum quo quibusdam odit eum reprehenderit consectetur suscipit!</p>
                                    <h4 className="text-theme mt-5">2. Your Registration Obligations</h4>
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nesciunt officia culpa nostrum maxime vero architecto, corporis placeat repudiandae minima facere animi, pariatur fugit dignissimos qui error est nulla. Doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nesciunt officia culpa nostrum maxime vero architecto, corporis placeat repudiandae minima facere animi, pariatur fugit dignissimos qui error est nulla. Doloribus.</p>
                                    <h4 className="text-theme mt-5"> 3. User Account, Password, and Security</h4>
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi.</p>
                                    <h4 className="text-theme mt-5">4. User Conduct</h4>
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium vel recusandae ad impedit ipsum, vitae facere expedita! Voluptatem iure dolorem dignissimos nisi magni a dolore, et inventore optio, voluptas, obcaecati.</p>
                                    <ul className="list-unstyled list-icon mb-3">
                                        <li className="mb-2"> <i className="fas fa-check" /> Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className="mb-2"> <i className="fas fa-check" /> Quidem error quae illo excepturi nostrum blanditiis laboriosam</li>
                                        <li className="mb-2"> <i className="fas fa-check" /> Molestias, eum nihil expedita dolorum odio dolorem</li>
                                        <li className="mb-2"> <i className="fas fa-check" /> Eum nihil expedita dolorum odio dolorem</li>
                                        <li> <i className="fas fa-check" /> Explicabo rem illum magni perferendis</li>
                                    </ul>
                                    <h4 className="text-theme mt-5">5. International Use</h4>
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium vel recusandae ad impedit ipsum, vitae facere expedita! Voluptatem iure dolorem dignissimos nisi magni a dolore, et inventore optio, voluptas, obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate incidunt aliquam sint, magnam excepturi quas a, id doloremque quasi iusto quo consequuntur dolorum neque optio ipsum, rerum nesciunt illo iure.</p> <Link className="btn btn-theme" to="/"><span>Accept <i className="fas fa-long-arrow-alt-right ml-2" /></span></Link>
                                    <Link className="btn btn-white" to="/"><span>Close <i className="fas fa-long-arrow-alt-right ml-2" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*terms end*/}
                </div>
                {/*body content end*/}
            </div>
        );
    }
}

export default TermsConditions;
