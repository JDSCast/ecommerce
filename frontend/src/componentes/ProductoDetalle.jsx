import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../api/axiosConfig";

const ProductoDetalle = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducto();
  }, []);

  const fetchProducto = async () => {
    try {
      const response = await apiClient.get(`/productos/${productoId}`);
      setProducto(response.data.producto);
    } catch (err) {
      setError("Error al cargar la información del producto");
    }
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!producto) {
    return <p>Cargando...</p>;
  }

  const getPublicImageUrl = (imagenUrl) => {
    return `${process.env.PUBLIC_URL}/${imagenUrl}`;
  };

  return (
    <div className="flex items-center justify-center lg:h-screen sm:h-1/2 ">
    <div className="max-w-6xl w-10/12 mx-auto p-8 bg-white rounded-lg shadow-lg ">
      
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        
        <img
          className="w-full lg:w-1/2 h-auto object-cover rounded-lg shadow-md"
          src={getPublicImageUrl(producto.imagenUrl)}
          alt={producto.nombre}
        />
        <div className="mt-4 lg:mt-0 lg:ml-8 flex-1">
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {producto.nombre}
          </h1>
          <p className="text-xl text-gray-700 mb-4">${producto.precio}</p>
          <p className="text-gray-600 mb-4"><strong>Descripción:</strong> <br/>{producto.descripcion}</p>
          <p className="text-gray-600 mb-4">
            <strong>Stock:</strong> {producto.stock}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Categoría:</strong> {producto.categoria.nombre}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};
export default ProductoDetalle;
