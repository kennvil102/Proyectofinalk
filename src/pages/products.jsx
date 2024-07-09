import React, { useState, useEffect } from "react";
import { getData } from "../services/Fetch-Products/FGetProd";
import { postData } from "../services/Fetch-Products/FPostProd";
import { updateProduct } from "../services/Fetch-Products/FPutProd";
import { deleteProduct } from "../services/Fetch-Products/FDelProd";
import { Button, Form } from "react-bootstrap"; // Importar Button y Form de react-bootstrap
import Search from "../components/Search"; 
import "../css/Products.css"; // Importar tu archivo CSS personalizado

const Products = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [FiltroProd, setFiltroProd] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getData();
        setProductos(data);
        setFiltroProd(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductos();
  }, []);

  const handleSearch = (barraBusqueda) => {
    const filtered = productos.filter(product => 
      product.nombre.toLowerCase().includes(barraBusqueda.toLowerCase())
    );
    setFiltroProd(filtered);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postData(nombre, precio, imagen);
      if (result) {
        setProductos([...productos, result]);
        setFiltroProd([...productos, result]);
        setNombre('');
        setPrecio('');
        setImagen('');
      }
    } catch (error) {
      console.error('Error ', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteProduct(id);
      if (result) {
        const updatedProducts = productos.filter(prod => prod.id !== id);
        setProductos(updatedProducts);
        setFiltroProd(updatedProducts);
      }
    } catch (error) {
      console.error('Error', error);
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
        setFiltroProd(updatedProducts);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch} /> 
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Control
            type="text"
            placeholder="Nombre del producto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="custom-input" // Aplica estilos CSS a los inputs
          />
        </Form.Group>
        <Form.Group controlId="formPrecio">
          <Form.Control
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="custom-input" // Aplica estilos CSS a los inputs
          />
        </Form.Group>
        <Form.Group controlId="formImagen">
          <Form.Control
            type="text"
            placeholder="URL de la imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            className="custom-input" // Aplica estilos CSS a los inputs
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="custom-button">
          Añadir producto
        </Button>
      </Form>
      <div className="productos-container">
        {FiltroProd.map(prod => (
          <div key={prod.id} className="producto">
            <h2>{prod.nombre}</h2>
            <p>Precio: ${prod.precio}</p>
            <img src={prod.imagen} alt={prod.nombre} />
            <div>
              <Button variant="danger" onClick={() => handleDelete(prod.id)}>❌</Button>
              <Button variant="info" onClick={() => handleUpdate(prod.id, prompt("Nuevo nombre:"), prompt("Nuevo precio:"), prod.imagen)}>🆙</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
