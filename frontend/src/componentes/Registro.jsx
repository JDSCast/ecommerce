import React, { useState, useContext } from "react";
import apiClient from "../api/axiosConfig";
import { useNavigate } from "react-router-dom"; 
import { AuthContext } from "./AuthContext"

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 
  const { login } = useContext(AuthContext);
  
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Registro del usuario
      await apiClient.post("/usuarios/registro", {
        nombre,
        correo,
        password,
        ciudad,
        direccion,
        telefono,
      });

      // Inicio de sesión automático
      const inicioAuto = await apiClient.post("/usuarios/iniciarsesion", {
        correo,
        password,
      });

      login(inicioAuto.data.nombre, inicioAuto.data.token); // Setea la información del usuario
      console.log("Inicio de sesión automático exitoso");

      navigate("/productos");// Redirigir a la página de productos
    } catch (err) {
      if (err.response) {
        setError(err.response.data.mensaje || "Error al registrarse");
      } else {
        setError("Error al conectar con el servidor");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Registrarse</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
