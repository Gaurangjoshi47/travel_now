import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Get in Touch</h3>
          <p><i className="fas fa-phone-alt"></i> +91 9876543210</p>
          <p><i className="fas fa-envelope"></i> contact@travelio.com</p>
          <p><i className="fas fa-location-dot"></i> Mumbai, India</p>
        </div>

        <div className="form-section">
          {submitted ? (
            <div className="success-message">✓ Message Sent Successfully!</div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
