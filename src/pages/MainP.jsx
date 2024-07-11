import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "../css/MainP.css"
 

const MainP = () => {
  return (
    <div className="background">
      {/* Titulo principal */}
      <h1 className="borde">Bienvenidos a Plasmatech</h1>
      <h1 className="ola">Bienvenidos a Plasmatech</h1>
      {/* Imagen de logo */}
      <img src="src\img\logoplasma.jpeg" alt="" className="movtu"/>
      {/* Boton de redireccionamiento a la página de Login por medio de  atributo link */}
      <Link to="/Login">
        <Button variant="light" className="buttonsito" size="lg">---logeate o registrate Clickeando Aqui---</Button>
      </Link>
    </div>
  )
}

export default MainP;

