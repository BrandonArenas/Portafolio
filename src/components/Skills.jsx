import React from "react";
import "../css/Skills.css";
import skillsData from "../json/Skills.json";

const Skills = () => {
  return (
    <div class="section">
      <h2>Habilidades</h2>
      <div class="section-content">
        <div class="skills-grid">
          {skillsData.Skills.map((skill) => (
            <div class="skill-item">
              <img src={skill.icono} alt={skill.nombre} />
              <span class="skill-name">{skill.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
