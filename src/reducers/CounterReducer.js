import * as actionType from '../actions/ActionType';

const counterReducer = (state = 0, action) => {
  let newState;
console.log(action);

  switch (action.type) {
    case actionType.ADD_COUNTER:
	if (action.payload) {
		return newState = state + action.payload;
	}
	return newState = state + 100;
//      return newState = state + action.payload;
    case actionType.REMOVE_COUNTER:
      return newState = state - 100;

    default:
      return state
  }
}

export default counterReducer;
