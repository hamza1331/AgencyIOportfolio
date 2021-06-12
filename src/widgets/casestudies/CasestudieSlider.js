import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
window.fn = OwlCarousel;

class CasestudieSlider extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col">
                <OwlCarousel
                    className={`owl-carousel no-pb`}
                    dotData={false}
                    items={this.props.logoitems}
                    autoplay={true}
                    loop={true}
                >
                    <div className="item">
                        <img className="img-fluid w-100" src={require(`../../assets/images/cases/large/01.jpg`)} alt="" />
                    </div>
                    <div className="item">
                        <img className="img-fluid w-100" src={require(`../../assets/images/cases/large/02.jpg`)} alt="" />
                    </div>
                </OwlCarousel>
            </div>
        );
    }
}

export default CasestudieSlider;
