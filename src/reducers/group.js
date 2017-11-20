import {ADD_POINTS, 
		REMOVE_POINTS, 
		FETCH_GROUPS_SUCCESS, 
		FETCH_GROUPS_START,
		FETCH_GROUPS_END,
		FETCH_GROUPS_ERROR } from '../actions/groups';

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
		case FETCH_GROUPS_SUCCESS:
			return action.groups;
		default: return state;
	}
};

const groupsLoading = (state = false, action) => {
	switch(action.type){
		case FETCH_GROUPS_START:
			return true;
		case FETCH_GROUPS_END:
			return false;
		default:
			return state;
	}
};

const groupsError = (state = '', action) => {
	switch(action.type){
		case FETCH_GROUPS_ERROR:
			return action.message;
		case FETCH_GROUPS_SUCCESS:
			return '';
		default:
			return state;
	}
}

export default groups;
