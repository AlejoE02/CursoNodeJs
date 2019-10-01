const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');
const bodyParser = require('body-parser')
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

const io = require('socket.io')(server);

// const router = require('./components/message/network');
db(config.dbUrl);

app.use(cors());

app.use(bodyParser.json()); //enviar parametros de tipo json
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server)
router(app);

// app.use('/', function(req, res){
//     res.send('Hola');
// });

app.use(config.publicRoute, express.static('public'));

io.on('connection', function(socket){
    console.log('Nuevo cliente conectado');
    socket.emit('mensaje', 'Bienvenido');
});

setInterval(function () {
    io.emit('mensaje', 'Hola, les escribo a todos');
});

server.listen(config.port, function () {
    console.log('La aplicación está escuchando en'+ config.host +':'+config.port);
});