import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register"; // importa componente de registro
import Login from "../pages/Login"; // importa componente de inicio de sesión
import Home from "../pages/Home"; // importa componente de página principal
import Products from "../pages/Products"; // importa componente de productos
import Contact from "../pages/Contact"; // importa componente de contacto
import AboutUs from "../pages/AboutUs"; // importa componente de acerca de nosotros
import MainP from "../pages/MainP"; // importa componente de página principal

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<MainP />} /> {/* ruta para página principal */}
      <Route path="/Login" element={<Login />} /> {/* ruta para inicio de sesión */}
      <Route path="/Register" element={<Register />} /> {/* ruta para registro */}
      <Route path="/Home" element={<Home />} /> {/* ruta para página principal */}
      <Route path="/Products" element={<Products />} /> {/* ruta para productos */}
      <Route path="/AboutUs" element={<AboutUs />} /> {/* ruta para acerca de nosotros */}
      <Route path="/Contact" element={<Contact />} /> {/* ruta para contacto */}
    </Routes>
  );
};

export default Rutas; // exporta componente de rutas como predeterminado
