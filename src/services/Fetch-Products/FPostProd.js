 
const apiUrl = "http://localhost:3001/productos";

// funcion para agregar un nuevo producto
export const postData = async (nombre, precio, imagen) => {
  try {
    // hace una peticion POST a la API con la URL para agregar un producto
    const response = await fetch(apiUrl, {
      method: "POST", // metodo HTTP utilizado para crear datos
      mode: "cors", // habilita el uso de CORS
      headers: {
        "Content-Type": "application/json", // tipo de contenido que se envia al servidor
      },
      body: JSON.stringify({
        nombre, // nombre del nuevo producto
        precio, // precio del nuevo producto
        imagen, // imagen del nuevo producto
      }),
    });

    // verifica si la respuesta de la API es correcta
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`); // lanza un error si la respuesta no es correcta
    }

    // convierte la respuesta de la API a JSON
    const data = await response.json();
    return data; // devuelve los datos del nuevo producto
  } catch (error) {
    // maneja cualquier error que ocurra durante la peticion
    console.error("Error posting data:", error);
    throw error; // propaga el error para ser manejado en el componente
  }
};
