import {connect} from 'react-redux';
import MessageList from '../components/MessageList/MessageList';
import { remove_flash_message } from '../actions/';

const mapStateToProps = (state) => {
	return {
		messages: state.flash_messages
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleMessageClick: (id) => {
			dispatch(remove_flash_message(id));
		}
	}
};

const FlashMessages = connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageList);

export default FlashMessages;