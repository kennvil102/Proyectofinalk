 
const apiUrl = "http://localhost:3001/productos";

// funcion para agregar un nuevo producto
export const postData = async (nombre, precio, imagen) => {
  try {
    // hace una peticion POST a la API con la URL para agregar un producto
    const response = await fetch(apiUrl, {
      method: "POST",   
      mode: "cors",   
      headers: {
        "Content-Type": "application/json", // tipo de contenido que se envia al servidor
      },
      body: JSON.stringify({
        nombre,  
        precio,  
        imagen, 
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
    
    console.error("Error posting data:", error);
    throw error;  
  }
};
