export const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
export const REMOVE_FLASH_MESSAGE = 'REMOVE_FLASH_MESSAGE';
export const SIGN_OUT = 'SIGN_OUT';

let message_id = 0;

// Index contains the basic actions

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

export const sign_out = () => (
	{
		type: SIGN_OUT
	}
)


