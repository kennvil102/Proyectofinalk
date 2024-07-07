import "../css/AboutUs.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="moverli">
        <ul>
          <li><h3>Misión</h3></li>
          <li><h3>Visión</h3></li>
          <li><h3>Valores</h3></li>
        </ul>
      </div>
      <Button variant="primary">Click me</Button>
    </div>
  );
}

export default AboutUs;
