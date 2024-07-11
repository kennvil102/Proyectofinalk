import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../css/CarruselVertical.css"; // Importacion de estilos CSS

const CarruselVertical = () => {
  return (
    <div className="contenedor-carrusel"> {/* Contenedor principal del carrusel */}
      <Carousel indicators={false} controls={false} interval={2000} slide={true}> {/* Configuración del carrusel */}
        <Carousel.Item>
          <img
            className='d-block w-100' // Estilos de la imagen
            src='src\img\mision1.png' // Ruta de la imagen para la misión
            alt='1' // Texto alternativo para accesibilidad
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='src\img\valores.jpg' // Ruta de la imagen para los valores
            alt='2'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='src\img\vision.jpg' // Ruta de la imagen para la visión
            alt='3'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarruselVertical;
