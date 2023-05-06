const router = require('express').Router();
const controller = require('./projectController');

router.get('/test', controller.obtenerProjects);

module.exports = router;