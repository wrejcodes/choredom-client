import React, { Component } from 'react';
import Message from '../Message/Message'
import './MessageList.css';

class MessageList extends Component {
	constructor(props){
		super(props);
	}

	render(){
		let {messages, handleMessageClick} = this.props;
		const show_messages = messages.length;
		const message_array = messages.map( (message) =>(
			<Message
			 message={message}
			 key={message.id}
			 onClick={()=>handleMessageClick(message.id)} />
		));
		return(
			<div id="flash_message_container" >
				{
					show_messages ? 
					message_array :
					<div id="no_flash_messages" />
				
				}
			</div>
		);
	}

}

export default MessageList;