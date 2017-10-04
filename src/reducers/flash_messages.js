import { ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from '../actions';


export const flash_messages = (state = [], action) =>{
	switch(action.type){
		case ADD_FLASH_MESSAGE:
			return [
				...state,
				{
					id: action.id,
					message: action.message,
					message_style: action.message_style
				}
			];
		case REMOVE_FLASH_MESSAGE:
			return state.filter( (message) =>{
				return message.id !== action.id 
			})
		default: 
			return state;
	}
};

export default flash_messages;