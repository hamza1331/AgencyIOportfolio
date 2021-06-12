import React, { Component } from 'react';

class Clientbox1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-4 col-6">
                    <img className="img-fluid" src={require(`../../assets/images/client/07.png`)} alt="" />
                </div>
                <div className="col-sm-4 col-6">
                    <img className="img-fluid" src={require(`../../assets/images/client/08.png`)} alt="" />
                </div>
                <div className="col-sm-4 col-6 mt-5 mt-sm-0">
                    <img className="img-fluid" src={require(`../../assets/images/client/09.png`)} alt="" />
                </div>
                <div className="col-sm-4 col-6 mt-5">
                    <img className="img-fluid" src={require(`../../assets/images/client/10.png`)} alt="" />
                </div>
                <div className="col-sm-4 col-6 mt-5">
                    <img className="img-fluid" src={require(`../../assets/images/client/11.png`)} alt="" />
                </div>
                <div className="col-sm-4 col-6 mt-5">
                    <img className="img-fluid" src={require(`../../assets/images/client/06.png`)} alt="" />
                </div>
            </div>
        );
    }
}

export default Clientbox1;
