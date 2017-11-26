import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Group from '../components/Group/Group';

const mapStateToProps = (state) =>{
	return {
		chores:state.chores,
		users:state.users,
		groups:state.groups,
		current_user:state.current_user
	}
}


const GroupInfo = withRouter(connect(mapStateToProps)(Group));

export default GroupInfo;
