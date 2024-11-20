const mongoose = require('mongoose');

//Modelado de Productos en la base de datos
const ProductoSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    imagenUrl:{
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        default: 0,
        required: true
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true,
    },
});

//Exportar el modelo
module.exports = mongoose.model('Producto', ProductoSchema);
