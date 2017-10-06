import { combineReducers} from 'redux';
import flash_messages from './flash_messages';
import {REMOVE_CHORE, STEAL_CHORE, BUY_OUT_CHORE} from '../actions/';
import {ADD_POINTS, REMOVE_POINTS} from '../actions/';

const groups = (state = [], action)=>{
	switch(action.type){
		case ADD_POINTS:
		return state.map((group)=>{
			let temp = group;
			if (group.id === action.groupId){
				let tempPoints = Object.assign({}, group.points);
				tempPoints[`${action.userId}`] += action.points;
				temp = Object.assign({},group, {points: tempPoints});
				console.log(group);
				console.log(temp); 
			}
			return temp;
		});
		case REMOVE_POINTS:
		return state.map((group)=>{
			let temp = group;
			if (group.id === action.groupId){
				let tempPoints = Object.assign({},group.points);
				tempPoints[`${action.userId}`] -= action.points;
				temp = Object.assign({},group, {points: tempPoints}); 
			}
			return temp;
		});
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
		case STEAL_CHORE:
		return state.map((chore)=>{
			let temp = chore;
			if (chore.id === action.choreId){
				let tempPoints = Object.assign({},chore.points);
				tempPoints.worth = tempPoints.steal;
				tempPoints.steal = 0;
				temp = Object.assign({}, chore, {belongsToUser: action.assignTo}, {points: tempPoints});
				console.log(temp);
			}
			return temp;
		});
		case BUY_OUT_CHORE:
		return state.map((chore)=>{
			let temp = chore;
			if (chore.id === action.choreId){
				temp = Object.assign({},chore, {belongsToUser: action.assignTo});
			}
			return temp;
		});
		case REMOVE_CHORE:
		return state.filter((chore)=>{
			return chore.id !== action.choreId;
		});
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
const current_group = (state = 0, action)=>{
	switch(action.type){
		default: return state;
	}
}

const rootReducer = combineReducers({
	// here is where we'll add all of our reducers
	flash_messages, groups, users, chores, logged_in, current_user, current_group
});

export default rootReducer;
