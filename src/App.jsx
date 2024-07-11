import { useState } from 'react'; // Importa el hook useState de React para manejar el estado

import reactLogo from './assets/react.svg'; //  
import viteLogo from '/vite.svg';  

import Rutas from './routes/Rutas'; // Importa el componente Rutas desde './routes/Rutas'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap para estilos

function App() {
  return (
    <>
      {/* Renderiza el componente Rutas */}
      <Rutas/>
    </>
  );
}

export default App;
