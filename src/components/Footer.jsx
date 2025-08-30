// components/Footer.jsx
import React from 'react';

const Footer = ({ changePage }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>
              <img src="/todo-svg.svg" alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2"/>
              TodoMaster
            </h5>
            <p>Your simple and effective task management solution.</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" onClick={() => changePage('home')}>
                  <i className="bi bi-caret-right me-1"></i>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={() => changePage('features')}>
                  <i className="bi bi-caret-right me-1"></i>
                  Features
                </a>
              </li>
              <li>
                <a href="#" onClick={() => changePage('about')}>
                  <i className="bi bi-caret-right me-1"></i>
                  About
                </a>
              </li>
              <li>
                <a href="#" onClick={() => changePage('contact')}>
                  <i className="bi bi-caret-right me-1"></i>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; {currentYear} <strong className='text-primary'>Todo-By-Haseeb</strong>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;