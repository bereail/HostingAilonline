// Nosotros.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nosotros.css';
import useObserver from '../../Hooks/useObserver';


function Nosotros() {
  const [isCardVisible, cardRef] = useObserver();

  const [isTitleVisible, setIsTitleVisible] = React.useState(false);

  React.useEffect(() => {
    // Hacer que el título se vuelva visible después de un tiempo
    const timer = setTimeout(() => {
      setIsTitleVisible(true);
    }, 500); // El título aparece después de 500ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-nosotros">

      <div className="banner-nosotros">
        <div className="banner-image"></div>
        <h3 className="text-overlay">
          <span className="sobre">SOBRE</span>
          <span className="nosotros">NOSOTROS</span>
        </h3>
      </div>


      <div className='quienes-somos'>
        <h3 className={`title-nosotros ${isTitleVisible ? 'animate' : ''}`}>
          ¿Quiénes Somos?
        </h3>

        <section
          className={`section descripcion-empresa ${isTitleVisible ? 'fadeIn' : ''}`}
        >
          <div
            ref={cardRef}
            className={`card-descripcion-empresa ${isCardVisible ? 'animate' : ''}`}
          >
            <p>
              <strong>ULTRACORR SAS</strong> es una Empresa dedicada la fabricación de Envases especiales y a dar soluciones de packaging sostenible.
            </p>
            <p>
              Nuestros productos y servicios están dirigidos tanto al mercado local como al internacional, buscando satisfacer las demandas de un público diverso y exigente, manteniendo un compromiso constante con la excelencia y la mejora continua.
            </p>
            <p>
              Nos distinguimos por nuestra calidad, eficiencia y precios competitivos, elementos que nos posicionan como una opción preferente en el mercado.
            </p>
            <p>Para ello ofrecemos una solución de alta calidad en el diseño y desarrollo de envases de cartón corrugado, con soluciones individuales para desafíos en el packaging de su Empresa.</p>
          </div>
          <button className="btn-contacto" onClick={() => {
            const contactoSection = document.getElementById('contacto');
            if (contactoSection) {
              contactoSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Contáctenos
          </button>
        </section>
      </div>
    </div>
  );
}

export default Nosotros;