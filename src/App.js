import React from 'react';
import Inicio from './Screens/Inicio/Inicio';
import Servicios from './Screens/Servicios/Servicios';
import PreguntasFrecuentes from './Screens/PreguntasFrecuentes/PreguntasFrecuentes';
import Contacto from './Screens/Contacto/Contacto';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Inicio />
      <Servicios />
      <PreguntasFrecuentes />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
