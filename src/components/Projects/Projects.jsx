import React from "react";
import { ProjectData } from "./ProjectData";
import "../../App.css";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="container my-5" id="projects">
      <h3 className="section-header my-3">Projects</h3>
      <div className="project-container">
        {ProjectData.map((project) => (
          <div className="project-card card">
            <img
              alt="project"
              className="project-image card-img-top"
              src={project.image}
            />

            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="project-desc card-text">{project.description}</p>
              <a className="github-project card-link" href={project.github}>
                Github Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
