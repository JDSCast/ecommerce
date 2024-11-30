import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-brown-900 text-white py-6 pt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Manjaría</h2>
          <p>&copy; 2024 Manjaria. Todos los derechos reservados.</p>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Inicio</Link>
          <Link to="/productos" className="hover:text-gray-400">Productos</Link>
          <Link to="#" className="hover:text-gray-400">Contacto</Link>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
