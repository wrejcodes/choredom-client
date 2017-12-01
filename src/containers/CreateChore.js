import AddChores from '../components/AddChores/AddChores';
import {createChore} from '../actions/chores'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) => {
	return {

	};
} 

const mapDispatchToProps = (dispatch) => {
	return {
		handleSubmit: (payload, groupId) => dispatch(createChore(payload, groupId)),
	}
}

const CreateChore = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddChores));
export default CreateChore;