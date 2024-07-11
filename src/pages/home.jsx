import { Link } from "react-router-dom"; // Importa el componente Link de React Router para la navegación
import { Carousel } from 'react-bootstrap'; // Importa el componente Carousel de react-bootstrap para mostrar imágenes en carrusel
import "../css/Home.css"; // Importa estilos CSS específicos para este componente

const Home = () => {
  return (
    <div>
      {/* Banner principal del sitio */}
      <div className="banner"></div>
      
      {/* Barra de navegación */}
      <div className="Posicion">
        <ul className="moverlins">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/AboutUs">AboutUs</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </div>

      {/* Contenedor del carrusel */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\img\NuestroProducts.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\img\imagendhs.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="\src\img\imagental.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\img\imagenolecranon.jpg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
