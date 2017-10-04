import GroupList from '../components/Group/GroupList';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		groups: user_groups(state.groups, state.current_user),
		users: state.users,
		current_user: state.current_user
	}
}

const user_groups = (groups, current_user)=>{
	return groups.filter( (group) =>{
		let userIDs = group.userIDs;
		return userIDs.includes(current_user);
	})
}

const Groups = connect(mapStateToProps)(GroupList);

export default Groups;
