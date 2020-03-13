import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {

    const[name, setName] = useState('');
    const[room, setRoom] = useState('');
    const CONNECTION = 'localhost:5000';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        socket = io(CONNECTION);

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, ({error}) => {
            alert(error);
        });

    }, [location.search, CONNECTION])

    return( 
        <h1>
            Chat
        </h1>
   )
}

export default Chat;