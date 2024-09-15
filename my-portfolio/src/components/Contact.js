import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <h1>Contact Me</h1>
      <p>If you’d like to get in touch, feel free to reach out!</p>
      <div className="contact-details">
        <p><i className="fas fa-envelope"></i><strong>Email:</strong> ivychakraborty428@gmail.com</p>
        <p><i className="fab fa-linkedin"></i><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rupsa-chakraborty-902257256/" target="_blank" rel="noopener noreferrer">linkedin.com/in/rupsa-chakraborty</a></p>
        <p><i className="fab fa-github"></i><strong>GitHub:</strong> <a href="https://github.com/csana004" target="_blank" rel="noopener noreferrer">github.com/csana004</a></p>
      </div>
    </section>
  );
}

export default Contact;