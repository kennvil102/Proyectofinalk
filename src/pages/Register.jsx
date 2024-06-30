 
import React, {useState} from "react"
import { postData } from "../services/FPost"
 
const Register = () => {
   
  const [email,setEmail]= useState()
  const [password,setPassword]=useState()

  function  registro() {
    async function datos() {
    let regis = await postData(email,password)
    }
    datos()
  
    
  }
  return (
    <div> {/* value valor del user onchange e evento del onchange, target seria todo el input */}
       
      <input type="text" value={email} placeholder="Escriba un email" onChange={(e)=>setEmail (e.target.value)}/>
      <input type="text" value={password} placeholder="Escriba una contraasena" onChange={(e)=>setPassword (e.target.value) } />
      <button onClick={registro}>Registro</button>
      
    </div>
     
  )
}

export default Register
