const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerUsuario');
const middleware = require('../middlewares/middlewareUsuario');

router.post('/cadastroUsuario', middleware.validateEmail, controller.createUsuario);






module.exports = router;