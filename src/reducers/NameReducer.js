import * as actionType from '../actions/ActionType';

const initialState = {
	first: 'no',
	last:'name',
	visible: true,
	color: '#33ccff',
	};

const nameReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionType.CASS:
	console.log(action);
	return {
		...state,
		first: 'Cass'
	}
//	return newState ={'first':'Cass','last':'Seck'};
    case actionType.JASON:
	return {
		...state,
		first:'Jason',
		last: 'Seck'
	}
	case actionType.ADD_COUNTER:
	return {
		...state,
		first:'Ralphie',
		last:'Moncho'
	}

    default:
      return state
  }
}

export default nameReducer;
