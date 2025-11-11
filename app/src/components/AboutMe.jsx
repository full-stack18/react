import React from 'react';
import './AboutMe.css';
import profilePic from '../assets/sobremi.jpg';

const AboutMe = () => {
  return (
    <section className="about-me" id="sobre-mi">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">Sobre Mí</h2>
            <div className="title-underline"></div>
            
            <p className="about-description">
              Hola, soy Juan. Un apasionado desarrollador web full-stack con un amor
              por crear experiencias digitales extraordinarias. Mi viaje en el mundo
              del desarrollo comenzó con una curiosidad insaciable por entender
              cómo funcionaba la tecnología.
            </p>
            
            <p className="about-description">
              Me especializo en el desarrollo web moderno, utilizando tecnologías como
              React, Node.js, y las últimas herramientas del ecosistema JavaScript.
              Creo firmemente en el poder de la tecnología para transformar ideas en
              realidades impactantes.
            </p>

            <div className="skills-container">
              <h3>Mis Habilidades</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  </div>
                  <span className="skill-name">React</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  </div>
                  <span className="skill-name">JavaScript</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="JavaScript" />
                  </div>
                  <span className="skill-name">Java</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  </div>
                  <span className="skill-name">Node.js</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                  </div>
                  <span className="skill-name">HTML5</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                  </div>
                  <span className="skill-name">CSS3</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MongoDB" />
                  </div>
                  <span className="skill-name">Mysql</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                  </div>
                  <span className="skill-name">Git</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Git" />
                  </div>
                  <span className="skill-name">Docker</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image-container">
            <div className="image-wrapper">
              <img 
                src={profilePic} 
                alt="Juan Developer" 
                className="about-image"
              />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-decoration">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>
    </section>
  );
};

export default AboutMe;