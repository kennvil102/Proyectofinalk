// servicio para obtener datos de usuarios
const apiUrl = "http://localhost:3001/users";

export let getData = async () => {
  try {
    // realiza una peticion GET a la API con la URL para obtener datos de usuarios
    let response = await fetch(apiUrl, {
      method: "GET",  
      mode: "cors",  
      credentials: "same-origin",  
      headers: {
        "Content-Type": "application/json",  
      },
    });
    
    // convierte la respuesta de la API a JSON
    let data = await response.json();
    return data; // devuelve los datos de usuarios obtenidos
  } catch (e) {
    // maneja cualquier error que ocurra durante la peticion
    console.log(e);
    return null;  
  }
};
