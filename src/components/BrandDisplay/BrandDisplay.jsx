// src/components/BrandDisplay.js
import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Brands from "../../Data/Brands";
import './BrandDisplay.css';


// Componente BrandDisplay para mostrar el carrusel de marcas
const BrandDisplay = () => {
  return (
    <Container className="text-center my-5">{/* Contenedor con clases de Bootstrap para centrar el contenido y dar márgenes */}
      <h2 className="mb-4">EMPRESAS QUE CONFÍAN EN NOSOTROS</h2>    {/* Componente Swiper para el carrusel */}
      <Swiper
        modules={[Navigation, Autoplay]}  // Usamos los módulos Navigation y Autoplay de Swiper
        navigation={true}  // Habilitamos las flechas de navegación
        autoplay={{ delay: 3000, disableOnInteraction: false }}  // Habilitamos el autoplay con un retraso de 3 segundos
        slidesPerView={5}  // Número inicial de diapositivas visibles
        grid={{ rows: 2, fill: "row" }}  // Dividimos las diapositivas en 2 filas
        spaceBetween={20}  // Espacio entre las diapositivas
        breakpoints={{  // Ajustamos el número de diapositivas visibles según el tamaño de la pantalla
          320: { slidesPerView: 2 },  // En pantallas pequeñas (320px), se ven 2 diapositivas
          576: { slidesPerView: 3 },  // En pantallas medianas (576px), se ven 3 diapositivas
          768: { slidesPerView: 4 },  // En pantallas más grandes (768px), se ven 4 diapositivas
          1024: { slidesPerView: 6 }  // En pantallas grandes (1024px), se ven 6 diapositivas
        }}
      >
        {/* Mapeamos las marcas y creamos un SwiperSlide para cada una */}
        {Brands.map((brand, index) => (
          <SwiperSlide key={index}>  {/* Cada diapositiva de marca */}
            <img
              src={brand.logo}  // Mostramos el logo de la marca
              alt={`Logo de ${brand.nombre}`}  // Texto alternativo para la imagen
              className="client-logo img-fluid"  // Clase CSS para el estilo de la imagen
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default BrandDisplay;