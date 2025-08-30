// components/Header.jsx
import React, { useState, useEffect } from 'react';

const Header = ({ currentPage, changePage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#" onClick={() => changePage('home')}>
            <img src="/todo-svg.svg" alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2 mt-1"/>
            <span className="brand-text">TodoMaster</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} href="#" onClick={() => changePage('home')}>
                  <i className="bi bi-house me-1"></i>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${currentPage === 'features' ? 'active' : ''}`} href="#" onClick={() => changePage('features')}>
                  <i className="bi bi-star me-1"></i>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${currentPage === 'about' ? 'active' : ''}`} href="#" onClick={() => changePage('about')}>
                  <i className="bi bi-info-circle me-1"></i>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`} href="#" onClick={() => changePage('contact')}>
                  <i className="bi bi-envelope me-1"></i>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;