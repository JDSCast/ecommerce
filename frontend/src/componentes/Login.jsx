import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiClient from "../api/axiosConfig";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); //Funcion de login

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await apiClient.post("/usuarios/iniciarsesion", {
        correo: email,
        password,
      });
      // localStorage.setItem("token", response.data.token);
      // localStorage.setItem(
      //   "usuario", response.data.nombre
      // );
      login(response.data.nombre, response.data.token); //nuevo login
      navigate("/productos");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.mensaje || "Error al iniciar sesión");
      } else {
        setError("Error al conectar con el servidor");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Iniciar Sesión
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="text-gray-600 mt-4">
          ¿No tienes una cuenta?
          <Link to="/registro" className="text-blue-500 hover:text-blue-700">
          &nbsp; Regístrate aquí 
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
