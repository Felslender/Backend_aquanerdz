const express = require('express');
const app = express();
const cors = require('cors');

const routerUsuario = require('./routers/routerUsuario');


app.use(express.json());
app.use(cors());

app.use(routerUsuario);



module.exports = app;