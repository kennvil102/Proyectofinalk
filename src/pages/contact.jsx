import React, { useState } from "react";
import { postData } from "../services/Fetch-Contact/FPost-Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Iconos de ubicacion y correo
import {
  faFacebook,
  faWhatsapp,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"; // Icono de WhatsApp

import "../css/Contac.css";

const Contact = () => {
  const [nombre, setNombre] = useState(""); // Estado para el nombre del usuario
  const [correo, setCorreo] = useState(""); // Estado para el correo del usuario
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje del usuario
  const [status, setStatus] = useState(""); // Estado para el estado del envío del formulario

  // Función asincrónica para enviar el formulario de contacto
  const enviarForm = async () => {
    const result = await postData(nombre, correo, mensaje); // Llamada a la función de servicio para enviar datos
    if (result && result.nombre && result.correo && result.mensaje) {
      // Si el resultado tiene nombre, correo y mensaje
      alert("Se envió el mensaje"); // Muestra un mensaje de éxito
    } else {
      alert("No se envió el mensaje"); // Muestra un mensaje de error
    }
  };

  return (
    <div>
      {/* Sección de información de contacto */}
      <div className="ordicons">
        <h2 className="textoAnimado">CONTACTO</h2>
        <span>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Dirección: Terrazas Santa Ana
        </span>
        <span>
          <FontAwesomeIcon icon={faWhatsapp} /> Celular: +506 70742055
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} /> Email: Info@plasmatech.com
        </span>
      </div>

      {/* Sección de texto introductorio */}
      <div className="movertesto">
        <div className="ordenartesto">
          <h2>
            ESCRIBENOS <br />
            <br />
            Si deseas consultar mayor Informacion Sobre Nuestros Productos o
            tienes alguna duda al respecto, No dudes en Mandarnos un mensaje.
            Uno de Nuestros asesores se pondra en contacto contigo.
          </h2>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div className="contact-form">
        <div className="form-container">
          <p>Ponte en contacto con nosotros</p>
          <p>Escríbenos un mensaje</p>
          <p>Introduce tu Nombre, Email y Mensaje</p>
          <input
            type="text"
            value={nombre}
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)} // Manejador de cambio para el nombre
          />
          <input
            type="email"
            value={correo}
            placeholder="Email"
            onChange={(e) => setCorreo(e.target.value)} // Manejador de cambio para el correo
          />
          <textarea
            value={mensaje}
            placeholder="Mensaje"
            onChange={(e) => setMensaje(e.target.value)} // Manejador de cambio para el mensaje
          />
          <button onClick={enviarForm}>Enviar</button> {/* Botón para enviar el formulario */}
        </div>
      </div>

      {/* Redes sociales */}
      <div className="moverredes">
        <ul className="social-links">
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
