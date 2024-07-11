// servicio para obtener datos de usuarios
const apiUrl = "http://localhost:3001/users";

export let getData = async () => {
  try {
    // realiza una peticion GET a la API con la URL para obtener datos de usuarios
    let response = await fetch(apiUrl, {
      method: "GET", // metodo HTTP utilizado para leer datos
      mode: "cors", // habilita el uso de CORS
      credentials: "same-origin", // incluye credenciales en la peticion
      headers: {
        "Content-Type": "application/json", // tipo de contenido que se recibe del servidor
      },
    });
    
    // convierte la respuesta de la API a JSON
    let data = await response.json();
    return data; // devuelve los datos de usuarios obtenidos
  } catch (e) {
    // maneja cualquier error que ocurra durante la peticion
    console.log(e);
    return null; // devuelve null en caso de error
  }
};
