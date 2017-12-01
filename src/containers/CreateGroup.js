import AddGroup from '../components/AddGroup/AddGroup';
import {createGroup} from '../actions/groups'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) => {
	return {
		users: state.users,
		current_user: state.current_user
	};
} 

const mapDispatchToProps = (dispatch) => {
	return {
		handleSubmit: (payload, current_user) => dispatch(createGroup(payload,current_user)),
	}
}

const CreateGroup = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddGroup));
export default CreateGroup;