import React, { useState, useContext, useEffect } from "react";
import apiClient from "../api/axiosConfig";
import { AuthContext } from "./AuthContext";

const Perfil = () => {
  //Estados para la informacion actual del usuario
  const { usuario, token, login } = useContext(AuthContext);
  const [infoUser, setInfoUser] = useState([]);

  //Estados para editar la informacion del usuario
  const [editMode, setEditMode] = useState(true);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");

  // Hooks para obtener la informacion del usuario actual y actualizarla
  useEffect(() => {
    handleUser();
  }, []);

  useEffect(() => {
    if (infoUser) {
      fillForm();
    }
  }, [infoUser]);

  // Funcion para editar la informacion del usuario
  const handleEdit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (
        nombre === "" ||
        correo === "" ||
        ciudad === "" ||
        direccion === "" ||
        telefono === ""
      ) {
        setError("Todos los campos son obligatorios");
        return;
      }

      const response = await apiClient.put(
        `/usuarios/perfil`,
        {
          nombre,
          correo,
          ciudad,
          direccion,
          telefono,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setInfoUser(response.data.usuario);
      login(response.data.usuario.nombre, token);
      toggleInput();
    } catch (error) {
      setError("Error al actualizar el usuario");
    }
  };
  // Funcion para obtener la informacion del usuario actual
  const handleUser = async () => {
    const response = await apiClient.get("/usuarios/perfil", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setInfoUser(response.data.usuario);
  };

  // Funcion para llenar el formulario con la informacion del usaurio
  const fillForm = () => {
    setNombre(infoUser.nombre);
    setCorreo(infoUser.correo);
    setCiudad(infoUser.ciudad);
    setDireccion(infoUser.direccion);
    setTelefono(infoUser.telefono);
  };

  // Función para alternar el estado del input
  const toggleInput = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Perfil</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleEdit}>
          <input
            type="text"
            placeholder={infoUser.nombre}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:font-semibold"
            disabled={editMode}
          />
          <input
            type="email"
            placeholder={infoUser.correo}
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:opacity-70 disabled:font-semibold"
            disabled={editMode}
          />
          <input
            type="text"
            placeholder={infoUser.ciudad}
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:font-semibold"
            disabled={editMode}
          />
          <input
            type="text"
            placeholder={infoUser.direccion}
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:font-semibold"
            disabled={editMode}
          />
          <input
            type="text"
            placeholder={infoUser.telefono}
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:font-semibold"
            disabled={editMode}
          />
          {editMode ? (
            <button
              type="button"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              onClick={toggleInput}
            >
              Editar
            </button>
          ) : (
            <div className="flex items-center justify-evenly ">
              <button
                type="button"
                className="w-5/12 bg-red-400  hover:bg-red-600 text-white py-2 rounded-lg "
                onClick={()=>{toggleInput(); handleUser();}}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="w-5/12 bg-green-500 hover:bg-green-800 text-white py-2 rounded-lg "
              >
                Actualizar
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Perfil;
