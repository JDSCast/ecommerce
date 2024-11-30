const { pool } = require("./baseDatosPostgres");

const basePostgresQuery = `INSERT INTO usuarios (id, nombre, correo, password, ciudad, direccion, telefono, rol, fecha_registro) VALUES (3, 'Pedro Sánchez', 'pedro.sanchez@example.com', '$2a$10$cG4Jk5xJJlGYkqUixEP4R.yjjQ9FJCN9e8ZBDVI/bMuqBH0/5Fiwq', 'Tuluá', 'Avenida Central 45', '7778889990', 'admin', '2024-11-18 12:06:09.492161'),
(4, 'Juan Pérez', 'juan.perez@example.com', '$2a$10$mZ3B2b1g91r/pVYhy7qZI.ZB3.SFmJ.u/MOynCmWhN65X2.JlmwNS', 'Cali', 'Calle Falsa 123', '1234567890', 'cliente', '2024-11-20 09:20:56.058611'),
(5, 'María López', 'maria.lopez@example.com', '$2a$10$H42LQlEf8rjwvEOKV7NaheIM4KedNeYPaUaDpBwd6UayevYe8lHIu', 'Buenaventura', 'Avenida Siempre Viva 742', '0987654321', 'admin', '2024-11-20 09:21:07.742822'),
(6, 'Carlos García', 'carlos.garcia@example.com', '$2a$10$1x8WPLAqIkf1OrELDF1khO6plAPzJsnMW3ZFReRSwgdHFdKoRHC..', 'Palmira', 'Carrera 50 #100-20', '1112223333', 'cliente', '2024-11-20 09:21:16.639799'),
(7, 'Ana Martínez', 'ana.martinez@example.com', '$2a$10$wPpYqzQckI8ooIFw/Jk6zOzECcUGAC4UbKGnvxrVKkfkEIYampJEC', 'Buga', 'Calle 20 #10-30', '4445556666', 'cliente', '2024-11-20 09:21:23.89472');`;

const datosPostgres = async () => {
  try {
    const client = await pool.connect();
    // Comprobar si ya hay datos en la tabla
    const res = await client.query("SELECT COUNT(*) FROM usuarios");
    const count = parseInt(res.rows[0].count, 10);
    if (count === 0) {
      // Insertar datos solo si la tabla está vacía
      await client.query(basePostgresQuery);
      console.log("   Datos de la tabla usuarios creados");
    } else {
      console.log(
        "   La tabla usuarios ya contiene datos, no se realizó ninguna inserción."
      );
    }
    client.release();
  } catch (err) {
    console.error("Error al insertar usuarios:", err);
  }
};

module.exports = datosPostgres;
