import Chore from '../components/Chores/Chore';
import {buy_out_chore, steal_chore, remove_chore} from '../actions/chores';
import {add_points, remove_points} from '../actions/groups'
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
		handleSteal: (choreId, assignTo)=> dispatch(steal_chore(choreId,assignTo)),
		handleBuyOutChore: (choreId, assignTo)=> dispatch(buy_out_chore(choreId, assignTo)),
		handleCompleteChore: (choreId) => dispatch(remove_chore(choreId)),
		handleAwardPoints: (groupId, userId, points) => dispatch(add_points(groupId, userId, points)),
		handleSpendPoints: (groupId, userId, points) => dispatch(remove_points(groupId, userId, points))
	}
}

export const ChoreItem = connect(mapStateToProps,mapDispatchToProps)(Chore);
export default ChoreItem;
