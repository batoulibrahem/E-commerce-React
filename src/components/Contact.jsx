import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
    
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Contact Us</h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Write your message here..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>

            <div className="mt-5">
              <h5 className="fw-bold">Reach Us Directly</h5>
              <p className="text-muted mb-1">📍 LA Collection HQ, Downtown</p>
              <p className="text-muted mb-1">📞 +1 (555) 123-4567</p>
              <p className="text-muted">📧 support@lacollection.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
