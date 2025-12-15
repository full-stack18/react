import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo2.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className={`navbar ${open ? "is-open" : ""}`}>
      <div className="navbar-inner">
        <a className="brand" href="/">
          <img src={logo} alt="Logo" className="logo-icon" />
          <span className="brand-text">JUAN DEV</span>
        </a>

        <nav className="nav-links" role="navigation" aria-label="Main">
          <a className="nav-link" href="#sobre-mi">Sobre mí</a>
          <a className="nav-link" href="#proyectos">Proyectos</a>
          <a className="nav-link" href="#footer">Contacto</a>
          <a className="nav-cta" target="_blank" href="https://webventas-juandev-php.xo.je/registrar.php">Dashboard</a>
        </nav>

        <button
          className={`hamburger ${open ? "active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* Mobile slide panel */}
      <div className="mobile-panel" aria-hidden={!open}>
        <a className="mobile-link" href="#sobre-mi" onClick={() => setOpen(false)}>Sobre mí</a>
        <a className="mobile-link" href="#proyectos" onClick={() => setOpen(false)}>Proyectos</a>
        <a className="mobile-link" href="#footer" onClick={() => setOpen(false)}>Contacto</a>
        <a className="mobile-cta" href="#get-started" onClick={() => setOpen(false)}>Dashboard</a>
      </div>
    </header>
  );
}
