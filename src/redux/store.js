import profileReducer from "./profile-reducer.js";
import dialogsReducer from "./dialogs-reducer.js";

// const ADD_POST = "ADD-POST";
// const EDIT_POST = "EDIT-POST";
// const ADD_MESSAGE = "ADD-MESSAGE";
// const EDIT_MESSAGE = "EDIT-MESSAGE";

let store = {
  _state: {
    dialogData: [
      { id: 1, name: "Имя 11" },
      { id: 2, name: "Имя 22" },
      { id: 3, name: "Имя 33" },
      { id: 4, name: "Имя 4" },
      { id: 5, name: "Имя 5" },
      { id: 6, name: "Имя 6" }
    ],
    messageData: [
      { id: 1, message: "Сообщение 11" },
      { id: 2, message: "Сообщение 23" },
      { id: 3, message: "Сообщение 3" },
      { id: 4, message: "Сообщение 4" },
      { id: 5, message: "Сообщение 5" },
      { id: 6, message: "Сообщение 6" }
    ],
    editChangeMessage: "ку",
    postsData: [
      { id: 1, post: "How are you?1", likesCount: "21" },
      { id: 2, post: "How are you?2", likesCount: "12" },
      { id: 3, post: "How are you?3", likesCount: "13" },
      { id: 4, post: "How are you?4", likesCount: "14" },
      { id: 5, post: "How are you?5", likesCount: "15" },
      { id: 6, post: "How are you?6", likesCount: "16" }
    ],
    editChangePost: "ПРивет"
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._callSubcriber = observer;
  },
  dispatch(action) {
    this._state.postsData = profileReducer(this._state.postsData, action);
    this._state.messageData = dialogsReducer(this._state.dialogData, action);
    this._callSubscriber(this._state);
    // switch (action.type) {
    //   case ADD_POST:
    //     let newPost = {
    //       id: 7,
    //       post: this._state.editChangePost,
    //       likesCount: 17
    //     };
    //     this._state.postsData.push(newPost);
    //     this._state.editChangePost = "";
    //     this._callSubcriber(this._state);
    //     return this._state;
    //   case EDIT_POST:
    //     this._state.editChangePost = action.editPost;
    //     this._callSubcriber(this._state);
    //     return this._state;
    //   case ADD_MESSAGE:
    //     let newMessage = {
    //       id: 6,
    //       message: this._state.editChangeMessage
    //     };
    //     this._state.messageData.push(newMessage);
    //     this._state.editChangeMessage = "";
    //     this._callSubcriber(this._state);
    //     return this._state;
    //   case EDIT_MESSAGE:
    //     this._state.editChangeMessage = action.editMessage;
    //     this._callSubcriber(this._state);
    //     return this._state;
    //   default:
    //     return this._state;
    // }
  }
};

// export const newPostActionCreator = () => {
//   return {
//     type: ADD_POST
//   };
// };
// export const onPostChangeActionCreator = text => {
//   return {
//     type: EDIT_POST,
//     editPost: text
//   };
// };
// export const addMessageActionCreator = () => {
//   return {
//     type: ADD_MESSAGE
//   };
// };
// export const editMessageActionCreator = text => {
//   return {
//     type: EDIT_MESSAGE,
//     editMessage: text
//   };
// };

export default store;
