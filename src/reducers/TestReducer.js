import * as actionType from '../actions/ActionType';

const initialState = {
		city: 'Sante Fe',
		state: 'NM',
		zip: '87505',
		tp_name: '315 Bistro',
	};

const testReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionType.CASS:
	return {
		...state,
		city: 'Los Angeles'
	}
//	return newState ={'first':'Cass','last':'Seck'};
    case actionType.JASON:
	return {
		...state,
		city: 'New York',
		name: 'testing'
	}
	case actionType.ADD_COUNTER:
	return {
		...state,
		counter:'added'
	}

    default:
      return state
  }
}

export default testReducer;
