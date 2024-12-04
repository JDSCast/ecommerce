import React, { useState, useContext, useEffect } from "react";
import apiClient from "../api/axiosConfig";
import { AuthContext } from "./AuthContext";

const Perfil = () => {
  //Estados para la informacion actual del usuario
  const { usuario, token, login } = useContext(AuthContext);
  const [infoUser, setInfoUser] = useState({});

  //Estados para editar la informacion del usuario
  const [editMode, setEditMode] = useState(false);

  const [error, setError] = useState("");

  // Hooks para obtener la informacion del usuario actual y actualizarla
  useEffect(() => {
    handleUser();
  }, []);

  // Funcion para editar la informacion del usuario
  const handleEdit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (
        !infoUser.nombre ||
        !infoUser.correo ||
        !infoUser.ciudad ||
        !infoUser.direccion ||
        !infoUser.telefono
      ) {
        setError("Todos los campos son obligatorios");
        return;
      }
      //Desestructuración del objeto infoUser
      const { nombre, correo, ciudad, direccion, telefono } = infoUser;

      //Actualización del usuario
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
    try {
      const response = await apiClient.get("/usuarios/perfil", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setInfoUser(response.data.usuario);
    } catch (error) {
      setError("Error al cargar los datos del perfil");
    }
  };

  // Función para alternar el estado del input
  const toggleInput = () => {
    setEditMode(!editMode);
  };

  //Funcion para actualizar el estado de infoUser con respecto a los inputs
  const handleChange = (e) => {
    const updatedInfoUser = { ...infoUser }; //copia el infoUser
    updatedInfoUser[e.target.name] = e.target.value;

    setInfoUser(updatedInfoUser);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Perfil</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleEdit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={infoUser.nombre || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:font-semibold"
            disabled={!editMode}
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={infoUser.correo || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:opacity-70 disabled:font-semibold"
            disabled={!editMode}
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={infoUser.ciudad || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:font-semibold"
            disabled={!editMode}
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={infoUser.direccion || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:font-semibold"
            disabled={!editMode}
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={infoUser.telefono || ""}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:font-semibold"
            disabled={!editMode}
          />
          {!editMode ? (
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
                onClick={() => {
                  toggleInput();
                  handleUser();
                }}
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
