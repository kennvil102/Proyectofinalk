
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "../css/MainP.css"
 

const MainP = () => {
  return (
    <div className="background">
    <h1 className="borde">BIENVENIDOS A PLASMATECH</h1>
    <h1 className="ola">BIENVENIDOS A PLASMATECH</h1>
    <img src="src\img\logoplasma.jpeg" alt="" className="movtu"/>
    <Link to="/Login">
      <Button variant="light" className="buttonsito" size="lg">---Logeate o Registrate clickeando Aqui --- </Button>
    </Link>
  </div>
  )
}

export default MainP
