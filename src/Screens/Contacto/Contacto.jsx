import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contacto.module.css';

const Contacto = () => {
  const form = useRef();
  const [envioExitoso, setEnvioExitoso] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('Enviando email...');

    emailjs.sendForm(
      'service_7xq89yg',
      'template_dls7phe',
      form.current,
      'kxyvlF5YpE5OwJa5D'
    ).then(
      (result) => {
        console.log('✅ Éxito:', result.text);
        setEnvioExitoso(true); // <- mostrar mensaje de éxito
        form.current.reset();

        // Ocultamos el mensaje a los 4 segundos
        setTimeout(() => {
          setEnvioExitoso(false);
        }, 4000);
      },
      (error) => {
        console.error('❌ Error:', error.text);
        alert('❌ Hubo un error al enviar el mensaje.');
      }
    );
  };

  return (
    <section className={styles.contacto} id="contacto">
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Contacto</h2>
          <p>¿Tenés un proyecto en mente? Escribinos y hablemos.</p>
          <p>Respondemos rápido, con soluciones a tu medida.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className={styles.formulario}>
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="email" name="email" placeholder="Correo electrónico" required />
          <textarea name="message" rows="4" placeholder="Mensaje" required></textarea>
          <button type="submit">Enviar mensaje</button>

          {envioExitoso && (
            <div className={styles.successMessage}>
              ✅ ¡Gracias por contactarnos! Te responderemos pronto.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contacto;
