import './Footer.css';
import user_icon from '../../assets/user_icon.svg';

import linkedin_icon from '../../assets/linkedin_icon.svg';
import github_icon from '../../assets/github_icon.svg';
import huggingface_icon from '../../assets/huggingface_icon.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">

        {/* Brand Section */}
        <div className="footer-top-left">
          <div className="footer-logo"><h1>Priya</h1></div>
          <p>
            I am a frontend developer from Tamil Nadu, India, crafting clean,
            responsive, and user-focused web experiences.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-top-center">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Skills</a></li>
            <li><a href="#work">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact Section */}
        <div className="footer-top-right">
          <h3>Follow Me</h3>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/mohanapriya-cse" target="_blank" rel="noopener noreferrer">
              <img src={linkedin_icon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/MohanaPriya-01072006" target="_blank" rel="noopener noreferrer">
              <img src={github_icon} alt="GitHub" />
            </a>
            <a href="https://huggingface.co/MohanaPriya200" target="_blank" rel="noopener noreferrer">
              <img src={huggingface_icon} alt="Hugging Face" />
            </a>
          </div>
          <p className="footer-email-text">mohanapriya903602@gmail.com</p>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Mohana Priya. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
