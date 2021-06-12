import React, { Component } from 'react';

class ContactForm1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="contact-main">
                <form id="contact-form" className="row" method="post" action="php/contact.php">
                    <div className="messages" />
                    <div className="form-group col-md-6">
                        <input id="form_name" type="text" name="firstname" className="form-control" placeholder="First Name" required="required" data-error="Name is required." />
                        <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6">
                        <input id="form_name1" type="text" name="lastname" className="form-control" placeholder="Last Name" required="required" data-error="Name is required." />
                        <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6">
                        <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                        <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6">
                        <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone" required="required" data-error="Phone is required" />
                        <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-12">
                        <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows={4} required="required" data-error="Please,leave us a message." defaultValue={""} />
                        <div className="help-block with-errors" />
                    </div>
                    <div className="col-md-12 mt-4">
                        <button className="btn btn-theme"><span>Send Messages <i className="far fa-paper-plane ml-2" /></span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm1;