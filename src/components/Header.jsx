import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <div class="profile-header">
      <div class="profile-banner">
        <div class="profile-avatar"></div>
      </div>
      <div class="profile-info">
        <div class="username">Brandon Stwuar Arenas Banda</div>
        <div class="tag">Desarrollo de software</div>
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
    </div>
  );
};

export default Header;
