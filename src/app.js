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



// Criar cliente MQTT
var client = mqtt.connect({
    host: process.env.MQTT_BROKER,
    port: process.env.MQTT_PORT,
    clientId: process.env.MQTT_ID // Defina MQTT_ID de acordo com suas configurações no ESP32
});

// Conectar-se ao broker MQTT
client.on('connect', function () {
    console.log('Conectado ao broker MQTT');
    // Assinar o tópico desejado após a conexão
    client.subscribe(process.env.MQTT_MILLIS_TOPIC, function (err) {
        if (err) {
            console.error('Erro ao assinar o tópico:', err);
        }
    });
});

// Callback para quando uma mensagem é recebida do broker
client.on('message', function (topic, message) {
    console.log('Mensagem recebida do tópico:', topic, message.toString());
    // Adicione sua lógica de processamento aqui
    // Por exemplo, você pode converter o tempo millis recebido em uma string e armazená-lo
    var millis_str = message.toString();
    console.log('Millis recebido:', millis_str);
});

// Tratamento de erros
client.on('error', function (error) {
    console.error('Erro:', error);
});








module.exports = app;