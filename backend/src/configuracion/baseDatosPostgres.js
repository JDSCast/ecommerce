const { Pool } = require('pg');
const dotenv = require('dotenv');


const pool = new Pool({

    user: process.env.POSTGRES_USER ,

    host: process.env.POSTGRES_HOST ,

    database: process.env.POSTGRES_DB ,

    password: process.env.POSTGRES_PASSWORD ,

    port: process.env.POSTGRES_PORT 

});

const conectarBDPostgres = async () => {

    try {

        await pool.connect();

        console.log('Conexión exitosa a PostgreSQL');

    } catch (error) {

        console.error('Error al conectar a PostgreSQL:', error.message);

    }

};

module.exports = { conectarBDPostgres, pool };