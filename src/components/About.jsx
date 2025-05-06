import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div class="section">
      <h2>Sobre Mí</h2>
      <div class="section-content">
        Soy Brandon Stwuar Arenas Banda, un desarrollador con experiencia en el
        desarrollo de software. Durante mi carrera técnica en desarrollo de
        software, he desarrollado varios proyectos en mis practicas que combinan
        desarrollo frontend y backend, buscando siempre mejorar mis habilidades
        y crear soluciones funcionales. Me apasiona el trabajo en equipo y la
        creación de aplicaciones fáciles de usar y bien estructuradas. Si estás
        interesado en colaborar o tienes alguna consulta, no dudes en
        contactarme.
      </div>
      <a
        href="/public/cv_arenas_banda_brandon.pdf"
        target="_blank"
        class="cv-button"
      >
        Descargar CV
      </a>
    </div>
  );
};

export default About;
