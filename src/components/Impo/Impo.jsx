import React, { useState, useEffect } from 'react';
import './Impo.css';
import profile_image from '../../assets/my_img.png';
import my_resume from '../../assets/my_resume.pdf';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Impo = () => {
  const [text, setText] = useState('');
  const staticText = "I’m Mohana Priya,";

  useEffect(() => {
    const fullText = " a Frontend Developer building clean, responsive web experiences.";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText((prev) => prev + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Slower speed: 100ms per letter

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="impo">
      <img src={profile_image} alt="Mohana Priya" />

      <h1>
        <span>
          {staticText}{text}
        </span>
      </h1>

      <p>
        I am a Front-End Developer passionate about modern web technologies, with a growing focus on Generative AI and Machine Learning.
      </p>

      <div className="impo-action">
        <a href="#contact" className="impo-connect">
          Connect With Me
        </a>
        <a href={my_resume} download="Mohana_Priya_Resume.pdf" className="impo-resume">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Impo;
