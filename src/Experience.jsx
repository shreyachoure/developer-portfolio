import React from "react";
import "./App.css";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="container my-5" id="experience">
      <h3 className="section-header my-3">Work Experience</h3>

      <div id="accordion">
        <div className="card">
          <div className="card-header py-4">
            <a className="card-link" data-toggle="collapse" href="#collapseOne">
              Associate System Engineer, IBM
            </a>
          </div>
          <div
            id="collapseOne"
            className="collapse show"
            data-parent="#accordion"
          >
            <div className="card-body">
              <ol>
                <li>
                  Collaborated with a team of 4 to maintain application for SAP
                  Support on WebMethods integration platform, handling the load
                  of 38000 transactions every day.
                </li>
                <li>
                  Optimized daily monitoring with Linux script and java code
                  optimization, bug resolving which reduced transaction failure
                  rate by 60%.
                </li>
                <li>
                  Developed and presented platform specific troubleshooting
                  documentation and codebook used for training 10 new hires.
                </li>
                <li>
                  Revamped software patching methodology and decreased system
                  downtime by 20% with customized scripts which improved quality
                  check by 25%.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="card my-3">
          <div className="card-header py-4">
            <a className="card-link" data-toggle="collapse" href="#collapseTwo">
              Fullstack Developer, Kerkar Media
            </a>
          </div>
          <div id="collapseTwo" className="collapse" data-parent="#accordion">
            <div className="card-body">
              <ol>
                <li>
                  Designed and developed mobile responsive web application for
                  Digital Marketing firm which included blogging, testimonials,
                  forms and resulted in 30% more customer satisfaction after
                  deploying the application.
                </li>
                <li>
                  Built an E-commerce specific application with online selling,
                  appointment booking, learning activities and live customer
                  support which boosted the company profit by 15%.
                </li>
                <li>
                  Created ad specific static templates and forms which increased
                  user involvement by 5% resulting engagement conversion rate to
                  8%.
                </li>
                <li>
                  Tested accessibility of web applications using multiple
                  approaches that boosted application experience by 10% and
                  helped to improve performance to 100.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
