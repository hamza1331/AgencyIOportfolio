import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel';  
window.fn = OwlCarousel;

class Testimonial4 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
             <OwlCarousel
                    className={`owl-carousel`}
                    items={this.props.logoitems}
                    autoplay={true}
                    loop={true}
                >
                    
                        <div className="item">
                          <div className="testimonial style-3 shadow-none">
                            <div className="testimonial-content">
                              <div className="testimonial-quote"><i className="flaticon-left-quote" />
                              </div>
                              <p>Eeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt</p>
                            </div>
                            <div className="d-sm-flex align-items-center">
                              <div className="testimonial-img">
                                <img className="img-fluid" src={require(`../../assets/images/testimonial/01.jpg`)} alt="" />
                              </div>
                              <div className="testimonial-caption">
                                <h5>Alvi Miller</h5>
                                <label>Founder of Agencio</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="testimonial style-3 shadow-none">
                            <div className="testimonial-content">
                              <div className="testimonial-quote"><i className="flaticon-left-quote" />
                              </div>
                              <p>Reasonable porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam tempora</p>
                            </div>
                            <div className="d-sm-flex align-items-center">
                              <div className="testimonial-img">
                                <img className="img-fluid" src={require(`../../assets/images/testimonial/02.jpg`)} alt="" />
                              </div>
                              <div className="testimonial-caption">
                                <h5>Albert Jonson</h5>
                                <label>CEO of Agencio</label>
                              </div>
                            </div>
                          </div>
                        </div>
                   
                 
                
            </OwlCarousel>

        );
    }
}

export default Testimonial4;
