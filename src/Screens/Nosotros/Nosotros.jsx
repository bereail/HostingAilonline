import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nosotros.css';
import useObserver from '../../Hooks/useObserver';
import FormularioContacto from '../../components/FormContacto/FormularioContacto';

function Nosotros() {
  const [isCardVisible, cardRef] = useObserver();
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTitleVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Nosotros">
      <div className="banner-nosotros">
        <div className="banner-image"></div>
        <h3 className="text-overlay">
          <span className="nosotros">NOSOTROS</span>
        </h3>
      </div>

      <div className='nosotros'>
        <h3 className={`title-nosotros ${isTitleVisible ? 'animate' : ''}`}>
          TITULO
        </h3>

        <section className={`section descripcion-empresa ${isTitleVisible ? 'fadeIn' : ''}`}>
          <div ref={cardRef} className={`card-descripcion-empresa ${isCardVisible ? 'animate' : ''}`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis consectetur, iusto ab enim hic perferendis a doloremque, facilis tempore alias vitae dolorem debitis odit beatae cupiditate officia tempora illum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quas necessitatibus fuga aspernatur quisquam vero sequi ipsa repellat rerum, ut sunt enim illo molestias a nam praesentium fugit, quaerat architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quos, aliquid blanditiis soluta non magni magnam unde accusantium nulla sed, itaque nemo nesciunt nostrum corrupti illo doloribus natus adipisci aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi id ipsam eaque! A repudiandae quos ipsam inventore amet non eaque quaerat deleniti quam quae fugiat voluptate numquam, deserunt ut..
            </p>
          </div>

          <button
            className="btn-contacto"
            onClick={() => {
              const contactoSection = document.getElementById('contacto');
              if (contactoSection) {
                contactoSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <div className='container-contacto buttons-contacto'>
              <button className="btn btn-contactar" onClick={handleModalToggle}>
                Quiero que me contacten
              </button>
            </div>
          </button>
        </section>
      </div>

      {isModalOpen && <FormularioContacto handleModalToggle={handleModalToggle} />}
    </div>
  );
}

export default Nosotros;
