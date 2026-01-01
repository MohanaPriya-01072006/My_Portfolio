import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.png';

const About = () => {
  return (
    <div id='about' className="about">

      {/* Title */}
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      {/* Main Section */}
      <div className="about-section">

        {/* Left Image */}
        <div className="about-left">
          <img src={profile_img} alt="profile" />
        </div>

        {/* Right Content */}
        <div className="about-right">

          <div className="about-para">
            <p>
              I am Mohana Priya, a Computer Science Engineering student with a
              strong interest in frontend development and modern web
              technologies. I enjoy building clean, responsive, and user-friendly
              web applications.
            </p>
            <p>
              I am actively learning Machine Learning and Generative AI to
              enhance my projects with intelligent features. I am a quick
              learner, self-motivated, and eager to contribute to real-world
              projects in a professional environment.
            </p>
          </div>

          {/* Skills */}
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Machine Learning</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "75%" }} />
            </div>
          </div>

        </div>
      </div>

      {/* Achievements */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS & MINI PROJECTS</p>
        </div>

        <div className="divider"></div>

        <div className="about-achievement">
          <h1>5+</h1>
          <p>TECHNOLOGIES & TOOLS</p>
        </div>

        <div className="divider"></div>

        <div className="about-achievement">
          <h1>2+</h1>
          <p>INTERNSHIPS / TRAININGS</p>
        </div>
      </div>

    </div>
  );
};

export default About;
