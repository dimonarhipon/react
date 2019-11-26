import {combineReducers, createStore} from 'redux';
import profileReducer from './profile_reducer.js';
import dialogsReducer from './dialogs_reducer.js';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogsReducer
});


let store = createStore(reducers);

export default store;