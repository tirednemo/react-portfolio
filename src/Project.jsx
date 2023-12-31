import React from "react";

import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} loading="lazy" className="project-pic" />
      <h3 className="project-title">{project.name}</h3>
      <p className="project-details">{project.description}</p>
      <a className="project-details" href={project.github}>Source&emsp;</a>
      <a className="project-details" href={project.figma}>Demo</a>
    </div>
  );
};

export default Project;
