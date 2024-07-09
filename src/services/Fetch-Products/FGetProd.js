// services/productService.js
const apiUrl = "http://localhost:3001/productos";

export const getData = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
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
    console.error("Error fetching data:", error);
    throw error; // Propagate the error for handling in the component
  }
};
