import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../css/Search.css";

const Search = ({ onSearch }) => {
  // Estado para almacenar el valor de la barra de búsqueda
  const [barraBusqueda, setBarraBusqueda] = useState("");

  // Función para manejar la búsqueda
  const handleSearch = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    onSearch(barraBusqueda); // Llamar a la función onSearch pasando el valor de la búsqueda
  };

  return (
    <div className="search-container">
      {/* Input para ingresar el término de búsqueda */}
      <input
        className="search-input"
        type="text"
        value={barraBusqueda}
        onChange={(e) => setBarraBusqueda(e.target.value)} // Actualizar el estado con el valor ingresado
        placeholder="Buscar productos"
      />
      {/* Boton para iniciar la busqueda */}
      <Button className="search-button" onClick={handleSearch}>
        Buscar
      </Button>
    </div>
  );
};

export default Search;
