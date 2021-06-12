import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactForm1 from '../../widgets/contactform/ContactForm1';
import Pageheading from '../../widgets/Pageheading';

class Contact2 extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    render() {
        return (
          <div>
          {/*page title start*/}
          <Pageheading foldername={"Contact us"} title={"Contact Us 2"} />
          {/*page title end*/} 
          {/*body content start*/}
          <div id="main-page" className="page-content">
            {/*contact start*/}
            <section>
              <div className="container">
                <div className="row align-items-end">
                  <div className="col text-center">
                    <div className="section-title">
                      <h6>Contact Us</h6>
                      <h2 className="title">Let's Start <span>Conversation</span></h2>
                      <p>Get in touch and let us know how we can help. Fill out the form and we’ll be in touch as soon as possible.</p>
                    </div>
                    <ContactForm1 />
                  </div>
                </div>
                <div className="row mt-5 no-gutters">
                  <div className="col-md-5">
                    <div className="dark-bg px-5 py-8 contact-info pos-r"> <i className="flaticon-support" />
                      <div className="contact-media mb-4"> <i className="flaticon-location" />
                        <h6>Address:</h6>
                        <span>423B, Road Wordwide Country, USA</span>
                      </div>
                      <div className="contact-media mb-4"> <i className="flaticon-email" />
                        <h6>Email Us</h6>
                        <Link to="mailto:skytouchinfotech01@gmail.com"> skytouchinfotech01@gmail.com</Link>
                      </div>
                      <div className="contact-media"> <i className="flaticon-support-1" />
                        <h6>Call Us</h6>
                        <Link to="tel:+912345678900">+91-234-567-8900</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="map h-100">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181602!2d144.95373631539215!3d-37.8172139797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1497005461921" allowFullScreen />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*contact end*/}
          </div>
          {/*body content end*/}
        </div>
          );
    }
}

export default Contact2;