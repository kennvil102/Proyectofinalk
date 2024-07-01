import { useState } from "react";
import { getData } from "../services/Fetch-LG-RG/FGet";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
 import "../css/Logeo.css"

const Login = () => {
  const [data, setData] = useState();  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  async function datos() {
    const datoss = await getData();
    // console.log("datos", datoss);
    setData(datoss);
  }
  datos();
  function validar() {
    if(!email || email.trim() === "" ||!password || password.trim() === "" ){
      alert("Llene los campos vacios")
      return false;

    } return true;

    
  }
  
  function inicioSesion() {
    if(!validar()){
      return;

    }
    // console.log(username)
    if(data){  {/* si existe data con find (user) busca los datos usery con .email busca el email == evalua si hay data existen con el email*/ }
      const user = data.find((user)=> user.email == email);
      // console.log("usuario", user)
      if (user.password == password){
       alert("usuario autenticado")
        navigate("/Home")  // navegamos hacia home
      }else {
        console.log("contrasena invalida")
      }
    }
    
  }

  return (
    <div >
      <div className="centrardiv">
      <div className="mover">
       <p className="moverprin">Bienvenido a PlasmaTech</p>
       <p>Introduza sus datos</p>
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
      <button onClick={inicioSesion} className="btncolor">Inicio Sesion</button>
      <p className="moverp1"> Registrate aca</p>
      <p className="moverp2">👇👇👇</p>
      <Link to="/Register"> 
      <button className="btncolor2">Registro</button></Link>
      </div>
      </div>
    </div>
  );
};

export default Login;
