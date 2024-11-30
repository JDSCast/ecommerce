const { pool } = require('../configuracion/baseDatosPostgres');


const tablaUsuariosQuery = `
  CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE CHECK (correo ~* '^.+@.+\..+$'),
    password VARCHAR(255) NOT NULL,
    ciudad VARCHAR(255) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    rol VARCHAR(10) NOT NULL CHECK (rol IN ('cliente', 'admin')) DEFAULT 'cliente',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

const crearTablaUsuarios = async () => {
  try {
    const client = await pool.connect();
    await client.query(tablaUsuariosQuery);
    console.log('   Tabla usuarios creada o ya existe');
    client.release();
  } catch (err) {
    console.error('Error al crear la tabla usuarios:', err);
  }
};

module.exports = crearTablaUsuarios;
