import React, { useState } from "react";
import { postData } from "../services/Fetch-Contact/FPost-Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Iconos de ubicación y correo
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Icono de WhatsApp
import "../css/Contac.css"; // Asegúrate de que la ruta al archivo CSS sea correcta
import { text } from "@fortawesome/fontawesome-svg-core";

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [status, setStatus] = useState('');

  const enviarForm = async () => {
    const result = await postData(nombre, correo, mensaje);
    if (result && result.nombre && result.correo && result.mensaje) {
      alert("Se envió el mensaje");
    } else {
      alert("No se envió el mensaje");
    }
  };

  return (
     <div>
      <div className="moverdivsito"> 
      <div className="ordicons">
      <h2 className="textoAnimado">Contacto</h2>
      <span> <FontAwesomeIcon icon={faMapMarkerAlt} /> Dirección: 153 Santa Ana</span>
      <span> <FontAwesomeIcon icon={faWhatsapp}/> Celular: +506 633-452-22</span>
      <span> <FontAwesomeIcon icon={faEnvelope} /> Email: 1234@plastech.com</span>
     </div>
     </div>
     <div className="movertesto">
     <div className="ordenartesto">
      <h2>
        CONTACTANOS <br />
        <br />
        Si deseas consultar mayor Informacion Sobre Nuestros
        servicios o tienes alguna duda al respecto, No dudes
        en Mandarnos un mensaje. Uno de Nuestros asesores se pondra en contacto
        contigo.
      </h2>
       
     </div>
     </div>
                       
       

      <div className="contact-form">
        <div className="form-container">
          <p>Ponte en contacto con nosotros</p>
          <p>Escríbenos un mensaje</p>
          <p>Introduce tu Nombre, Email y Mensaje</p>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
