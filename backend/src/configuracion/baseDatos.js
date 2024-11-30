const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Configuración del entorno
dotenv.config();

//conectar a la base de datos Mongo local 
const conectarBDMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewurlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Base de datos Mongo conectada');
    } catch (error) {
        console.log('Error en la conexión a MongoDB: ',error);
        process.exit();
    }
};

//conectar a la base de datos con Mongo Atlas
// const conectarBDMongo = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })
//         console.log('Base de datos conectada a MongoDB Atlas ');
//     } catch (error) {
//         console.log('Error en la conexión a MongoDB Atlas: ',error);
//         process.exit();
//     }
// };
// Exportar la función
module.exports = conectarBDMongo;