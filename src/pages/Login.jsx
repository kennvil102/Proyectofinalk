import { useState } from "react";
import { getData } from "../services/FGet";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  async function datos() {
    const datoss = await getData();
    // console.log("datos", datoss);
    setData(datoss);
  }
  datos();
  
  function inicioSesion() {
    // console.log(username)
    if(data){  {/* si existe data con find (user) busca los datos usery con .email busca el email == evalua si hay data existen con el email*/ }
      const user = data.find((user)=> user.email == email);
      // console.log("usuario", user)
      if (user.password == password){
        console.log("usuario autenticado")
        navigate("/Home")  // navegamos hacia home
      }else {
        console.log("contrasena invalida")
      }
    }
    
  }

  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="Escriba un usuario"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Escriba un email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="Escriba una contraasena"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={inicioSesion}>inicio sesion</button>
    </div>
  );
};

export default Login;
