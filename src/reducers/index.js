import { combineReducers} from 'redux';
import flash_messages from './flash_messages'

const groups = (state = [], action)=>{
	switch(action.type){
		default: return state;
	}
};
const users = (state = [], action)=>{
	switch(action.type){
		default: return state;
	}
};
const chores = (state = [], action)=>{
	switch(action.type){
		default: return state;
	}
};
const logged_in = (state = false, action)=>{
	switch(action.type){
		default: return state;
	}
};
const current_user = (state = 0, action)=>{
	switch(action.type){
		default: return state;
	}
};

const rootReducer = combineReducers({
	// here is where we'll add all of our reducers
	flash_messages, groups, users, chores, logged_in, current_user
});

export default rootReducer;