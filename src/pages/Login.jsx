import { useState, useEffect } from "react";
import { getData } from "../services/Fetch-LG-RG/FGet";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Logeo.css";

const Login = () => {
  const [data, setData] = useState([]);  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const datoss = await getData();
      setData(datoss);
    }
    fetchData();
  }, []);

  function validar() {
    if (!email || email.trim() === "" || !password || password.trim() === "") {
      setAlert({ show: true, message: "Complete todos los campos!!!", variant: 'warning' });
      return false;
    }
    return true;
  }

  function inicioSesion() {
    if (!validar()) {
      return;
    }
    if (data) {
      const user = data.find((user) => user.email === email);
      if (user && user.password === password) {
        setAlert({ show: true, message: "Usuario autenticado", variant: 'success' });
        setTimeout(() => navigate("/Home"), 2000); //     
      } else {
        setAlert({ show: true, message: "Contraseña inválida", variant: 'danger' });
      }
    }
  }

  return (
    <div>
      {alert.show && (
        <Alert variant={alert.variant} onClose={() => setAlert({ ...alert, show: false })} dismissible className="custom-alert">
          {alert.message}
        </Alert>
      )}
      <div className="centrardiv">
        <div className="mover">
          <p className="moverprin">Bienvenido a PlasmaTech</p>
          <p>Introduzca sus datos</p>
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
          <Button onClick={inicioSesion} className="btncolor" variant="primary">
            Inicio Sesión
          </Button>
          <p className="moverp1">Regístrate acá</p>
          <p className="moverp2">👇👇👇</p>
          <Link to="/Register">
            <Button className="btncolor2" variant="secondary">
              Registro
            </Button>
          </Link>
        </div>
      </div>
      <div className="esqueletomov">
        <img src="src\img\Skeleton-Blueprint-min.png" alt="" />
      </div>
      <img src="src\img\AGC-544-removebg-preview.png" alt="" className="moving" />
      <img src="src\img\AGC-546-removebg-preview.png" alt="" className="moving2" />
    </div>
  );
};

export default Login;
