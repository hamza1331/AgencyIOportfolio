import React, { Component } from 'react';

class AboutBox2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row mt-5">
                <div className="col-lg-6 col-12 ml-auto pl-lg-5 order-lg-1">
                    <div className="section-title mb-4">
                        <h6>About US</h6>
                        <h2 className="title">Agencio Build Branded Design</h2>
                    </div>
                    <ul className="list-unstyled list-icon">
                        <li className="mb-4"> <i className="fas fa-check" /> Lorem ipsum dolor sit</li>
                        <li className="mb-4"> <i className="fas fa-check" /> Molestias, eum odio dolorem</li>
                        <li className="mb-4 mb-sm-0"> <i className="fas fa-check" /> Eum nihil expedita dolorum </li>
                        <li> <i className="fas fa-check" /> Explicabo perferendis</li>
                    </ul>
                    <p className="mt-4">Agencio discovering the source behind the ubiquitous filler text In seeing behind, discovering the source behind the ubiquitous filler text In seeing behind</p>
                </div>
                <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                    <img className="img-fluid w-100" src={require(`../../assets/images/about/01.jpg`)} alt="" />
                </div>
            </div>
        );
    }
}

export default AboutBox2;