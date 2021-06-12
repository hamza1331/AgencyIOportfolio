import React, { Component } from 'react';
import Particles from "react-particles-js";

class ParticlesBg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            particlesOptions: {
                "particles": {
                  "number": {
                    "value": 10,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "random"
                  },
                  "shape": {
                    "type": "edge",
              
                    "polygon": {
                      "nb_sides": 6
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 1,
                    "random": !0,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 40,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 80,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                },
                "retina_detect": true
            }
        }
    }
    render() {
        return (
            <Particles id="particles-js" params={this.state.particlesOptions} />
        );
    }
}

export default ParticlesBg;