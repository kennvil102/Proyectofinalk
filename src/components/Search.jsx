import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../css/Search.css"

const Search = ({ onSearch }) => {
    const [barraBusqueda, setBarraBusqueda] = useState("");

    const handleSearch = () => {
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
            <button className="search-button" onClick={handleSearch}>
                Buscar
            </button>
        </div>
    );
};

export default Search;
