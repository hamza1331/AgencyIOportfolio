import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TeamSection4 extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div className="row">
            <div className="col-md-4 col-12">
              <div className="team-member style-3">
                <div className="team-images">
                  <img className="img-fluid" src={require(`../../assets/images/team/01.jpg`)} alt="" />
                  <div className="team-social-icon">
                    <ul>
                      <li><Link to="/"><i className="fab fa-facebook-f" /></Link>
                      </li>
                      <li><Link to="/"><i className="fab fa-twitter" /></Link>
                      </li>
                      <li><Link to="/"><i className="fab fa-google-plus-g" /></Link>
                      </li>
                      <li><Link to="/"><i className="fab fa-linkedin-in" /></Link>
                      </li>
                    </ul>
                  </div>
                </div>          
                <div className="team-description">
                  <h5><Link to="#">Jesson Mart</Link></h5>
                  <span>Advisor</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mt-5 mt-md-0">
              <div className="team-member style-3">
                <div className="team-images">
                  <img className="img-fluid" src={require(`../../assets/images/team/02.jpg`)} alt="" />
                  <div className="team-social-icon">
                    <ul>
                      <li><Link to="/"><i className="fab fa-facebook-f" /></Link>
                      </li>
                      <li><Link to="/"><i className="fab fa-twitter" /></Link>
                      </li>
                      <li><Link to="/"><i className="fab fa-google-plus-g" /></Link>
                      </li>
                      <li><Link to="/"><i className="fab fa-linkedin-in" /></Link>
                      </li>
                    </ul>
                  </div>
                </div>          
                <div className="team-description">
                  <h5><Link to="#">Jesson Mart</Link></h5>
                  <span>Advisor</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mt-5 mt-md-0">
              <div className="team-member style-3">
                <div className="team-images">
                  <img className="img-fluid" src={require(`../../assets/images/team/03.jpg`)} alt="" />
                  <div className="team-social-icon">
                    <ul>
                      <li><Link to="/"><i className="fab fa-facebook-f" /></Link>
                      </li>
                      <li><Link to="/"><i className="fab fa-twitter" /></Link>
                      </li>
                      <li><Link to="/"><i className="fab fa-google-plus-g" /></Link>
                      </li>
                      <li><Link to="/"><i className="fab fa-linkedin-in" /></Link>
                      </li>
                    </ul>
                  </div>
                </div>          
                <div className="team-description">
                  <h5><Link to="#">Jesson Mart</Link></h5>
                  <span>Advisor</span>
                </div>
              </div>
            </div>
          </div>
      
        );
    }
}

export default TeamSection4;
