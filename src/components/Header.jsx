import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__branding">
  <img src={require("../assets/logo.png")} alt="Site Icon" className="header__icon" />
  <div className="header__logo">TANMAY</div>
</div>

      <nav className="header__nav">
  <a href="#about" className="nav__link">About</a>
  <a href="#skills" className="nav__link">Skills</a>
  <a href="#work-experience" className="nav__link">Experience</a>
  <a href="#academic-activities" className="nav__link">Education</a>
  <a href="#projects" className="nav__link">Projects</a>
  <a href="#contact" className="nav__link">Contact</a>
  <a href="#blog" className="nav__link">Blog</a>
</nav>
    </header>
  );
}
