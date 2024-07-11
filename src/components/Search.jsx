import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../css/Search.css";

const Search = ({ onSearch }) => {
  const [barraBusqueda, setBarraBusqueda] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(barraBusqueda);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        value={barraBusqueda}
        onChange={(e) => setBarraBusqueda(e.target.value)}
        placeholder="Buscar productos"
      />
      <Button className="search-button" onClick={handleSearch}>
        Buscar
      </Button>
    </div>
  );
};

export default Search;
