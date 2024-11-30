import React from "react";
import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white lg:w-3/6 sm:w-4/5 p-8 rounded-lg shadow-lg text-center">
          <img src={`${process.env.PUBLIC_URL}/logoManjariaColor.svg`} alt="Logo Manjaría" className="mx-auto mb-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Manjaría</h1>
          <h2 className="text-2xl text-gray-600 mb-4">Endulza tu vida con nosotros</h2>
          <p className="text-lg text-gray-600 mb-4">
            Bienvenidos a Manjaría, donde cada bocado es una delicia. Explora nuestra variedad de repostería artesanal hecha con amor y los mejores ingredientes. Disfruta de nuestras especialidades y lleva a casa un pedacito de felicidad.
          </p>
          <Link to="/productos">
            <button className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
              Ver Productos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
