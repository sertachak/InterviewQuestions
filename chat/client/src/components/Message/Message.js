import React from 'react';

import './Message.css';

const Message = ( props ) =>{
    let messageOwnerIsCurrentUser = false;

    const trimmedName = props.name.trim().toLowerCase();

    if( props.message.user === trimmedName ){
        messageOwnerIsCurrentUser = true;
    }
    return(
        messageOwnerIsCurrentUser ?
        (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{props.message.text}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{props.message.text}</p>
                </div>
                <p className="sentText pl-10">{props.user}</p>
            </div>

          )
    )
}

export default Message;