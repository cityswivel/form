import counterReducer from './CounterReducer';
import nameReducer from './NameReducer';
import testReducer from './TestReducer';
import {reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	count: counterReducer,
	name: nameReducer,
	test: testReducer,
	form: formReducer,
});

export default rootReducer;

