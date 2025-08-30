// components/Contact.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    toast.success('Message sent successfully! We will get back to you soon.', {
      position: "top-right",
      autoClose: 4000,
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg animate__animated animate__fadeIn">
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4 text-gradient">Contact Us</h2>
              <p className="text-center mb-4">
                Have questions or feedback? We'd love to hear from you! Reach out to our team members directly.
              </p>
              
              <div className="row mb-5">
                <div className="col-md-3 col-sm-6 mb-4">
                  <div className="team-card text-center p-3 h-100">
                    <div className="team-img mb-3 mx-auto rounded-circle bg-primary d-flex align-items-center justify-content-center">
                      <i className="bi bi-person fs-3 text-light"></i>
                    </div>
                    <h5>Haseeb Shahzad</h5>
                    <p className="text-muted">Team Lead & Full Stack Developer</p>
                    <div className="contact-info">
                      <p className="mb-1">
                        <i className="bi bi-envelope me-2"></i>
                        haseebdev233@gmail.com
                      </p>
                      <p className="mb-0">
                        <i className="bi bi-telephone me-2"></i>
                        +923280515797
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-3 col-sm-6 mb-4">
                  <div className="team-card text-center p-3 h-100">
                    <div className="team-img mb-3 mx-auto rounded-circle bg-success d-flex align-items-center justify-content-center">
                      <i className="bi bi-person fs-3 text-light"></i>
                    </div>
                    <h5>Sajeel</h5>
                    <p className="text-muted">Frontend Developer</p>
                    <div className="contact-info">
                      <p className="mb-1">
                        <i className="bi bi-envelope me-2"></i>
                        sajeel@example.com
                      </p>
                      <p className="mb-0">
                        <i className="bi bi-telephone me-2"></i>
                        +923001234567
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-3 col-sm-6 mb-4">
                  <div className="team-card text-center p-3 h-100">
                    <div className="team-img mb-3 mx-auto rounded-circle bg-warning d-flex align-items-center justify-content-center">
                      <i className="bi bi-person fs-3 text-light"></i>
                    </div>
                    <h5>Hasnat</h5>
                    <p className="text-muted">UI/UX Designer</p>
                    <div className="contact-info">
                      <p className="mb-1">
                        <i className="bi bi-envelope me-2"></i>
                        hasnat@example.com
                      </p>
                      <p className="mb-0">
                        <i className="bi bi-telephone me-2"></i>
                        +923001234568
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-3 col-sm-6 mb-4">
                  <div className="team-card text-center p-3 h-100">
                    <div className="team-img mb-3 mx-auto rounded-circle bg-info d-flex align-items-center justify-content-center">
                      <i className="bi bi-person fs-3 text-light"></i>
                    </div>
                    <h5>Zohaib</h5>
                    <p className="text-muted">Backend Developer</p>
                    <div className="contact-info">
                      <p className="mb-1">
                        <i className="bi bi-envelope me-2"></i>
                        zohaib@example.com
                      </p>
                      <p className="mb-0">
                        <i className="bi bi-telephone me-2"></i>
                        +923001234569
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <h4 className="text-center mb-4">Send us a Message</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name" 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject of your message" 
                        required 
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5" 
                        placeholder="Your message" 
                        required
                      ></textarea>
                    </div>
                    
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-lg px-5">
                        <i className="bi bi-send me-2"></i>
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;