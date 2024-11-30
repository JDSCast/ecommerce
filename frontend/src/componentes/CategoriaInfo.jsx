import React from "react";

const CategoriaInfo = ({ categoriaSeleccionada, categorias }) => {
  if (!categoriaSeleccionada) {
    return (
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">Lista de Productos</h1>
      </div>
    );
  }
  const categoriaObj = categorias.find(
    (cat) => cat._id === categoriaSeleccionada
  );
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-2">
        {categoriaObj.nombre}
      </h1>
      <p className="text-lg italic text-gray-700">
        {categoriaObj.descripcion}
      </p>
    </div>
  );
};

export default CategoriaInfo;
