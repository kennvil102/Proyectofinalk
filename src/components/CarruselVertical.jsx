import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../css/CarruselVertical.css";

const CarruselVertical = () => {
  return (
    <div className="contenedor-carrusel">
      <Carousel indicators={false} controls={false} interval={2000} slide={true} >
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='src\img\mision1.png'
            alt='1'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='src\img\valores.jpg'
            alt='2'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='src\img\vision.jpg'
            alt='3'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarruselVertical;
