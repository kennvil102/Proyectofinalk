import React, { useState, useEffect } from "react";
import { getData } from "../services/Fetch-Products/FGetProd";
import { postData } from "../services/Fetch-Products/FPostProd";
import { updateProduct } from "../services/Fetch-Products/FPutProd";
import { deleteProduct } from "../services/Fetch-Products/FDelProd";
import { Button, Form } from "react-bootstrap";
import Search from "../components/Search";
import "../css/Products.css";

const Products = () => {
    // Estado para almacenar la lista completa de productos
    const [productos, setProductos] = useState([]);
    // Estados para manejar los valores del formulario de nuevo producto
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [imagen, setImagen] = useState('');
    // Estado para almacenar productos filtrados según la búsqueda
    const [FiltroProd, setFiltroProd] = useState([]);

    // Función useEffect para cargar los productos al montar el componente
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

    // Función para manejar la búsqueda de productos por nombre
    const handleSearch = (barraBusqueda) => {
        const filtered = productos.filter(product =>
            product.nombre.toLowerCase().includes(barraBusqueda.toLowerCase())
        );
        setFiltroProd(filtered);
    };

    // Función para manejar el envío del formulario de nuevo producto
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await postData(nombre, precio, imagen);
            if (result) {
                // Actualizar la lista de productos con el nuevo producto
                setProductos([...productos, result]);
                setFiltroProd([...productos, result]);
                // Limpiar los campos del formulario
                setNombre('');
                setPrecio('');
                setImagen('');
            }
        } catch (error) {
            console.error('Error ', error);
        }
    };

    // Función para manejar la eliminación de un producto por su ID
    const handleDelete = async (id) => {
        try {
            const result = await deleteProduct(id);
            if (result) {
                // Filtrar los productos para excluir el producto eliminado
                const updatedProducts = productos.filter(prod => prod.id !== id);
                setProductos(updatedProducts);
                setFiltroProd(updatedProducts);
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

    // Función para manejar la actualización de un producto por su ID
    const handleUpdate = async (id, newName, newPrice, newImage) => {
        try {
            const result = await updateProduct(id, newName, newPrice, newImage);
            if (result) {
                // Actualizar la lista de productos con los datos actualizados
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
            console.error('Error', error);
        }
    };

    // Renderizado del componente Products
    return (
        <div>
            {/* Componente de búsqueda de productos */}
            <Search onSearch={handleSearch} />
            
            {/* Formulario para añadir nuevos productos */}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNombre">
                    {/* Input para el nombre del producto */}
                    <Form.Control
                        type="text"
                        placeholder="Nombre del producto"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="custom-input"
                    />
                </Form.Group>
                <Form.Group controlId="formPrecio">
                    {/* Input para el precio del producto */}
                    <Form.Control
                        type="number"
                        placeholder="Precio"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        className="custom-input"
                    />
                </Form.Group>
                <Form.Group controlId="formImagen">
                    {/* Input para la URL de la imagen del producto */}
                    <Form.Control
                        type="text"
                        placeholder="URL de la imagen"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                        className="custom-input"
                    />
                </Form.Group>
                {/* Boton para enviar el formulario */}
                <Button variant="primary" type="submit" className="custom-button">
                    Añadir producto
                </Button>
            </Form>
            
            {/* Contenedor para mostrar la lista de productos */}
            <div className="productos-container">
                {FiltroProd.map(prod => (
                    <div key={prod.id} className="producto">
                        <h2>{prod.nombre}</h2>
                        <p>Precio: ${prod.precio}</p>
                        <img src={prod.imagen} alt={prod.nombre} />
                        <div>
                            {/* Botón para eliminar un producto */}
                            <Button variant="danger" onClick={() => handleDelete(prod.id)}>❌</Button>
                            {/* Botón para actualizar un producto */}
                            <Button variant="info" onClick={() => handleUpdate(prod.id, prompt("Nuevo nombre:"), prompt("Nuevo precio:"), prod.imagen)}>🆙</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
