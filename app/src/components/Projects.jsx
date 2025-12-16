import React from 'react';
import './Projects.css';
import dashboardImage from '../assets/dashboard.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Dashboard con Login',
      description: 'Dashboard completo con autenticación de usuarios, login con Google integrado, panel de control en tiempo real. Desarrollado con PHP, Tailwind CSS y Bootstrap para estilos responsivos, con conexión a base de datos SQL para gestión de usuarios y datos.',
      tech: ['PHP', 'Tailwind CSS', 'Bootstrap', 'MySQL', 'Google OAuth'],
      image: dashboardImage,
      demo: 'https://webventas-juandev-php.xo.je/index.php',
      github: 'https://github.com/full-stack18/web-ventas'
    },
    {
      id: 2,
      title: 'Sistema de Reservas',
      description: 'Aplicación de reservas con calendario interactivo, gestión de disponibilidad, confirmación automática y notificaciones por email.',
      tech: ['React', 'Node.js', 'MongoDB', 'SendGrid'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
      demo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Red Social',
      description: 'Plataforma social con feed en tiempo real, sistema de likes y comentarios, búsqueda de usuarios y perfiles personalizables.',
      tech: ['React', 'Node.js', 'Socket.io', 'Redis'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      demo: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'App Clima',
      description: 'Aplicación de predicción del clima con geolocalización, búsqueda de ciudades, alertas de tiempo severo e historial de consultas.',
      tech: ['React', 'API Weather', 'Geolocation', 'Charts'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      demo: '#',
      github: '#'
    }
  ];

  return (
    <section className="projects" id="proyectos">
      <div className="projects-wrapper">
        <div className="projects-header">
          <h2 className="projects-title">Proyectos</h2>
          <div className="title-underline"></div>
          <p className="projects-subtitle">
            Aquí están algunos de mis proyectos destacados. Cada uno representa mi evolución como desarrollador
            y mi capacidad para crear soluciones innovadoras y funcionales.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-tags">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.demo} className="project-btn" target="_blank" rel="noreferrer">
                    Ver Demo
                  </a>
                  <a href={project.github} className="project-btn ghost" target="_blank" rel="noreferrer">
                    Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="background-decoration">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>
    </section>
  );
};

export default Projects;
