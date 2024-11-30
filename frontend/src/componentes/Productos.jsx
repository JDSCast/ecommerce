import React, { useEffect, useState } from "react";
import apiClient from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import CategoriaInfo from "./CategoriaInfo";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]); // Estado para almacenar las categorías
  const [categoria, setCategoria] = useState(""); // Estado para la categoría seleccionada
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Para la navigación al detalle del producto

  useEffect(() => {
    fetchProductos();
    fetchCategorias();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await apiClient.get("/productos");
      setProductos(response.data.productos);
    } catch (err) {
      setError("Error al cargar los productos");
    }
  };

  const fetchCategorias = async () => {
    try {
      const response = await apiClient.get("/categorias");
      setCategorias(response.data.categorias);
    } catch (err) {
      setError("Error al cargar las categorías");
    }
  };

  const getPublicImageUrl = (imagenUrl) => {
    return `${process.env.PUBLIC_URL}/${imagenUrl}`;
  };

  const handleProductoDetalle = (id) => {
    navigate(`/productos/${id}`);
  };

  // Filtra los productos según la categoría seleccionada (o todas si no hay categoría seleccionada)
  const productosFiltrados = categoria
    ? productos.filter((producto) => producto.categoria._id === categoria)
    : productos;

  return (
    <div className="p-8 min-h-screen">
      <CategoriaInfo categoriaSeleccionada={categoria} categorias={categorias} />
      {error && <p className="text-red-500">{error}</p>}
      
      {/* Filtro de Categorías */}
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        className=" mb-4 p-2 border rounded cursor-pointer hover:bg-gray-300 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-600"
      >
        <option value="">Todas las categorías</option>
        {categorias.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.nombre}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productosFiltrados.map((producto) => (
          <div
            key={producto._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => handleProductoDetalle(producto._id)} //Con una flecha sino se ejecuta inmediatamente
          >
            <img
              className="w-full h-48 object-cover"
              src={getPublicImageUrl(producto.imagenUrl)}
              alt={producto.nombre}
            />
            <h2 className="text-lg font-semibold">{producto.nombre}</h2>
            <p className="text-gray-600">Precio: ${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
