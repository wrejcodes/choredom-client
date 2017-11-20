import {takeEvery, takeLatest, put} from 'redux-saga';
import Api from '../helpers/api';
import {FETCH_GROUPS_START, fetchGroupSuccess, fetchGroupsEnd} from '../actions';


function* fetchGroups(action){
	try{
		let result = yield call(Api.fetchGroups, action.userId)
		yield put(fetchGroupsSuccess(result));
		yield put(fetchGroupsEnd());
	} catch(e){
		yield put(fetchGroupsError(e));
		yield put(fetchGroupsEnd());
	}
}


function* rootSaga(){
	takeEvery(FETCH_GROUPS_START, fetchGroups);
	
}