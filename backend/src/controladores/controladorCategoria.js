const Categoria = require('../modelos/categoria');

// Crear categoria
exports.crearCategoria = async (req, res) =>{
    try {
        const nuevaCategoria = new Categoria(req.body);
        await nuevaCategoria.save();
        res.status(201).json({mensaje: 'categoria creada exitosamente', categoria: nuevaCategoria});
    } catch (error) {
        res.status(400).json({mensaje: 'Error al crear el categoria', error: error.message});
    }
}

// Obtener todos los categorias

exports.obtenerCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.status(200).json({mensaje: 'categorias obtenidas exitosamente', cantidad: categorias.length, categorias: categorias});
    } catch (error) {
        res.status(500).json({mensaje: 'Error en el servidor', error: error.message});
    }
}
exports.obtenerUnaCategoria = async (req, res) => {
    try {
        //verificar categoria
        const categoria = await Categoria.findById(req.params.id);
        if(!categoria){
            return res.status(404).json({mensaje: 'La categoria no existe'});
        }
        res.status(200).json({mensaje: 'categoria obtenida exitosamente', categoria});
        
    } catch (error) {
        res.status(500).json({mensaje: 'Error en el servidor', error: error.message});
    }
}

// Actualizar el categoria
exports.actualizarCategoria = async (req, res) => {
    try {
        const categoriaActualizada = await Categoria.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({mensaje: 'categoria actualizada exitosamente', categoria: categoriaActualizada});
    } catch (error) {
        res.status(500).json({mensaje: 'Error al actualizar el categoria', error: error.message});
    }
}

// Eliminar el categoria
exports.eliminarCategoria = async (req, res) => {
    try {
        const categoriaEliminada = await Categoria.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: 'categoria eliminada exitosamente', categoria: categoriaEliminada});
    } catch (error) {
        res.status(500).json({mensaje: 'Error al eliminar el categoria', error: error.message});
    }
}