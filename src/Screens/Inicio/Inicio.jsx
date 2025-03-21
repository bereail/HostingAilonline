import React from 'react';
import styles from './Inicio.module.css';

function Inicio() {
  return (
    <section className={styles.inicioSection}>
      <div className={styles.inicioOverlay}></div>
      <div className={styles.inicioContent}>
        <h1 className={styles.inicioTitle}>
          <span className={styles.inicioSlogan}>SITIO EN CONSTRUCIÓN</span>
        </h1>
        <p className={styles.inicioParagraphExplora}>
        Descripción
       </p>
      </div>
    </section>
  );
}

export default Inicio;