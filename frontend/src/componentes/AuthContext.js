import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    const tokenGuardado = localStorage.getItem("token");
    if (usuarioGuardado && tokenGuardado) {
      setUsuario(usuarioGuardado);
      setToken(tokenGuardado);
    }
  }, []);

  const login = (userName, token) => {
    localStorage.setItem("token", token); 
    localStorage.setItem("usuario", userName);
    setUsuario(userName);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    setUsuario(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

