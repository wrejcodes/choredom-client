export const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
export const REMOVE_FLASH_MESSAGE = 'REMOVE_FLASH_MESSAGE';
export const STEAL_CHORE = 'STEAL_CHORE';
export const BUY_OUT_CHORE = 'BUY_OUT_CHORE';
export const REMOVE_CHORE = 'REMOVE_CHORE';


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

export const steal_chore = (choreId, userId) =>(
	{
		type: STEAL_CHORE,
		choreId,
		userId
	}
);

export const buy_out_chore = (choreId, userId) =>{
	type: BUY_OUT_CHORE,
	choreId,
	userId
}


