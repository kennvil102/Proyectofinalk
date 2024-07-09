// services/Fetch-Products/FPostProd.js
const apiUrl = "http://localhost:3001/productos";

export const postData = async (nombre, precio, imagen) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        precio,
        imagen,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error; // Propagate the error for handling in the component
  }
};
