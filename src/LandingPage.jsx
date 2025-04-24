import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./LandingPage.css";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <div className={`landing-container ${darkMode ? "dark-mode" : ""}`}>
      <header className="landing-header">
        <h1 className="landing-logo">CRJ INNOVATIONS</h1>
        <nav className="landing-nav">
          <a href="#about" className="nav-link">Sobre Nosotros</a>
          <a href="#services" className="nav-link">Servicios</a>
          <a href="#contact" className="nav-link">Contacto</a>
        </nav>
        <button className="toggle-dark" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
      </header>

      <motion.section 
        className="hero-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="hero-title">Impulsamos tus ideas con software de calidad</h2>
        <p className="hero-subtitle">Somos un equipo apasionado por la tecnología y el desarrollo de soluciones innovadoras.</p>
        <button className="hero-button">Contáctanos</button>
      </motion.section>

      <section id="about" className="about-section">
        <h3 className="section-title">Sobre Nosotros</h3>
        <p className="section-description">
          En CRJ INNOVATIONS, tres amigos unimos fuerzas para transformar ideas en soluciones digitales. Nuestra misión es ofrecer software de alta calidad que haga la diferencia.
        </p>
      </section>

      <section id="services" className="services-section">
        <h3 className="section-title">Servicios</h3>
        <div className="services-grid">
          <div className="service-card">
            <h4 className="service-title">Desarrollo Web</h4>
            <p>Aplicaciones modernas, rápidas y responsivas para cualquier necesidad empresarial.</p>
          </div>
          <div className="service-card">
            <h4 className="service-title">Software a Medida</h4>
            <p>Soluciones personalizadas que se adaptan perfectamente a tus procesos.</p>
          </div>
          <div className="service-card">
            <h4 className="service-title">Consultoría Tecnológica</h4>
            <p>Te asesoramos para elegir y aplicar la mejor tecnología en tus proyectos.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h3 className="section-title">Contacto</h3>
        <p className="section-description">¿Listo para trabajar con nosotros? ¡Escríbenos!</p>
        <div className="contact-button-container">
          <a href="mailto:crjinnovations@gmail.com" className="contact-button">crjinnovations@gmail.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-text">&copy; {new Date().getFullYear()} CRJ INNOVATIONS. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
