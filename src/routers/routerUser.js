const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerUser');
const middleware = require('../middlewares/middlewareUser');

router.post('/cadastroUsuario', middleware.validateEmail, controller.createdUser);


module.exports = router;