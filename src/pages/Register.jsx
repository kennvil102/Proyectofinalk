import React, { useState } from "react";
import { postData } from "../services/Fetch-LG-RG/FPost"; // Importa la función postData desde el servicio de registro
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate desde react-router-dom
import { Button } from 'react-bootstrap'; // Importa el componente Button de react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de bootstrap
import "../css/Registro.css"; // Importa los estilos CSS personalizados

const Register = () => {
  const [email, setEmail] = useState(""); // Estado para el email
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const navigate = useNavigate(); // Obtiene la función de navegación de react-router-dom

  function registro() {
    async function datos() {
      // Función asíncrona para enviar los datos de registro
      let regis = await postData(email, password); // Llama a la función postData para registrar el usuario
      if (regis && regis.email && regis.password) {
        // Si el registro fue exitoso
        alert("Usuario registrado exitosamente"); // Muestra una alerta de registro exitoso
        navigate("/Login"); // Redirige a la página de inicio de sesión
      } else {
        alert("Error: no se pudo registrar"); // Muestra una alerta de error en el registro
      }
    }
    datos(); // Llama a la función datos para iniciar el registro
  }

  return (
    <div>
      <div className="movereldi">
        <div className="moverR">
          <p className="movertex">Introduzca un email y una contraseña para registrarse</p>
          <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" value={password} placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
          <Button variant="primary" onClick={registro}>Registro</Button>
        </div>
      </div>
      <img src="src\img\esqueletoxd-removebg-preview.png" alt="esqueletoxd" className="movesq" />
      <img src="src\img\eskeletin.png" alt="esqueletoxd" className="movesq2" />
    </div>
  );
};

export default Register;
