import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Furniture</h3>
        <ul>
          <li>Home Furniture</li>
          <li>Office Furniture</li>
          <li>Mattress</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <Link to="/about">About Nilkamal</Link>
          <li style={{ pointerEvents: "none", cursor: "not-allowed" }}>
            Social Impact
          </li>
          <li>Contact Us</li>
          <li>FAQ's</li>
          <li>Feedback</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Help</h3>
        <ul>
          <li>Shipping & Delivery</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Franchise Enquiry</li>
          <li>Purchase & Returns</li>
          <li>Downloads</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Support</h3>
        <p>1800 1219 115</p>
        <p>Available 7 days a week from 10:00 am - 7:00 pm</p>
        <p>
          Email:{" "}
          <a href="mailto:furniture.enquiry@nilkamal.com">
            furniture.enquiry@nilkamal.com
          </a>
        </p>
        <p>
          Address: 77/78, Nilkamal House, 14th Street, MIDC Road, Andheri
          (East), Mumbai - 400 093
        </p>
      </div>

      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="footer-icons">
          {" "}
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>Copyright © 2025 Nilkamal Furniture. All Rights Reserved.</p>
      </div>
      <div className="payment-options d-flex">
        <span>We Accept Secure Payment</span>
        <p>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-google-play"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
