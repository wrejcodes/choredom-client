export const STEAL_CHORE = 'STEAL_CHORE';
export const BUY_OUT_CHORE = 'BUY_OUT_CHORE';
export const REMOVE_CHORE = 'REMOVE_CHORE';
export const FETCH_CHORES_START = 'FETCH_CHORES_START';
export const FETCH_CHORES_SUCCESS = 'FETCH_CHORES_SUCCESS';
export const FETCH_CHORES_END = 'FETCH_CHORES_END';
export const FETCH_CHORES_ERROR = 'FETCH_CHORES_ERROR';

export const steal_chore = (choreId, assignTo) =>(
	{
		type: STEAL_CHORE,
		choreId,
		assignTo
	}
);

export const buy_out_chore = (choreId, assignTo) =>(
	{
		type: BUY_OUT_CHORE,
		choreId,
		assignTo
	}
)

export const remove_chore = (choreId) =>(
	{
		type: REMOVE_CHORE,
		choreId
	}
)

export const fetchChoresStart = (userId,groupId) => (
	{
		type: FETCH_CHORES_START,
		userId,
		groupId
	}
)

export const fetchChoresSuccess = (group,chores) => (
	{
		type: FETCH_CHORES_SUCCESS,
		group,
		chores
	}

)

export const fetchChoresEnd = () => (
	{
		type: FETCH_CHORES_END
	}

)

export const fetchChoresError = (message) => (	
	{
		type: FETCH_CHORES_ERROR,
		message
	}

)


