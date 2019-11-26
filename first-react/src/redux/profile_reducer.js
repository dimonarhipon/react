const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	postData: [
		{id: 1, message: 'Hi how are your?', likesCount: 24},
		{id: 2, message: "It's my first post", likesCount: 32},
		{id: 3, message: "У меня получается!", likesCount: 100},
	],
	newPostText: 'IT'
}

const profileReducer = (state = initialState, action) => {
	debugger;
	switch (action.type) {
		case ADD_POST:
			let newPost = { // addPost = () =>
				id: 5, 
				message: state.newPostText,
				likesCount: 0
			};
			state.postData.push(newPost);
			state.newPostText = '';

			return state;


		case UPDATE_NEW_POST_TEXT: 
			state.newPostText = action.newText;

			return state;


		default: 
			return state;
	}
}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}
export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT, newText: text
	}
}


export default profileReducer;