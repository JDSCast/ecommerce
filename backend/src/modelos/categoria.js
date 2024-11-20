const mongoose = require('mongoose');

//Modelado de Categorias en la base de datos
const CategoriaSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now,
        required: true
    }

});

//Exportar el modelo
module.exports = mongoose.model('Categoria', CategoriaSchema);