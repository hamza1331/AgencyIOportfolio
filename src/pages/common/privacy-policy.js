import React, { Component } from 'react';
import Pageheading from '../../widgets/Pageheading';

class PrivacyPolicy extends Component {
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
                <Pageheading foldername={"Home"} title={"Privacy Policy"} />
                {/*page title end*/}
                {/*body content start*/}
                <div id="main-page" className="page-content">
                    {/*privacy start*/}
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <h2 className="title mb-0">Privacy Policy</h2>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-12 col-md-12">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem error quae illo excepturi nostrum blanditiis laboriosam magnam explicabo.</p>
                                    <p>eum nihil expedita dolorum odio dolorem, explicabo rem illum magni perferendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem error quae illo excepturi nostrum blanditiis laboriosam magnam explicabo. Molestias, eum nihil expedita dolorum odio dolorem, explicabo rem illum magni perferendis.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem error quae illo excepturi nostrum blanditiis laboriosam magnam explicabo. Molestias, eum nihil expedita dolorum odio dolorem, explicabo rem illum magni perferendis.</p>
                                    <h4 className="mt-5 text-theme">Personal Information</h4>
                                    <ul className="list-unstyled list-icon">
                                        <li className="mb-2"> <i className="fas fa-check" /> Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className="mb-2"> <i className="fas fa-check" /> Quidem error quae illo excepturi nostrum blanditiis laboriosam</li>
                                        <li className="mb-2"> <i className="fas fa-check" /> Molestias, eum nihil expedita dolorum odio dolorem</li>
                                        <li className="mb-2"> <i className="fas fa-check" /> Eum nihil expedita dolorum odio dolorem</li>
                                        <li> <i className="fas fa-check" /> Explicabo rem illum magni perferendis</li>
                                    </ul>
                                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt sed omnis expedita, commodi dolores. Debitis nemo animi quia deleniti commodi nesciunt illo. Deserunt.</p>
                                    <h4 className="mt-5 text-theme">Use of User Information.</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt sed omnis expedita, commodi dolores. Debitis nemo animi quia deleniti commodi nesciunt illo. Deserunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt sed omnis expedita, commodi dolores. Debitis nemo animi quia deleniti commodi nesciunt illo. Deserunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt sed omnis expedita, commodi dolores. Debitis nemo animi quia deleniti commodi nesciunt illo. Deserunt.</p>
                                    <h4 className="mt-5 text-theme">Disclosure of User Information.</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ullam nostrum dolor alias aspernatur nobis suscipit eaque cumque distinctio eos, beatae deserunt, nihil nam maiores vero, eius harum. Reprehenderit, aspernatur.</p>
                                    <ul className="list-unstyled list-icon">
                                        <li className="mb-2"> <i className="fas fa-check" /> Nulla excepturi sint iusto incidunt sed omnis expedita</li>
                                        <li className="mb-2"> <i className="fas fa-check" /> Quidem error quae illo excepturi nostrum blanditiis laboriosam</li>
                                        <li className="mb-2"> <i className="fas fa-check" /> Deserunt.Lorem ipsum dolor sit amet</li>
                                        <li> <i className="fas fa-check" /> Possimus, ex, quisquam. Nulla excepturi</li>
                                    </ul>
                                    <p className="mt-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ex, quisquam. Nulla excepturi sint iusto incidunt sed omnis expedita, commodi dolores. Debitis nemo animi quia deleniti commodi nesciunt illo. Deserunt.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*privacy end*/}
                </div>
                {/*body content end*/}
            </div>
        );
    }
}

export default PrivacyPolicy;
