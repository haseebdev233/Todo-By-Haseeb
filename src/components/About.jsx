// components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg animate__animated animate__fadeIn">
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4 text-gradient">About Todo App</h2>
              
              <div className="row mb-5 align-items-center">
                <div className="col-md-6">
                  <h3>Our Mission</h3>
                  <p>
                    At Todo App, our mission is to help individuals and teams organize their tasks
                    efficiently, reduce stress, and boost productivity. We believe that a well-organized
                    task list is the first step toward achieving your goals.
                  </p>
                  <p>
                    Founded in 2023 by Haseeb Shahzad and his team, our app has helped thousands of users 
                    manage their daily tasks and accomplish more with less effort.
                  </p>
                  <button className="btn btn-primary mt-3">
                    <i className="bi bi-download me-2"></i>
                    Download Our App
                  </button>
                </div>
                <div className="col-md-6">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Productivity" 
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>
              
              <div className="mb-5">
                <h3 className="text-center mb-4">Why Choose Todo App?</h3>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="text-center feature-card p-4 h-100">
                      <div className="feature-icon mb-3 mx-auto">
                        <i className="bi bi-lightning-charge fs-1 text-primary"></i>
                      </div>
                      <h5>Simple & Intuitive</h5>
                      <p>Our clean interface makes task management effortless and enjoyable.</p>
                      <button className="btn btn-outline-primary btn-sm mt-2">Learn More</button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="text-center feature-card p-4 h-100">
                      <div className="feature-icon mb-3 mx-auto">
                        <i className="bi bi-shield-check fs-1 text-success"></i>
                      </div>
                      <h5>Reliable & Secure</h5>
                      <p>Your data is safe with us. We use encryption to protect your information.</p>
                      <button className="btn btn-outline-success btn-sm mt-2">Learn More</button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="text-center feature-card p-4 h-100">
                      <div className="feature-icon mb-3 mx-auto">
                        <i className="bi bi-phone fs-1 text-info"></i>
                      </div>
                      <h5>Accessible Everywhere</h5>
                      <p>Access your tasks from any device, anywhere, anytime.</p>
                      <button className="btn btn-outline-info btn-sm mt-2">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="team-section">
                <h3 className="text-center mb-4">Our Team</h3>
                <div className="row">
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card text-center h-100 team-card">
                      <div className="card-body">
                        <div className="team-img mb-3 mx-auto rounded-circle bg-primary d-flex align-items-center justify-content-center">
                          <i className="bi bi-person fs-3 text-light"></i>
                        </div>
                        <h5>Haseeb Shahzad</h5>
                        <p className="text-muted">Founder & Full Stack Developer</p>
                        <p>Product enthusiast with 10+ years in software development.</p>
                        <div className="social-links">
                          <a href="#" className="text-primary mx-1"><i className="bi bi-linkedin"></i></a>
                          <a href="#" className="text-info mx-1"><i className="bi bi-twitter"></i></a>
                          <a href="#" className="text-dark mx-1"><i className="bi bi-github"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card text-center h-100 team-card">
                      <div className="card-body">
                        <div className="team-img mb-3 mx-auto rounded-circle bg-success d-flex align-items-center justify-content-center">
                          <i className="bi bi-person fs-3 text-light"></i>
                        </div>
                        <h5>Sajeel</h5>
                        <p className="text-muted">Frontend Developer</p>
                        <p>Specialized in React and modern JavaScript frameworks.</p>
                        <div className="social-links">
                          <a href="#" className="text-primary mx-1"><i className="bi bi-linkedin"></i></a>
                          <a href="#" className="text-info mx-1"><i className="bi bi-twitter"></i></a>
                          <a href="#" className="text-dark mx-1"><i className="bi bi-github"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card text-center h-100 team-card">
                      <div className="card-body">
                        <div className="team-img mb-3 mx-auto rounded-circle bg-warning d-flex align-items-center justify-content-center">
                          <i className="bi bi-person fs-3 text-light"></i>
                        </div>
                        <h5>Hasnat</h5>
                        <p className="text-muted">UI/UX Designer</p>
                        <p>Creative designer focused on making productivity tools beautiful and functional.</p>
                        <div className="social-links">
                          <a href="#" className="text-primary mx-1"><i className="bi bi-linkedin"></i></a>
                          <a href="#" className="text-info mx-1"><i className="bi bi-twitter"></i></a>
                          <a href="#" className="text-dark mx-1"><i className="bi bi-github"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card text-center h-100 team-card">
                      <div className="card-body">
                        <div className="team-img mb-3 mx-auto rounded-circle bg-info d-flex align-items-center justify-content-center">
                          <i className="bi bi-person fs-3 text-light"></i>
                        </div>
                        <h5>Zohaib</h5>
                        <p className="text-muted">Backend Developer</p>
                        <p>Expert in database design and server-side architecture.</p>
                        <div className="social-links">
                          <a href="#" className="text-primary mx-1"><i className="bi bi-linkedin"></i></a>
                          <a href="#" className="text-info mx-1"><i className="bi bi-twitter"></i></a>
                          <a href="#" className="text-dark mx-1"><i className="bi bi-github"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;