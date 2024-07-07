import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import App from "../App";
import AboutUs from "../pages/AboutUs";
 

 

const Rutas = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>

    </>
  );
};

export default Rutas;
