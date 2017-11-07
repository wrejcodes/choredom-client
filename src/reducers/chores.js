import {REMOVE_CHORE, STEAL_CHORE, BUY_OUT_CHORE} from '../actions/';

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

export default chores;
