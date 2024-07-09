// Products.jsx
import React, { useState, useEffect } from "react";
import { getData } from "../services/Fetch-Products/FGetProd";
import { postData } from "../services/Fetch-Products/FPostProd";
import { updateProduct } from "../services/Fetch-Products/FPutProd";
import { deleteProduct } from "../services/Fetch-Products/FDelProd";
import "../css/Products.css"; // Importar el archivo de estilos

const Products = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getData();
        setProductos(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postData(nombre, precio, imagen);
      if (result) {
        setProductos([...productos, result]);
        setNombre('');
        setPrecio('');
        setImagen('');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteProduct(id);
      if (result) {
        const updatedProducts = productos.filter(prod => prod.id !== id);
        setProductos(updatedProducts);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdate = async (id, newName, newPrice, newImage) => {
    try {
      const result = await updateProduct(id, newName, newPrice, newImage);
      if (result) {
        const updatedProducts = productos.map(prod => {
          if (prod.id === id) {
            return {
              ...prod,
              nombre: newName,
              precio: newPrice,
              imagen: newImage,
            };
          }
          return prod;
        });
        setProductos(updatedProducts);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
        <button type="submit">Añadir producto</button>
      </form>
      <div className="productos-container">
        {productos.map(prod => (
          <div key={prod.id} className="producto">
            <h2>{prod.nombre}</h2>
            <p>Precio: ${prod.precio}</p>
            <img src={prod.imagen} alt={prod.nombre} />
            <div>
              <button onClick={() => handleDelete(prod.id)}>Eliminar</button>
              {/* Aquí se permite la actualización con nuevos valores */}
              <button onClick={() => handleUpdate(prod.id, prompt("Nuevo nombre:"), prompt("Nuevo precio:"), prod.imagen)}>Actualizar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
