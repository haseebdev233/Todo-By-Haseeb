// components/Features.jsx
import React from 'react';

const Features = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="text-center mb-5 animate__animated animate__fadeIn">
            <h2 className="text-gradient">Todo App Features</h2>
            <p className="lead">Discover how our app can transform your productivity</p>
            <button className="btn btn-primary btn-lg mt-3">
              <i className="bi bi-rocket-takeoff me-2"></i>
              Get Started Now
            </button>
          </div>
          
          <div className="row mb-5">
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm feature-card">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-plus-circle fs-1 text-primary"></i>
                  </div>
                  <h4>Add Tasks Easily</h4>
                  <p>Quickly add new tasks with titles, descriptions, and locations to keep everything organized.</p>
                  <button className="btn btn-outline-primary mt-3">Try It Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm feature-card">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-check2-square fs-1 text-success"></i>
                  </div>
                  <h4>Mark as Complete</h4>
                  <p>Check off tasks as you complete them and experience the satisfaction of progress.</p>
                  <button className="btn btn-outline-success mt-3">Try It Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm feature-card">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-pencil-square fs-1 text-info"></i>
                  </div>
                  <h4>Update Tasks</h4>
                  <p>Easily edit and update your tasks with our intuitive interface.</p>
                  <button className="btn btn-outline-info mt-3">Try It Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm feature-card">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-trash fs-1 text-danger"></i>
                  </div>
                  <h4>Delete Tasks</h4>
                  <p>Remove tasks you no longer need with a simple click to keep your list clean.</p>
                  <button className="btn btn-outline-danger mt-3">Try It Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm feature-card">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-filter fs-1 text-warning"></i>
                  </div>
                  <h4>Filter Tasks</h4>
                  <p>View all, active, or completed tasks to focus on what matters most at any moment.</p>
                  <button className="btn btn-outline-warning mt-3">Try It Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm feature-card">
                <div className="card-body text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-device-ssd fs-1 text-secondary"></i>
                  </div>
                  <h4>Local Storage</h4>
                  <p>Your tasks are saved in your browser, so they persist even after closing the app.</p>
                  <button className="btn btn-outline-secondary mt-3">Try It Now</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mb-5">
            <div className="col-md-8 mx-auto">
              <div className="card bg-primary text-white text-center py-5 border-0 shadow-lg">
                <div className="card-body">
                  <h3 className="mb-3">Ready to boost your productivity?</h3>
                  <p className="mb-4">Start using Todo App today and experience the difference</p>
                  <button className="btn btn-light btn-lg px-5">
                    <i className="bi bi-download me-2"></i>
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-10 mx-auto">
              <h3 className="text-center mb-4">Frequently Asked Questions</h3>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      Is Todo App free to use?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, Todo App is completely free to use with all its basic features. We may offer premium features in the future, but the core functionality will always remain free.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      How is my data stored?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Your tasks are stored locally in your browser's storage. This means your data never leaves your device unless you choose to sync it across devices (a feature we're working on).
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Can I use Todo App on multiple devices?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Currently, Todo App stores data locally on each device. We're developing a cloud sync feature that will allow you to access your tasks across all your devices. Stay tuned for updates!
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

export default Features;