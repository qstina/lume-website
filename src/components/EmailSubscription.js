import React, { useState } from 'react';
import axios from 'axios';
import "./EmailSubscription.css"

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/subscribe', { email });
      setEmail(''); // Clear input after successful submission
      setSuccessMessage('Successfully subscribed!'); // Set success message
      // Add any success message or action here
    } catch (error) {
      // Handle error scenarios
    }
  };

  return (
    <div>
      <h2>Join our global community</h2>
      <p>Keep up-to-date with our latest product launches, epic stunts, and special offers.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default EmailSubscription;
