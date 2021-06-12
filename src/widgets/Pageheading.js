import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pageheading extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="page-title animatedbg dark-bg text-center" style={{ backgroundImage: 'url(' + require(`../assets/images/pattern/01.png`) + ')' }} >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>{this.props.title}</h1>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item"><Link to="/">{this.props.foldername}</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">{this.props.title}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Pageheading;