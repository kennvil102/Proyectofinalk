import { useState } from "react"

const Search = ({ onSearch }) => {
    const [barraBusqueda, setBarraBusqueda] = useState(""); 
    // inicializa el estado barraBusqueda con una cadena vacia

    const handleSearch = () => {
        onSearch(barraBusqueda); 
        // llama a la funcion onSearch pasando el valor actual de barraBusqueda
    };

    return (
        <div>
            <input 
                type="text" 
                value={barraBusqueda} 
                onChange={(e) => setBarraBusqueda(e.target.value)} 
                placeholder="Buscar productos" 
            />
            {/* input controlado que actualiza barraBusqueda con el texto ingresado */}

            <button onClick={handleSearch}>Buscar</button>
            {/* boton que llama a handleSearch cuando se hace clic */}
        </div>
    );
}

export default Search;
