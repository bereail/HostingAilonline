import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Para desplazamiento suave
import styles from './NavbarStyle.module.css';  // CSS Modules
import logo from '../../assets/img/logo.png';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'; // Renombrado para evitar conflicto


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { name: "Inicio", id: "Inicio" },
    { name: "Productos", id: "Productos" },
    { name: "Quienes Somos", id: "QuienesSomos" },
    { name: "Nuestros Clientes", id: "NuestrosClientes" },
    { name: "Contacto", id: "Contacto" },
  ];

  return (
    <BootstrapNavbar expand="lg" bg="dark" variant="dark" className={styles.navbar}>
      <Container>
        {/* Logo */}
        <BootstrapNavbar.Brand href="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </BootstrapNavbar.Brand>

        {/* Botón de menú en móviles */}
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {/* Menú de navegación */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav" className={menuOpen ? "show" : ""}>
          <Nav className="ms-auto">
            {sections.map((section) => (
              <Nav.Link key={section.id}>
                <ScrollLink
                  to={section.id}
                  smooth={true}
                  duration={500}
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
                >
                  {section.name}
                </ScrollLink>
              </Nav.Link>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
