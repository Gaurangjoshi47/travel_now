import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', destination: '', date: '' });
    setSubmitted(false);
  };

  return (
    <div className="booking-container">
      {!submitted ? (
        <>
          <h2>Book Your Trip</h2>
          <form className="booking-form" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Destination
              <input
                type="text"
                name="destination"
                placeholder="Destination name"
                value={formData.destination}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Travel Date
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit">Submit Booking</button>
          </form>
        </>
      ) : (
        <div className="success-message">
          <h2>Booking Confirmed!</h2>
          <p>Thank you, <strong>{formData.name}</strong>! ✈️</p>
          <p>Your trip to <strong>{formData.destination}</strong> on <strong>{formData.date}</strong> has been booked.</p>
          <p>Confirmation sent to <strong>{formData.email}</strong>.</p>
          <button onClick={handleReset}>Book Another Trip</button>
        </div>
      )}
    </div>
  );
}

export default Booking;
