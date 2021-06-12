import React,{Component} from 'react';
import OwlCarousel from 'react-owl-carousel';  
window.fn = OwlCarousel;

class Testimonial3 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
             <OwlCarousel
                    className={`owl-carousel no-pb`}
                    items={this.props.logoitems}
                    dotData={false}
                    autoplay={true}
                    loop={true}
                >
                      <div className="item">
                        <div className="row no-gutters align-items-center">
                          <div className="col-md-5">
                            <div className="theme-bg text-center p-3 position-absolute z-index-1"><i className="flaticon-left-quote h2 text-white mb-0" />
                            </div>
                            <img className="img-fluid mt-4 ml-md-4 box-shadow" src={require(`../../assets/images/testimonial/01.jpg`)} alt="" />
                          </div>
                          <div className="col-md-7 ml-md-n5 mt-n5 mt-md-0">
                            <div className="testimonial style-3">
                              <div className="testimonial-content">
                                <p>Eeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt</p>
                              </div>
                              <div className="d-flex align-items-center">
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
                        </div>
                      </div>
                      <div className="item">
                        <div className="row no-gutters align-items-center">
                          <div className="col-md-5">
                            <div className="theme-bg text-center p-3 position-absolute z-index-1"><i className="flaticon-left-quote h2 text-white mb-0" />
                            </div>
                            <img className="img-fluid mt-4 ml-md-4 box-shadow" src={require(`../../assets/images/testimonial/02.jpg`)} alt="" />
                          </div>
                          <div className="col-md-7 ml-md-n5 mt-n5 mt-md-0">
                            <div className="testimonial style-3">
                              <div className="testimonial-content">
                                <p>Reasonable porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam tempora</p>
                              </div>
                              <div className="d-flex align-items-center">
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
                        </div>
                      </div>
                 
                
            </OwlCarousel>

        );
    }
}

export default Testimonial3;
