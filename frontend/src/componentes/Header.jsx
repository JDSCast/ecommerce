import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightToBracket, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const { usuario, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-purple-700 text-white pb-10 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={`${process.env.PUBLIC_URL}/logoManjaria.svg`} alt="Logo Manjaría" className="w-16 h-16" />
          <h1 className="text-lg font-bold">Manjaría</h1>
        </Link>
        <div className="flex space-x-4 items-center">

          <Link to="/" className="hover:text-gray-300">
            Inicio
          </Link>
          <Link to="/productos" className="hover:text-gray-300">
            Productos
          </Link>
          {usuario ? (
            <>
              <div className="flex items-center space-x-2 p-2 rounded-lg bg-purple-500">
                <FontAwesomeIcon icon={faUser} className="text-gray-300" />
                <span className="text-gray-300">{usuario}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-red-500 bg-gray-200 p-2 rounded-lg hover:text-red-300 ml-4 cursor-pointer"
              >
                Salir <FontAwesomeIcon icon={faRightFromBracket} />
              </button>
            </>
          ) :
            location.pathname !== "/login" && ( // Mostrar el enlace de Iniciar Sesión solo si no está en la página de login
              <Link to="/login" className="hover:text-white hover:bg-purple-900 bg-purple-500 rounded-lg p-2">
                Ingresar <FontAwesomeIcon icon={faRightToBracket} />
              </Link>
            )
          }
        </div>
      </nav>
    </header>
  );
};

export default Header;
