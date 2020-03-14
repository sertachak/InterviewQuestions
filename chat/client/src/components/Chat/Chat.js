import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {

    const[name, setName] = useState('');
    const[room, setRoom] = useState('');
    const[message, setMessage] = useState('');
    const[messages, setMessages] = useState([]);

    const CONNECTION = 'localhost:5000';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        socket = io(CONNECTION);

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, ({error}) => {
            alert(error);
        });

        return () =>{
            socket.emit('disconnect');
            socket.off();
        }
    }, [location.search, CONNECTION])

    useEffect( () =>{
        socket.on('backEndMessage', (message) => {
            setMessages([...messages, message]);
        }, [messages]);
    })

    const sendMessage = (eventInput) => {
        if(message)
            socket.emit('sendMessage', message, () => setMessage('') );
    }

    console.log(message, messages);

    return( 
        <div>
            <div>
                <input value={message} onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) => { return event.key === 'Enter' ? sendMessage() : null }}
                />
            </div>
        </div>
   )
}

export default Chat;