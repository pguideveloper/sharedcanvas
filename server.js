const express = require('express');
const cors = require('cors');

const app = express(); 
const server = require('http').createServer(app);
const socket = require('socket.io');
const io = socket(server);

app.use(cors());

io.on('connection', connection => {
    console.log(`A new socket connection: ${connection.id}`);
    connection.on('paths', paths => {
        connection.broadcast.emit('paths', paths);
    });
});

const port = process.env.port || 3000; 
server.listen(port);