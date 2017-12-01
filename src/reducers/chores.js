import {REMOVE_CHORE, 
		STEAL_CHORE, 
		BUY_OUT_CHORE,
		FETCH_CHORES_START,
		FETCH_CHORES_SUCCESS,
		FETCH_CHORES_ERROR,
		FETCH_CHORES_END,
		CREATE_CHORE} from '../actions/chores';

let id = 12; // initial count of chores

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
		case CREATE_CHORE:
			return [
				...state,
				{
					id: ++id,
					name: action.payload.choreName,
					description: action.payload.description,
					startTime: Date.now() - (1000 * 48 * 60 * 60),
					endTime: Date.now() + (1000 * 48 * 60 * 60),
					belongsToGroup: action.groupId,
					belongsToUser: 1,
					points: {
						worth: parseInt(action.payload.points, 10),
						buy: parseInt(action.payload.points, 10) * 2.25,
						steal: parseInt(action.payload.points, 10) * 2
					}

				}
			]
		case FETCH_CHORES_SUCCESS:
			return action.chores;
		default: return state;
	}
};

const choresLoading = (state=false, action) =>{
	switch(action.type){
		case FETCH_CHORES_START:
			return true;
		case FETCH_CHORES_END:
			return false;
		default:
			return state;
	}			
}

const choresError = (state = '', action) => {
	switch(action.type){
		case FETCH_CHORES_ERROR:
			return action.message;
		case FETCH_CHORES_START:
			return '';
		default:
			return state;
	}
}

export default chores;
