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

export default groups;
