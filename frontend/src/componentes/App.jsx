import React from "react";
import { Routes, Route } from "react-router-dom";
import  AuthProvider  from "./AuthContext";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Registro from "./Registro";
import Productos from "./Productos";
import ProductoDetalle from "./ProductoDetalle";
import Perfil from "./Perfil";

const App = () => {
  return (
    <div>
      <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:productoId" element={<ProductoDetalle />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Footer />
      </AuthProvider>
    </div>
  );
};

export default App;