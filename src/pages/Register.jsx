 
import React, {useState} from "react"
import { postData } from "../services/Fetch-LG-RG/FPost"
import { useNavigate } from "react-router-dom";
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Registro.css"
 
const Register = () => {
   
  const [email,setEmail]= useState()
  const [password,setPassword]=useState()
  const navigate = useNavigate();

  function  registro() {
    async function datos() { {/* si regis contiene los datos enviados con el posdata
      luego con el if va validar los datos ya sea que se haya 
      registrado con un email o password y con navigate se va redirigir
      a la pagina principal*/}
    let regis = await postData(email,password)
    if (regis && regis.email && regis.password) {
      alert("Usuario Registrado exitosamente")
      navigate("/Login")
      
    }else{
      alert("error no se registro")
    }
    }
    datos()
  
  
    
  }
  return (
    <div> {/* value valor del user onchange e evento del onchange, target seria todo el input */}
    <div className="movereldi"> 
    <div className="moverR">

      <p className="movertex">Introduzca un Email y una Contraseña para Registrarse</p> 
      <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail (e.target.value)}/>
      <input type="password" value={password} placeholder="Contraseña" onChange={(e)=>setPassword (e.target.value) } />
      <Button variant="primary"  onClick={registro}>Registro</Button>
      </div>
      </div>
      <img src="src\img\esqueletoxd-removebg-preview.png" alt="esqueletoxd" className="movesq"/>
      <img src="src\img\eskeletin.png" alt="esqueletoxd" className="movesq2"/>
    </div>
     
  )
}

export default Register
