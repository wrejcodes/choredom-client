import { combineReducers} from 'redux';
import flash_messages from './flash_messages'

const rootReducer = combineReducers({
	// here is where we'll add all of our reducers
	flash_messages
});

export default rootReducer;