import { Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
    </>
  );
};

export default Rutas;
