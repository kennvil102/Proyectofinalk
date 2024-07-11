 
const apiUrl = "http://localhost:3001/productos";

// funcion para eliminar un producto
export const deleteProduct = async (id) => {
  try {
    // hace una peticion DELETE a la API con la URL del producto a eliminar
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE", // metodo HTTP utilizado para eliminar datos
      mode: "cors", // habilita el uso de CORS
      headers: {
        "Content-Type": "application/json", // tipo de contenido que se recibe del servidor
      },
    });

    // verifica si la respuesta de la API es correcta
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`); // lanza un error si la respuesta no es correcta
    }

    // convierte la respuesta de la API a JSON
    const data = await response.json();
    return data; // devuelve los datos del producto eliminado
  } catch (error) {
    // maneja cualquier error que ocurra durante la peticion
    console.error("Error deleting data:", error);
    throw error; // propaga el error para ser manejado en el componente
  }
};
