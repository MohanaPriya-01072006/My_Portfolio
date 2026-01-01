import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "595ef3fd-0b4c-4032-b4a4-6ef873a65d30");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Error sending message");
      console.error(error);
    }
  };

  return (
    <div id="contact" className="contact">

      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">

        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available to take on new projects.
            Feel free to send me a message about anything you would like me to work on.
            You can contact me anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>mohanapriya903602@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 90802 13602</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter Your Name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter Your Email" required />

          <label>Your Message</label>
          <textarea name="message" rows="7" placeholder="Enter Your Message" required />

          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
