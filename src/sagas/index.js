import {takeEvery, takeLatest, put} from 'redux-saga';
import Api from '../helpers/api';
import {FETCH_GROUPS_START, fetchGroupsSuccess, fetchGroupsEnd, fetchGroupsError,
        FETCH_CHORES_START, fetchChoresSuccess, fetchChoresEnd, fetchChoresError} from '../actions';


function* fetchGroups(action){
	try{
		let result = yield call(Api.fetchGroups, action.userId)
		yield put(fetchGroupsSuccess(result.data));
		yield put(fetchGroupsEnd());
	} catch(e){
		yield put(fetchGroupsError(e));
		yield put(fetchGroupsEnd());
	}
}

function* fetchChores(action){
	try{
		let result = yield call(Api.fetchChores, action.userId, action.groupId)
		yield put(fetchChoresSuccess(result.data));
		yield put(fetchChoresEnd());
	} catch(e){
		yield put(fetchChoresError(e));
		yield put(fetchChoresEnd());
	}
}

function* rootSaga(){
	takeEvery(FETCH_GROUPS_START, fetchGroups);
	takeEvery(FETCH_CHORES_START, fetchChores);
	
}
