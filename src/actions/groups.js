export const ADD_POINTS = 'ADD_POINTS';
export const REMOVE_POINTS = 'REMOVE_POINTS';
export const FETCH_GROUPS_START = 'FETCH_GROUPS_START';
export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS';
export const FETCH_GROUPS_END = 'FETCH_GROUPS_END';
export const FETCH_GROUPS_ERROR = 'FETCH_GROUPS_ERROR';
export const CREATE_GROUP = 'CREATE_GROUP';

export const add_points = (groupId, userId, points) =>(
	{
		type: ADD_POINTS,
		groupId,
		userId,
		points
	}
)

export const remove_points = (groupId, userId, points) =>(
	{	
		type: REMOVE_POINTS,
		groupId,
		userId,
		points
	}
)

export const fetchGroupsStart = (userId) => (
	{
		type: FETCH_GROUPS_START,
		userId
	}
)

export const fetchGroupsSuccess = (groups) => (
	{
		type: FETCH_GROUPS_SUCCESS,
		groups
	}

)

export const fetchGroupsEnd = () => (
	{
		type: FETCH_GROUPS_END
	}

)

export const fetchGroupsError = (message) => (	
	{
		type: FETCH_GROUPS_ERROR,
		message
	}

)

export const createGroup = (payload, current_user) => ({
	type: CREATE_GROUP,
	payload,
	current_user
})


