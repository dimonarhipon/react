const ADD_MESSAGE = "ADD-MESSAGE";
const EDIT_MESSAGE = "EDIT-MESSAGE";

let initialState = {
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
  editChangeMessage: "ку"
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messageData: [
          ...state.messageData,
          { id: 6, message: state.editChangeMessage }
        ],
        editChangeMessage: ""
      };
    case EDIT_MESSAGE:
      return {
        ...state,
        editChangeMessage: action.editMessage
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  };
};
export const updateNewMessageBodyCreator = body => {
  return {
    type: EDIT_MESSAGE,
    editMessage: body
  };
};

export default dialogsReducer;
