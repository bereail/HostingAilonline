import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactInfo from '../../Data/ContactInfo';
import './contacto.css'
import FormularioContacto from '../../components/FormContacto/FormularioContacto';

const Contacto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  return (
    <section className='section-contacto' id="contacto">
      <div className='container-contacto '>
        <h1 className='title-contacto texto-parpadeante'>CONTÁCTANOS</h1>
        <div className='datos-contacto'>
          {/* Mapeo de los datos de contacto */}
          {ContactInfo.map((item, index) => (
            <p key={index}>
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>
      </div>
      <div className='container-contacto buttons-contacto'>
        <button className="btn btn-contactar" onClick={handleModalToggle}>
          Quiero que me contacten
        </button>
      </div>

      {isModalOpen && (<FormularioContacto handleModalToggle={handleModalToggle}/>)}

    </section>
  );
};

export default Contacto;