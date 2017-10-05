import GroupList from '../components/Group/GroupList';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		groups: user_groups(state.groups, state.current_user),
		users: state.users,
		current_user: state.current_user
	}
}

export const user_groups = (groups, current_user)=>{
	return groups.filter( (group) =>{
		let userIDs = group.userIDs;
		return userIDs.includes(current_user);
	})
}

const Groups = withRouter(connect(mapStateToProps)(GroupList));

export default Groups;
