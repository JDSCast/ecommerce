const express = require('express');

const router = express.Router();

const controladorCategoria = require('../controladores/controladorCategoria');

// Rutas para el CRUD de Categorias

router.post('/', controladorCategoria.crearCategoria); 

router.get('/', controladorCategoria.obtenerCategorias); 

router.get('/:id', controladorCategoria.obtenerUnaCategoria); // inventado

router.put('/:id', controladorCategoria.actualizarCategoria); 

router.delete('/:id', controladorCategoria.eliminarCategoria); 

module.exports = router;