const Orden = require('../modelos/orden');
const Carrito = require('../modelos/carrito');


exports.crearOrdenDesdeCarrito = async (req, res) => {
    const { usuarioId } = req.params
    console.log(`usuarioId : ${usuarioId}`)
    try {
        const carrito = await Carrito.findOne({ usuarioId: usuarioId }).populate('productos.producto')
        if(!carrito){
            return res.status(404).json({ mensaje: ' Carrito no encontrado'})
        }
        let total=0;
        const productosOrden = carrito.productos.map(item=>{
            const precio = item.producto.precio * item.cantidad
            total+= precio
            return{
                producto: item.producto,
                cantidad: item.cantidad,
                precio: precio
            }
        })
        const nuevaOrden = new Orden( {
            usuarioId: usuarioId,
            carritoId: carrito._id,
            productos: productosOrden,
            total: total
        });
        await nuevaOrden.save();
        await Carrito.findOneAndUpdate({ usuarioId: usuarioId }, {productos: []})
        res.status(201).json({ mensaje: 'Orden creada con exito', orden: nuevaOrden});
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la orden', error: error.message });
    }
};

exports.obtenerOrden = async (req, res) => {
    const { usuarioId, ordenId } = req.params
    try {
        const orden = await Orden.findOne({_id: ordenId, usuarioId: usuarioId}).populate('productos.producto');
        if(!orden){
            return res.status(404).json({ mensaje: 'Orden no encontrada'})
        }
        res.status(200).json({mensaje: 'orden obtenida exitosamente', orden: orden});
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la orden', error: error.message });
    }
};

exports.obtenerOrdenes = async (req, res) => {
    const { usuarioId } = req.params
    try {
        const ordenes = await Orden.find({ usuarioId: usuarioId }).populate('productos.producto');
        if(!ordenes){
            return res.status(404).json({ mensaje: 'El usario no tiene ordenes'})
        }
        res.status(200).json({mensaje: 'ordenes obtenidas exitosamente', cantidad : ordenes.length,  ordenes: ordenes});
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las ordenes', error: error.message });
    }
};