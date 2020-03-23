import React from 'react';

import './HeaderBar.css';

const HeaderBar = ( {room} ) =>{
    return(
    <div className="headerBar">
    <div className= "leftInnferContainerHeaderBar">
        <i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i> {/*fa fa-spinner fa-spin fa-3x fa-fwsrc={serverSpinner}*/}
        <h3>{room}</h3>
    </div>
    
    <div  className="rightInnerContainerHeaderBar">
        <a href="/"style={{color: "whitesmoke"}}><i className="fa fa-times-circle" ></i></a>
    </div>
    {/*<input 
    value={message} 
    onChange={(event) => setMessage(event.target.value)}
    onKeyPress={(event) => { return event.key === 'Enter' ? sendMessage(event) : null }}
    />*/}
</div>
    )}

export default HeaderBar;