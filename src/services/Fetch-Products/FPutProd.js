const apiUrl = "http://localhost:3001/productos";

// funcion para actualizar un producto
export const updateProduct = async (id, nombre, precio, imagen) => {
  try {
    // hace una peticion PUT a la API con la URL del producto a actualizar
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "PUT", // metodo HTTP utilizado para actualizar datos
      mode: "cors", // habilita el uso de CORS
      headers: {
        "Content-Type": "application/json", // tipo de contenido que se envia al servidor
      },
      body: JSON.stringify({
        nombre, // nuevo nombre del producto
        precio, // nuevo precio del producto
        imagen, // nueva imagen del producto
      }),
    });

    // verifica si la respuesta de la API es correcta
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`); // lanza un error si la respuesta no es correcta
    }

    // convierte la respuesta de la API a JSON
    const data = await response.json();
    return data; // devuelve los datos actualizados
  } catch (error) {
    // maneja cualquier error que ocurra durante la peticion
    console.error("Error updating data:", error);
    throw error; // propaga el error para ser manejado en el componente
  }
};
