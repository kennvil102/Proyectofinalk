export let postData = async (nombre, correo, mensaje) => {
    try {
      const response = await fetch("http://localhost:3001/Contactanos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre: nombre,
          correo: correo,
          mensaje: mensaje
        })
      });
  
      const data = await response.json();
      return data;  // Retorna los datos recibidos del servidor, incluyendo el id y los datos del formulario
    } catch (error) {
      console.error('Error en la solicitud POST:', error);  // Captura y loguea cualquier error que ocurra durante la solicitud
      return null;  // Retorna null en caso de error para manejo de errores en el componente que llama a esta función
    }
  };
  