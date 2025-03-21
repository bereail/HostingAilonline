import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import styles from './NavbarStyle.module.css';  
import logo from '../../assets/img/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Si hay un hash en la URL, desplazarse a la sección correspondiente
    if (location.hash) {
      const section = location.hash.substring(1);
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const sections = [
    { name: "Inicio", id: "Inicio" },
    { name: "Productos", id: "Productos" },
    { name: "Nuestros Clientes", id: "NuestrosClientes" },
    { name: "Contacto", id: "Contacto" },
  ];

  return (
    <nav
      className={`${styles.navbar} navbar navbar-expand-sm fixed-top ${
        scrolled ? styles.solid : styles.transparent
      }`}
    >
      <div className="container-fluid">
        <RouterLink to="/" className={styles["navbar-brand"]}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </RouterLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Enlace a Inicio */}
            <li className="nav-item">
              {location.pathname === "/" ? (
                <ScrollLink
                  className={`${styles["nav-link"]} nav-link`}
                  to="Inicio"
                  smooth={true}
                  duration={500}
                >
                  INICIO
                </ScrollLink>
              ) : (
                <RouterLink
                  to="/#Inicio"
                  className={`${styles["nav-link"]} nav-link`}
                >
                  INICIO
                </RouterLink>
              )}
            </li>

            {/* Enlace a Nosotros */}
            <li className="nav-item">
              <RouterLink
                to="/nosotros"
                className={`${styles["nav-link"]} nav-link`}
              >
                NOSOTROS
              </RouterLink>
            </li>

            {/* Enlaces dinámicos a las demás secciones */}
            {sections
              .filter((section) => section.name !== "Inicio")
              .map((section) => (
                <li className="nav-item" key={section.id}>
                  {location.pathname === "/" ? (
                    <ScrollLink
                      className={`${styles["nav-link"]} nav-link`}
                      to={section.id}
                      smooth={true}
                      duration={500}
                    >
                      {section.name.toUpperCase()}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={`/#${section.id}`}
                      className={`${styles["nav-link"]} nav-link`}
                    >
                      {section.name.toUpperCase()}
                    </RouterLink>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;