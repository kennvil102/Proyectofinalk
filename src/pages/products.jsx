import React, { useState, useEffect } from "react";
import { getData } from "../services/Fetch-Products/FGetProd";
import { postData } from "../services/Fetch-Products/FPostProd";
import { updateProduct } from "../services/Fetch-Products/FPutProd";
import { deleteProduct } from "../services/Fetch-Products/FDelProd";
import { Button, Form } from "react-bootstrap";
import "../css/Products.css";

const Products = () => {
    // Estado para almacenar la lista completa de productos cambia el estado por el Usetate
    const [productos, setProductos] = useState([]);
    // Estados para manejar los valores del formulario de nuevo producto
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [imagen, setImagen] = useState('');

    // Funcion useEffect para cargar el componente
    useEffect(() => {
        const fetchProductos = async () => { 
            try {
                const data = await getData(); /* llama a getData obtiene los datos de los productos*/ 
                setProductos(data); //Actualiza el estado 'productos' con los datos obtenidos
            } catch (error) {
                console.error('Error fetching products:', error); // si no da error
            }
        };

        fetchProductos();
    }, []);

    // Maneja el envío del formulario de los productos //añade producto
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await postData(nombre, precio, imagen); // por medio del posData envia los datos del nuevo productos
            if (result) {
                // Actualizar la lista de productos con el nuevo producto
                setProductos([...productos, result]);
                //  Reseteamos o Limpiamos los campos del formulario con el producto nuevo
                setNombre('');
                setPrecio('');
                setImagen('');
            }
        } catch (error) {
            console.error('Error ', error);
        }
    };

    // Función para  eliminar de un producto por su ID
    const handleDelete = async (id) => {
        try {
            const result = await deleteProduct(id); //Llama a la función deleteProduct (fetch)para eliminar el producto del servidor
            if (result) {
                 //con el metodo filter filtra los productos y para excluir la lista de productos
                const updatedProducts = productos.filter(prod => prod.id !== id);
                setProductos(updatedProducts);// actualiza el estado productos (SetProductos)
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

    // Función para manejar la actualización de un producto por su ID
    const handleUpdate = async (id, newName, newPrice, newImage) => {
        try {
            const result = await updateProduct(id, newName, newPrice, newImage);
            if (result) { {/*si los datos existe o se actualiazron  se refleja el cambio en el producto*/}
                // Actualizar la lista de productos con los datos actualizados
                const updatedProducts = productos.map(prod => {
                    if (prod.id === id) { // si el id es el mismo id que el producto entonces actualiza los datos
                        return {
                            ...prod,
                            nombre: newName,
                            precio: newPrice,
                            imagen: newImage,
                        };
                    }
                    return prod;
                });
                setProductos(updatedProducts);// actualiza el estado de productos con el nuevo valor precio nombre etc
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

    // Renderizado del componente Products
    return (
        <div>
            {/* Formulario para añadir nuevos productos  cuando se envie elform al dar click click anadir productos
            se llama a la funcion handlesubmit*/}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNombre">
                    {/* Input para el nombre del producto */}
                    <Form.Control
                        type="text"
                        placeholder="Nombre del producto"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}//captura el estado de "nombre" mediante el evento onchange
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
                {productos.map(prod => (// aqui hace un mapeo itera sobre los productos
                    <div key={prod.id} className="producto"> {/* aqui con el key prod.id identifica que productos han cambiado o se han eliminado*/}
                        <h2>{prod.nombre}</h2> {/*muestra el nombre del producto actualizado*/}
                        <p>Precio: ${prod.precio}</p> 
                        <img src={prod.imagen} alt={prod.nombre} /> 
                        <div>
                            {/* Botón para eliminar un producto */}
                            <Button variant="danger" onClick={() => handleDelete(prod.id)}>❌</Button> {/*elimina un producto mediante el boton X*/}
                            {/* Botón para actualizar un producto */}
                            <Button variant="info" onClick={() => handleUpdate(prod.id, prompt("Nuevo nombre:"), prompt("Nuevo precio:"), prod.imagen)}>🆙</Button>
                             
                            {/*Actualiza un producto mediante el boton up y mediante promp pide al usuario y se actualizan los datos*/}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
