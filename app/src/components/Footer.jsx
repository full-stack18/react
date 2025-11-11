import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>JUAN DEV</h3>
          <p>Transformando ideas en experiencias digitales extraordinarias.</p>
          <div className="social-links">
            <a href="https://github.com/full-stack18" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/chaupin-sota-juan-pedro-2bb916332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://web.facebook.com/juanpedro.chaupinsota.9" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/juan.pc_21?igsh=MXFnOGlxaDU5cDE2cQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#sobre-mi">Sobre Mi</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#random">Random</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contacto</h4>
          <ul>
            <li>📍 Cañete San Vicente, Perú</li>
            <li>📧 2411020036@undc.edu.pe</li>
            <li>📱 Discord: usuario#0000</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JUAN DEV. Todos los derechos reservados.</p>
        <div className="footer-bottom-links">
          <a href="/privacidad">Privacidad</a>
          <a href="/terminos">Términos</a>
        </div>
      </div>
    </footer>
  );
}