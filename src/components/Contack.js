import React, { Component } from 'react';
 
import './Contack.css';

class Contact extends Component {
     

     

    render() {
        return (
            <div className="contact-container">
                <div className="container py-5">
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <form  >
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name"   required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email"   required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Write Your Message</label>
                            <textarea className="form-control" id="message" placeholder="Enter your message" rows="4"   required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
