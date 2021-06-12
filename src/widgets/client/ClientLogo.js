import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
window.fn = OwlCarousel;

class ClientLogo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-8 col-md-10 col-11 ml-auto text-center dark-bg p-3 p-md-5">
                    <OwlCarousel
                        className={`owl-carousel owl-theme no-pb`}
                        dots={false}
                        items={this.props.logoitems}
                        autoplay={true}
                        margin={10}
                        loop={true}
                    >
                        <div className="item">
                            <img className="img-fluid w-auto" src={require(`../../assets/images/client/01.png`)} alt="" />
                        </div>
                        <div className="item">
                            <img className="img-fluid w-auto" src={require(`../../assets/images/client/02.png`)} alt="" />
                        </div>
                        <div className="item">
                            <img className="img-fluid w-auto" src={require(`../../assets/images/client/03.png`)} alt="" />
                        </div>
                        <div className="item">
                            <img className="img-fluid w-auto" src={require(`../../assets/images/client/04.png`)} alt="" />
                        </div>
                        <div className="item">
                            <img className="img-fluid w-auto" src={require(`../../assets/images/client/05.png`)} alt="" />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        );
    }
}

export default ClientLogo;