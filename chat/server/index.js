const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;
const router = require('./router');

const { addUser, removeUser, getUser } = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('We have a new connection !!!!!!!!!!!!!!!!!!!');

    socket.on('join', ({name, room}, turnback) => {
        const { user, error} = addUser( socket.id, name, room );

        if(error){

           return turnback( error) ;
        }

        socket.emit('backEndMessage', { user: 'Server', text:`${user.name} Welcome to room ${user.room}`});
        socket.broadcast.to(user.room).emit('backEndMessage', { user:'Server', text:`${user.name} is entered room `})
        socket.join(user.room)

        turnback();
    })

    socket.on('sendMessage', (message, turnback) => {
        const user = getUser( socket.id );
        
        io.to(user.room).emit('backEndMessage', {user: user.name, text: message})

        turnback();
    })

    socket.on('disconnect', () => {
        console.log('User left');
    })
})

app.use(router);

server.listen(PORT, () => console.log(`Server has started port : ${PORT}`) );