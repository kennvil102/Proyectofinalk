import React, { useState, useEffect } from "react";
import { postData } from "../services/Fetch-Products/FPostProd";
const Products = () => {
  const [productos, setProductos] = useState([]);
  const [nomb, setNomb] = useState('');
  const [price, setPrice] = useState('');
  const [imagen, setImagen] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        let response = await fetch('http://localhost:3001/productos');
        let data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('error al obtener los productos:', error);
      }
    };

    fetchProductos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postData(nomb, price, imagen);
    if (result) {
      setProductos([...productos, result]);
      setNomb('');
      setPrice('');
      setImagen('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nombre del producto"
          value={nomb}
          onChange={(e) => setNomb(e.target.value)}
        />
        <input
          type="number"
          placeholder="precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="url de la imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
        <button type="submit">añadir producto</button>
      </form>
      <div className="productos">
        <div className="listaproductos">
          <ul>
            {productos.map(prod => (
              <li key={prod.id}>
                <h2>{prod.nombre}</h2>
                <p>precio: ${prod.precio}</p>
                <img src={prod.imagen} alt={prod.nombre} style={{ width: '100px', height: '100px' }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
