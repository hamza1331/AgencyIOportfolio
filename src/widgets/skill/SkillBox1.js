import React, { Component } from 'react';
class SkillBox1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="featured-item white-bg">
                        <div className="featured-icon"> <i className="flaticon-idea" />
                        </div>
                        <div className="featured-title">
                            <h5 className="mb-0">Design</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mt-sm-0">
                    <div className="featured-item theme-bg">
                        <div className="featured-icon"> <i className="flaticon-domain" />
                        </div>
                        <div className="featured-title">
                            <h5 className="mb-0">Development</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mt-lg-0">
                    <div className="featured-item white-bg">
                        <div className="featured-icon"> <i className="flaticon-analytics" />
                        </div>
                        <div className="featured-title">
                            <h5 className="mb-0">Analytics</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mt-lg-0">
                    <div className="featured-item theme-bg">
                        <div className="featured-icon"> <i className="flaticon-optimization" />
                        </div>
                        <div className="featured-title">
                            <h5 className="mb-0">Optimization</h5>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default SkillBox1;
