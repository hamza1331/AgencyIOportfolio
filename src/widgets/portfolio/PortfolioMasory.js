import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import portfolio from '../../api/portfolio';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const masonryOptions = {
    transitionDuration: 0
};

class PortfolioMasonryStyle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PortfolioDisplay: portfolio,
            photoIndex:0,
            isOpen: false,
            breakpointCol:{
                default: 3,
                1100: 2,
                700: 2,
                500: 1
            }
        }
    }
    OpenPopup(index){
        this.setState({
            photoIndex:index,
            isOpen:true
        });
    }
    render() {
        const {photoIndex,isOpen} = this.state;
        const images=[];
        {this.state.PortfolioDisplay.map((pic)=>
            images.push(require(`../../assets/images/portfolio/large/${pic.images}`))
        )}
        return (
            <>
            <Masonry
                breakpointCols={this.state.breakpointCol}
                className="row popup-gallery no-gutters"
                columnClassName="masonry-brick">
                {this.state.PortfolioDisplay.map((port, index) =>
                    <div className="portfolio-item" key={index}>
                        <img className="img-fluid" src={require(`../../assets/images/portfolio/${port.images}`)} alt="" />
                        <Link className="popup-img" onClick={() => this.OpenPopup(index)} > <i className="fas fa-plus-circle" />
                        </Link>
                        <div className="portfolio-hover"> 
                        {port.category ?
                            <>
                                {port.category.map((category, i, arr) =>
                                    <span style={{ color: 'white' }}>{category}  {i != (arr.length - 1) ? '|' : ''} </span>
                                )}
                            </>
                            :
                            null
                        }
                        <h5><Link to="/portfolio-single">{port.name}</Link></h5>
                        </div>
                    </div>
                )}
            </Masonry>
                 {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        enableZoom={false}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                        }
                    />
                )}
            </>
        );
    }
}

export default PortfolioMasonryStyle;
