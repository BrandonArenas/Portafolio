import React from "react";
import "../css/Projects.css";
import projectsData from "../json/Projects.json";

const Projects = () => {
  return (
    <div className="section">
      <h2>Proyectos</h2>
      <div className="section-content">
        <div className="projects-grid">
          {projectsData.Projects.map((project, index) => (
            <div className="project-card">
              <div className="project-title">{project.name}</div>
              <div className="project-description">{project.description}</div>
              <div className="project-link">
                {project.link && (
                  <a
                    href={project.urllink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={project.link} alt="Imagen Link" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.urlgithub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={project.github} alt="Imagen Github" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
