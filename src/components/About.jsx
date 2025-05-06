import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div class="section">
      <h2>Sobre Mí</h2>
      <div class="section-content">
        Soy Brandon Arenas Banda, durante mi carrera técnica en desarrollo de
        software, he desarrollado varios proyectos en mis practicas que combinan
        desarrollo frontend y backend, buscando siempre mejorar mis habilidades
        y crear soluciones funcionales. Me apasiona el trabajo en equipo y la
        creación de aplicaciones fáciles de usar y bien estructuradas. Si estás
        interesado en colaborar o tienes alguna consulta, no dudes en
        contactarme.
      </div>
      <a
        href="/Portafolio/cv-pdf/cv-arenas-banda.pdf"
        target="_blank"
        class="cv-button"
      >
        Descargar CV
      </a>
    </div>
  );
};

export default About;
