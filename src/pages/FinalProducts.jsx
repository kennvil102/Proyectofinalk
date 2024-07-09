// FinalProducts.jsx
import React, { useState, useEffect } from "react";
import { getData } from "../services/Fetch-Products/FGetProd";

const FinalProducts = () => {
  const [finalProducts, setFinalProducts] = useState([]);

  useEffect(() => {
    const fetchFinalProducts = async () => {
      try {
        const data = await getData(); // Puedes ajustar getData para obtener solo los productos finales
        setFinalProducts(data);
      } catch (error) {
        console.error('Error fetching final products:', error);
      }
    };

    fetchFinalProducts();
  }, []);

  return (
    <div>
      <h1>Productos Finales</h1>
      <ul>
        {finalProducts.map(prod => (
          <li key={prod.id}>
            <h2>{prod.nombre}</h2>
            <p>Precio: ${prod.precio}</p>
            <img src={prod.imagen} alt={prod.nombre} style={{ width: '100px', height: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinalProducts;
