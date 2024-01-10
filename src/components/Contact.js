import React from 'react';
import "./Contact.css";

export default function FormCarry() {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>CONTACT US</h1>
      </header>
      <section className="formcarry-container">
        <form action="https://formcarry.com/s/q2hBfjg_awY" method="POST" encType="multipart/form-data">
          <div className="formcarry-block">
            <label htmlFor="fc-generated-1-name">Full Name</label>
            <input type="text" name="name" id="fc-generated-1-name" placeholder="Your first and last name" />
          </div>
          
          <div className="formcarry-block">
            <label htmlFor="fc-generated-1-email">Your Email Address</label>
            <input type="email" name="email" id="fc-generated-1-email" placeholder="john@doe.com" />
          </div>
          
          <div className="formcarry-block">
            <label htmlFor="fc-generated-1-message">Your message</label>
            <textarea name="message" id="fc-generated-1-message" placeholder="Enter your message..."></textarea>
          </div>
          
          <div className="formcarry-block">  
            <button type="submit">Send</button>
          </div>
        </form>
      </section>
      <footer className="contact-footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}
