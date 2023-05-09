const router = require('express').Router();
const controller = require('./pedidosController');

router.get('/obtenerPedidos', controller.obtenerPedidos);
router.get('/obtenerProductos', controller.obtenerProductos);
router.get('/obtenerPedidoPorId/:id', controller.obtenerPedidoPorId);
router.get('/obtenerSolicitudesPorIdPedido/:idPedido', controller.obtenerSolicitudesPorIdPedido);

router.post('/crearPedido', controller.crearPedido);
router.post('/crearSolicitud', controller.crearSolicitud);

router.put('/editarPedido', controller.editarPedido);

router.delete('/eliminarSolicitud/:idSolicitud', controller.eliminarSolicitud);

module.exports = router;