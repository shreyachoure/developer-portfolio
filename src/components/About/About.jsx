import React from "react";
import "./About.css";
import "../../App.css";

const About = () => {
  return (
    <div className="container my-4" id="about">
      <div className="d-flex about row">
        <div className="main-intro col-lg-7 my-auto order-1.order-md-2">
          <h2>
            Hi There <span className="hand-wave">👋</span> I'm{" "}
            <span className="name">Shreya Choure!</span>
          </h2>
          <p className="my-2">
            Computer Science graduate student at Portland State University. With
            a strong passion in technology, I have developed deep understanding
            on programming fundamentals and software engineering principles.
          </p>

          <p className="my-2">
            I have developed projects demonstrating knowledge in Python,
            databases, web development and machine learning. I had an
            opportunity to work with IBM, India in Application Integration
            domain which helped to grow both personally and professionally.
          </p>
          <p className="my-2">
            As I prepare to graduate in March 2024, I am currently seeking
            full time or internship opportunities to apply skills in academic career and gain
            practical industry experience.
          </p>

          <p className="my-2">Connect with me on</p>
          <ul className="socials">
            <li className="social-item">
              <a href="mailto:schoure@pdx.edu" aria-label="gmail-link">
                <box-icon
                  className="social-logo"
                  type="logo"
                  name="gmail"
                  color="#D96846"
                  alt="gmail-logo"
                ></box-icon>
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/schoure98" aria-label="github-link">
                <box-icon
                  className="social-logo"
                  type="logo"
                  name="github"
                  color="#D96846"
                  alt="github logo"
                ></box-icon>
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/shreya-choure/"
                aria-label="linkedin-link"
              >
                <box-icon
                  className="social-logo"
                  type="logo"
                  name="linkedin"
                  color="#D96846"
                  alt="linkedin logo"
                ></box-icon>
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.instagram.com/shreyachoure/"
                aria-label="instagram-link"
              >
                <box-icon
                  className="social-logo"
                  type="logo"
                  name="instagram"
                  color="#D96846"
                  alt="instagram logo"
                ></box-icon>
              </a>
            </li>
          </ul>
        </div>
        <div className="col col-lg">
          <img
            className="developer-image"
            src={process.env.PUBLIC_URL + "/shreya.png"}
            alt="developer snapshot"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
