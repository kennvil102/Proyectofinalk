const apiUrl = "http://localhost:3001/productos";

// funcion para actualizar un producto
export const updateProduct = async (id, nombre, precio, imagen) => {
  try {
    // hace una peticion PUT a la API con la URL del producto a actualizar
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "PUT",  
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
      throw new Error(`HTTP error! Status: ${response.status}`); // lanza un error  
    }

    // convierte la respuesta de la API a JSON
    const data = await response.json();
    return data; // devuelve los datos actualizados
  } catch (error) {
     
    console.error("Error updating data:", error);
    throw error; 
  }
};
