import { useState, useEffect } from "react";
import { getData } from "../services/Fetch-LG-RG/FGet"; // Importa la función para obtener datos del servidor
import { useNavigate } from "react-router-dom"; // Importa el hook de navegación de React Router
import { Link } from "react-router-dom"; // Importa el componente Link de React Router para la navegación
import { Button, Alert } from 'react-bootstrap'; // Importa componentes de botón y alerta de react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa estilos CSS de Bootstrap
import "../css/Logeo.css"; // Importa estilos CSS específicos para este componente

const Login = () => {
  const [data, setData] = useState([]); // Estado para almacenar los datos obtenidos del servidor
  const [email, setEmail] = useState(""); // Estado para almacenar el valor del campo email
  const [password, setPassword] = useState(""); // Estado para almacenar el valor del campo contraseña
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' }); // Estado para manejar la alerta
  const navigate = useNavigate(); // Hook de React Router para la navegación

  useEffect(() => {
    // Efecto para obtener los datos del servidor al cargar el componente
    async function fetchData() {
      const datoss = await getData(); // Llama a la función getData para obtener los datos
      setData(datoss); // Almacena los datos obtenidos en el estado 'data'
    }
    fetchData(); // Llama a la funcion fetchData al montar el componente
  }, []);

  function validar() {
    // Funcion para validar los campos de email y contraseña
    if (!email || email.trim() === "" || !password || password.trim() === "") {
      setAlert({ show: true, message: "Complete todos los campos!!!", variant: 'warning' });
      return false; // Retorna falso si alguno de los campos está vacío o no válido
    }
    return true; // Retorna verdadero si ambos campos están completos
  }

  function inicioSesion() {
    // Funcion para iniciar sesion
    if (!validar()) {
      return; // Retorna si la validación de campos no es exitosa
    }
    if (data) {
      const user = data.find((user) => user.email === email); // Busca al usuario con el email ingresado
      if (user && user.password === password) { // Verifica si el usuario existe y la contraseña es correcta
        setAlert({ show: true, message: "Usuario autenticado", variant: 'success' });
        setTimeout(() => navigate("/Home"), 2000); // Redirige a la página de inicio después de 2 segundos
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
      <img src="src\img\AGC-544-removebg-preview.png" alt="" className="moving" />
      <img src="src\img\AGC-546-removebg-preview.png" alt="" className="moving2" />
    </div>
  );
};

export default Login;
