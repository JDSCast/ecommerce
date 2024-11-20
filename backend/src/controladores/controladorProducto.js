const Producto = require('../modelos/producto');

// Crear producto
exports.crearProducto = async (req, res) =>{
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json({mensaje: 'Producto creado exitosamente', producto: nuevoProducto});
    } catch (error) {
        res.status(400).json({mensaje: 'Error al crear el producto', error: error.message});
    }
}

// Obtener todos los productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find().populate('categoria');
        res.status(200).json({mensaje: 'Productos obtenidos exitosamente', cantidad: productos.length, productos});
    } catch (error) {
        res.status(500).json({mensaje: 'Error en el servidor', error: error.message});
    }
}

// Obtener un producto
exports.obtenerUnProducto = async (req, res) => {
    try {
        const producto = await Producto.findOne({_id : req.params.id}).populate('categoria');
        
        //Verifica el producto
        if (producto != null) {
           res.status(200).json({mensaje: 'El Producto se obtuvo exitosamente', producto});
        } else {
            res.status(404).json({mensaje: 'El producto no existe'});
        }
        
    } catch (error) {
        res.status(500).json({mensaje: 'Error en el servidor', error: error.message});
    }
}
// Actualizar el producto
exports.actualizarProducto = async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({mensaje: 'Producto actualizado exitosamente', producto: productoActualizado});
    } catch (error) {
        res.status(500).json({mensaje: 'Error al actualizar el producto', error: error.message});
    }
}

// Eliminar el producto
exports.eliminarProducto = async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: 'Producto eliminado exitosamente', producto: productoEliminado});
    } catch (error) {
        res.status(500).json({mensaje: 'Error al eliminar el producto', error: error.message});
    }
}