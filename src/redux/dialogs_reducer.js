const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY: 
			state.newMessageBody = action.body;

			return state;


		case SEND_MESSAGE: 
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messagesData.push({id: 6, message: body})

			return state;

		default: 
			return state;

	}

}

export const sendMessageActionCreator = () => {
	return { 
		type: SEND_MESSAGE
	}
}
export const updateNewMessageBodyCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY, body: body
	}
}

export default dialogsReducer;