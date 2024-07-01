 
import React, {useState} from "react"
import { postData } from "../services/Fetch-LG-RG/FPost"
import { useNavigate } from "react-router-dom";
import "../css/Registro.css"
 
const Register = () => {
   
  const [email,setEmail]= useState()
  const [password,setPassword]=useState()
  const navigate = useNavigate();

  function  registro() {
    async function datos() {
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
      <input type="text" value={password} placeholder="Contraseña" onChange={(e)=>setPassword (e.target.value) } />
      <button onClick={registro}>Registro</button>
      </div>
      </div>
    </div>
     
  )
}

export default Register
