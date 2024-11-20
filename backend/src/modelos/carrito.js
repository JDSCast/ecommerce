const mongoose = require('mongoose');

//Modelado del Carrito en la base de datos
const CarritoSchema = new mongoose.Schema({

    usuarioId: { 
        type: Number, 
        unique: true,
        required: true
        
    },
    productos: [{
        producto:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true,
        },
        cantidad: {
            type: Number,
            required: true,
        }
    }],
    fechaActualizacion: { // cambio
        type: Date,
        default: Date.now,
        required: true
    }

});

//Exportar el modelo
module.exports = mongoose.model('Carritoso', CarritoSchema);