 import { useState } from "react"
import { postData } from "../services/Fetch-Contact/FPost-Contact"
import "../css/Contac.css"

const Contact = () => {
  const [nombre,setNombre]=useState()
  const [correo,setCorreo]=useState()
  const [mensaje,setMensaje]=useState()
  const [status,setStatus]=useState()

  const enviarForm = async()=>{
    const result = await postData(nombre,correo,mensaje)
    if (result){
      setStatus("");
      setNombre("");
      setCorreo("");
      setMensaje("");

    }else {
      setStatus("No se envio el mensaje")
    }
  };


  return (
    <div>
      <div className="contact-form">
      <div className="form-container">
        <p>Ponte en Contacto Con nosotros</p>
        <p>Y Escribenos un mensaje</p>
        <p>Introduce tu nombre, email y mensaje</p>
        <input
          type="text"
          value={nombre}
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          value={correo}
          placeholder="Email"
          onChange={(e) => setCorreo(e.target.value)}
        />
        <textarea
          value={mensaje}
          placeholder="Mensaje"
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button onClick={enviarForm}>Enviar</button>
        {status && <p>{status}</p>}
      </div>
    </div>
      
    </div>
  )
}

export default Contact
