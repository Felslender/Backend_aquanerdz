const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerMqtt');

router.post("/Resp", controller.teste);
router.get("/teste", controller.testeGet);

module.exports = router;