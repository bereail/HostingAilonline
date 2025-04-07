import React, { useState } from 'react';
import styles from './PreguntasFrecuentes.module.css';

const faqs = [
  { pregunta: '¿Cuánto tarda un sitio?', respuesta: 'Depende del tipo de sitio, pero generalmente entre 1 y 3 semanas.' },
  { pregunta: '¿Cómo es el proceso?', respuesta: 'Primero charlamos sobre tu idea, luego diseñamos y desarrollamos tu sitio paso a paso.' },
  { pregunta: '¿Aceptás pagos en cuotas?', respuesta: 'Sí, ofrecemos distintas formas de pago flexibles para adaptarnos a vos.' },
];

const PreguntasFrecuentes = () => {
  const [activa, setActiva] = useState(null);

  const togglePregunta = (index) => {
    setActiva(activa === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.titulo}>Preguntas Frecuentes</h2>
      <div className={styles.lista}>
        {faqs.map((item, index) => (
          <div key={index} className={styles.item}>
            <button
              className={styles.pregunta}
              onClick={() => togglePregunta(index)}
              aria-expanded={activa === index}
            >
              <span className={styles.icon}>{activa === index ? '–' : '+'}</span>
              <p>{item.pregunta}</p>
            </button>

            {activa === index && (
              <div className={styles.respuesta}>
                <p>{item.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
