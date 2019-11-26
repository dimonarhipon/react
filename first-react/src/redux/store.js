import profileReducer from './profile_reducer.js';
import dialogsReducer from './dialogs_reducer.js';

debugger;
let store = {

	_state: {
		profilePage: {
			postData: [
				{id: 1, message: 'Hi how are your?', likesCount: 24},
				{id: 2, message: "It's my first post", likesCount: 32},
				{id: 3, message: "У меня получается!", likesCount: 100},
			],
			newPostText: 'IT'
		},
		dialogPage: {
			dialogsData: [
				{id: 1, name: "Дима"},
				{id: 2, name: "Андрей"},
				{id: 3, name: "Света"},
				{id: 4, name: "Саша"},
				{id: 5, name: "Виктор"},
				{id: 6, name: "Валера"},
				{id: 7, name: "Виталий"}
			],
			messagesData: [
				{id: 1, message: "Yo"},
				{id: 2, message: "OO"},
				{id: 3, message: "YY"},
				{id: 4, message: "YoooY"},
				{id: 5, message: "YoooY"}
			],
			newMessageBody: ""
		}
	},
	_callSubscriber() {
		console.log('State changed');
	},

	dispatch (action) { // { type: 'ADD-POST'}

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);

		this._callSubscriber(this._state);
	},

	getState() {
		return this._state;
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	}
}

debugger;
window.store = store;

export default store;




