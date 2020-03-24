import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'

import Message from '../Message/Message'
import './MessageList.css';

const MessageList = ( props ) =>{
    return(
    <ScrollToBottom>
        {props.messages.map( (message, i) => <div key={i}><Message message={message} name={props.name}></Message></div> ) }
    </ScrollToBottom>
    )}

export default MessageList;