import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import "../css/Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner"></div>
      <div className="Posicion">
        <ul className="moverlins">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/AboutUs">AboutUs</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </div>

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
