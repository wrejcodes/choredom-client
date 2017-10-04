import React from 'react';
import './Message.css';

const Message = ({ message, onClick}) => (	
	<h4 className={message.message_style + " message"} 
	    onClick={onClick}
	    title="click to dismiss"
	>
		{message.message} <span className="right">X</span>
	</h4>
);

export default Message;