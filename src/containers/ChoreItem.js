import Chore from '../components/Chores/Chore';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) =>{
	return {
		current_user: state.current_user,
		user: ownProps.user,
		chore: ownProps.chore,
		group: ownProps.group,
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {

	}
}

export const ChoreItem = connect(mapStateToProps,mapDispatchToProps)(Chore);
export default ChoreItem;