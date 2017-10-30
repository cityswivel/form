import * as actionType from './ActionType';

//counter actions
export const addCounter = () => ({
  type: actionType.ADD_COUNTER,
	payload: 1,
});

export const removeCounter = () => ({
  type: actionType.REMOVE_COUNTER,
  payload: 1
});

//name actions
export const cass = () => ({
	type: actionType.CASS,
});

export const jason = () => ({
	type: actionType.JASON
});
