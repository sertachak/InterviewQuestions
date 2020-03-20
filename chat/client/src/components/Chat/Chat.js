import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Chat';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles();

let socket;

const Chat = ({ location }) => {
    const classes = makeStyles();
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

        console.log("Inside Chat before emit 1111 Name: ", name, "  Room: ", room )
        socket.emit('join', {name, room}, () => {
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
        eventInput.preventDefault();
        if(message)
            socket.emit('sendMessage', message, () => setMessage('') );
    }

    console.log(message, messages);

    return( 
        <div className="headerBar">
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <div>
                <input 
                value={message} 
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) => { return event.key === 'Enter' ? sendMessage(event) : null }}
                />
            </div>
        </div>
   )
}

export default Chat;