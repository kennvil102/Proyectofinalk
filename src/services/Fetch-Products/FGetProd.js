// services/productService.js
const apiUrl = "http://localhost:3001/productos";

// funcion para obtener la lista de productos
export const getData = async () => {
  try {
    // hace una peticion GET a la API con la URL para obtener los productos
    const response = await fetch(apiUrl, {
      method: "GET", // metodo HTTP utilizado para obtener los datos
      mode: "cors", // 
      credentials: "same-origin", //  
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
    return data; // devuelve los datos de los productos
  } catch (error) {
     
    console.error("Error fetching data:", error);
    throw error;  
  }
};
