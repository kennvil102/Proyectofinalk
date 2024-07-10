// services/Fetch-Products/FDelProd.js
const apiUrl = "http://localhost:3001/productos";

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;  
  }
};
