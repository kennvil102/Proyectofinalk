import { useState, useEffect } from "react";
import { getData } from "../services/Fetch-LG-RG/FGet"; // Importa la función para obtener datos del servidor
import { useNavigate } from "react-router-dom"; // Importa el hook de navegación de React Router
import { Link } from "react-router-dom"; // Importa el componente Link de React Router para la navegación
import { Button, Alert } from 'react-bootstrap'; // Importa componentes de botón y alerta de react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa estilos CSS de Bootstrap
import "../css/Logeo.css"; // Importa estilos CSS específicos para este componente


/*Aqui la funcion login que maneja los estados data, el correo , la contraseña*/
const Login = () => {
  const [data, setData] = useState([]);  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState(""); 
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' }); // Estado para manejar la alerta
  const navigate = useNavigate(); // parte del react router para poder navegar hacia otra pagina
  // el use effect que carga el componente una vez
  useEffect(() => {
    //  aqui esta la funcion asincrona que por medio del await getData obtiene los datos
    async function fetchData() {
      const datoss = await getData(); 
      setData(datoss); // Almacena los datos obtenidos cambia el estado 'data'
    }
    fetchData(); 
  }, []);

  function validar() {
    // Funcion para validar los campos de email y contraseña
    if (!email || email.trim() === "" || !password || password.trim() === "") {
      setAlert({ show: true, message: "Complete todos los campos!!!", variant: 'warning' });
      return false; 
    }
    return true; // si los campos estan llenos por el usuario se sigue a la funcion iniciar sesion
  }

  function inicioSesion() {
    // Funcion para iniciar sesision
    if (!validar()) { // Aqui valida si los campos de email y contraseña que no esten vacios
      return; //  
    }
    if (data) { // aqui valida si data existe o tiene algun valor
      const user = data.find((user) => user.email === email); //  aqui con el metodo find Busca al usuario con el email ingresado 
      if (user && user.password === password) { // Verifica si el usuario existe y la contraseña es correcta
        setAlert({ show: true, message: "Usuario autenticado", variant: 'success' });
        setTimeout(() => navigate("/Home"), 2000); //un SetTimeout va ir hacia home luego de 2 segundos
      } else {
        setAlert({ show: true, message: "Contraseña inválida", variant: 'danger' });
      }
    }
  }

  return (
    <div>
      {/* Muestra la alerta si 'alert.show' es verdadero */}
      {alert.show && (
        <Alert variant={alert.variant} onClose={() => setAlert({ ...alert, show: false })} dismissible className="custom-alert">
          {alert.message}
        </Alert>
      )}
      {/* Contenedor principal del formulario de inicio de sesión */}
      <div className="centrardiv">
        <div className="mover">
          <p className="moverprin">Bienvenido a PlasmaTech</p>
          <p>Introduzca sus datos</p>
          {/* Campos de email y contraseña */}
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Botón para iniciar sesión */}
          <Button onClick={inicioSesion} className="btncolor" variant="primary">
            Inicio Sesión
          </Button>
          {/* Enlace para registrarse */}
          <p className="moverp1">Regístrate acá</p>
          <p className="moverp2">👇👇👇</p>
          <Link to="/Register">
            <Button className="btncolor2" variant="secondary">
              Registro
            </Button>
          </Link>
        </div>
      </div>
      {/* imagenes */}
      <div className="esqueletomov">
        <img src="src\img\Skeleton-Blueprint-min.png" alt="" />
      </div>
       
      <img src="src\img\AGC-546-removebg-preview.png" alt="" className="moving2" />
      <img src="src\img\AGC-544-removebg-preview.png" alt="" className="moving" />
      <img src="src\img\pied.png" alt="" className="moving3" />
    </div>
  );
};

export default Login;
