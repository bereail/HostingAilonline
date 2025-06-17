import React from 'react';
import styles from './Inicio.module.css';

function Inicio() {
  return (
    <section className={styles.inicioSection}>
      <h1 className={styles.inicioTitle}>
        <span className={styles.inicioSloganParte1}>TU WEB.</span>
        <span className={styles.inicioSloganParte2}>A TU MANERA</span>
      </h1>
      <div className={styles.inicioDescription}>
  <p>Diseñamos páginas web modernas y profesionales para emprendedores como vos. Tu marca merece destacarse online.</p>
</div>

<a href="#contacto" aria-label="Ir a sección de contacto" className={styles.inicioButtonNaranja}>
  EMPECEMOS &gt;
</a>

    </section>
  );
}

export default Inicio;
