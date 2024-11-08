import React, { useState } from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div class="section">
      <h2>Contacto</h2>
      <div class="section-content">
        <div class="contact-layout">
          <div class="contact-info">
            <div class="contact-photo"></div>
            <div class="contact-details">
              <p>Número: +51 977 382 912</p>
              <p>Email: arenasbandabrandon@gmail.com</p>
            </div>
            <div class="contacts">
            <a
              href="https://www.linkedin.com/in/brandon-stwuar-arenas-banda-b0b057248/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="contact" src="/imgs/linkedin.png" alt="Linkedin" />
            </a>
            <a
              href="https://github.com/BrandonArenas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="contact" src="/imgs/github.png" alt="Github" />
            </a>
          </div>
          </div>
          <form
            class="contact-form"
            action="https://formsubmit.co/2d4e867f122f55a277271eb3468c8178"
            method="POST"
          >
            <input type="hidden" name="_next" value="http://localhost:5173" />
            <input type="hidden" name="_captcha" value="false" />
            <div class="form-group">
              <label for="name">Nombre</label>
              <input type="text" id="name" name="name" required></input>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required></input>
            </div>
            <div class="form-group">
              <label for="subject">Asunto</label>
              <input type="text" id="subject" name="subject" required></input>
            </div>
            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" class="submit-button">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
