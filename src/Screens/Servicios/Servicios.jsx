import React from 'react';
import styles from './Servicios.module.css';
import { FaLaptopCode, FaMobileAlt, FaShoppingBag, FaChartLine } from 'react-icons/fa';

const Servicios = () => {
  return (
    <section className={styles.serviciosSection}>
      <h2 className={styles.titulo}>SERVICIOS</h2>
      <div className={styles.grid}>
      <div className={styles.servicio}>
  <FaLaptopCode className={styles.icono} aria-label="Diseño web personalizado" />
  <h3>Diseño web personalizado</h3>
</div>

        <div className={styles.servicio}>
          <FaMobileAlt className={styles.icono} />
          <p>Desarrollo responsive</p>
        </div>
        <div className={styles.servicio}>
          <FaShoppingBag className={styles.icono} />
          <p>Tiendas online</p>
        </div>
        <div className={styles.servicio}>
          <FaChartLine className={styles.icono} />
          <p>Optimización SEO</p>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
