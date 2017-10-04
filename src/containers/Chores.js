import ChoresList from '../components/Chores/ChoreList';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    current_group: state.current_group,
    current_user: state.current_user,
    chores: user_chores(state.current_group, state.current_user, state.chores)
  }
}

const user_chores = (current_group, current_user, chores)=>{
  console.log(current_group);
  console.log(current_user);
  console.log(chores);
  return chores.filter( (chores) =>{
    let belongsToGroup = chores.belongsToGroup;
    return belongsToGroup.includes(current_group);
  })
}

const Chores = connect(mapStateToProps)(ChoresList);

export default Chores;
