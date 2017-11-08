import {SIGN_OUT} from '../actions/';

const logged_in = (state = false, action)=>{
	switch(action.type){
		case SIGN_OUT:
			return false;
		default: return state;
	}
};

export default logged_in
