const router = require('express').Router();

router.use('/login', require('./login'));
router.use('/autores', require('./autores'));
router.use('/coleccion', require('./coleccion'));
router.use('/libros', require('./libros'));
router.use('/librosdeseados', require('./librosdeseados'));
router.use('/project', require('./project'));
router.use('/pedidos', require('./pedidos'));

module.exports = router;