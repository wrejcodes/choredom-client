export const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
export const REMOVE_FLASH_MESSAGE = 'REMOVE_FLASH_MESSAGE';
let message_id = 0;

// here we list all of our action creators

export const add_flash_message = (message, message_style) =>(
	{
		type: ADD_FLASH_MESSAGE,
		id: message_id++,
		message,
		message_style
	}
);


export const remove_flash_message = (id) =>(
	{
		type: REMOVE_FLASH_MESSAGE,
		id
	}
);