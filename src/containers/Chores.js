import ChoresList from '../components/Chores/ChoreList';
import {connect} from 'react-redux';
import {user_groups} from './Groups';

const mapStateToProps = (state) => {
  return {
    current_user: state.current_user,
    groups: user_groups(state.groups, state.current_use),
    chores: user_chores(state.current_user, state.chores)
    }
}

const user_chores = (current_user, chores)=>{

  return chores.filter( (chore) =>{
    return chore.belongsToUser === current_user;
  })
}

const Chores = connect(mapStateToProps)(ChoresList);

export default Chores;
