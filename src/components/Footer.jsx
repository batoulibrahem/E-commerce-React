import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient text-light pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Logo & Description */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">LA Collection</h5>
            <p className="text-light">
              Where elegance meets individuality. Discover timeless fashion curated just for you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Get in Touch</h6>
            <p className="mb-1">📍 Downtown, Damascus</p>
            <p className="mb-1">📞 +963 999 123 456</p>
            <p>📧 support@lacollection.com</p>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center text-light small">
          &copy; {new Date().getFullYear()} LA Collection. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
