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
          <a className="nav-link" href="#features">Sobre mi</a>
          <a className="nav-link" href="#pricing">Proyectos</a>
          <a className="nav-link" href="#about">Random</a>
          <a className="nav-cta" href="#get-started">Get Started</a>
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
        <a className="mobile-link" href="#features" onClick={() => setOpen(false)}>Features</a>
        <a className="mobile-link" href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
        <a className="mobile-link" href="#about" onClick={() => setOpen(false)}>About</a>
        <a className="mobile-cta" href="#get-started" onClick={() => setOpen(false)}>Get Started</a>
      </div>
    </header>
  );
}
