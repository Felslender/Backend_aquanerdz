const express = require('express');
var mqtt = require('mqtt');
const cors = require('cors');

const routerUser = require('./routers/routerUser');
const routerMqtt = require('./routers/routerMqtt')


const app = express();
app.use(express.json());
app.use(cors());
app.use(routerUser);
app.use(routerMqtt);



var client = mqtt.connect({
    host: process.env.MQTT_BROKER,
    port: process.env.MQTT_PORT,
    clientId: process.env.MQTT_ID 
});


client.on('connect', function () {
    console.log('Conectado ao broker MQTT');
    client.subscribe(process.env.MQTT_MILLIS_TOPIC, function (err) {
        if (err) {
            console.error('Erro ao assinar o tópico:', err);
        }
    });
});

client.on('message', function (topic, message) {
    console.log('Mensagem recebida do tópico:', topic, message.toString());

    var millis_str = message.toString();
    console.log('Millis recebido:', millis_str);
});

client.on('error', function (error) {
    console.error('Erro:', error);
});



module.exports = app;