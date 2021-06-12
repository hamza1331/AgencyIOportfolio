import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TeamSection1 extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div className="row">
            <div className="col-md-4">
            <div className="team-member">
                <h5><Link to="#">Jesson<br />Mart</Link></h5>
                <div className="team-images">
                <img className="img-fluid" src={require(`../../assets/images/team/01.jpg`)} alt="" />
                </div>
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
            </div>
            <div className="col-md-4 mt-5 mt-md-0">
            <div className="team-member">
                <h5><Link to="#">Michael<br />Vegas</Link></h5>
                <div className="team-images">
                <img className="img-fluid" src={require(`../../assets/images/team/02.jpg`)} alt="" />
                </div>
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
            </div>
            <div className="col-md-4 mt-5 mt-md-0">
            <div className="team-member">
                <h5><Link to="#">Charlote<br />Kerry</Link></h5>
                <div className="team-images">
                <img className="img-fluid" src={require(`../../assets/images/team/03.jpg`)} alt="" />
                </div>
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
            </div>
            </div>  
        );
    }
}

export default TeamSection1;
