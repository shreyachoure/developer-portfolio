import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";
import "../../App.css";

const Experience = () => {
  return (

    <section className="container my-5" id="experience">
      <h2 className="section-header">
        <span className="heading">Work Experience</span>
      </h2>
      <div id="accordion">
        <ExperienceCard title="Associate System Engineer, IBM" id="collapseOne">
          {
            <ul>
              <li>
              Contributed to a 4-member team at IBM to manage financial transactions for Panasonic, USA which involved optimizing Java based WebMethods SAP support integration.
              </li>
              <li>Implemented Python and Linux scripts to automate daily monitoring, error debugging and system reporting which reduced transaction failure rate by 38%.</li>
              <li>Established a training program for 10 new SDE hires consisting of troubleshooting documentation and codebook. </li>
              <li>Revamped software patching methodology to address performance bottlenecks resulting decrease in application downtime by 20% and improving quality assurance by 25%.</li>
            </ul>
          }
        </ExperienceCard>
        <ExperienceCard title="Fullstack Developer, Kerkar Media" id="collapseTwo">
          {
            <ul>
              <li>Built an e-commerce application implementing review system, payment gateway, and live customer support boosting company profit by 15%.</li>
              <li>Led marketing and ad-specific templates, forms for digital marketing brand enhancing user experience metrics and achieving an engagement conversion rate of 8%.</li>
              <li>Managed projects on AWS for quick secure access along with cost savings improving application experience by 10%.</li>
            </ul>
          }
        </ExperienceCard>
        <ExperienceCard title="Software Developer, Programming Hub" id="collapseThree">
          {
            <ul>
              <li>Designed and developed mobile responsive content management system for e-learning programming academy resulting in a 30% increase in customer satisfaction and compliance.</li>
              <li>Refactored PHP code to Vue.js for code maintainability and improved runtime performance by 18%.</li>

            </ul>
          }
        </ExperienceCard>
      </div>
    </section>


  );
};

export default Experience;
