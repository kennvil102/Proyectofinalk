// funcion para enviar un formulario de contacto
export let postData = async (nombre, correo, mensaje) => {
  try {
    // hace una peticion POST a la API con la URL para enviar el formulario de contacto
    const response = await fetch("http://localhost:3001/Contactanos/", {
      method: "POST", // metodo HTTP utilizado para enviar datos
      headers: {
        "Content-Type": "application/json" // tipo de contenido que se envia al servidor
      },
      body: JSON.stringify({
        nombre: nombre, 
        correo: correo,  
        mensaje: mensaje 
      })
    });

    // convierte la respuesta de la API a JSON
    const data = await response.json();
    return data; // devuelve los datos recibidos del servidor, incluyendo el id y los datos del formulario
  } catch (error) {
    console.error('Error en la solicitud POST:', error);  
    return null;  
  }
};
