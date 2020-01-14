import Dialogs from "./Dialogs.js";
import {
  updateNewMessageBodyCreator,
  sendMessageActionCreator
} from "../../redux/dialogs-reducer.js";
import { connect } from "react-redux";

// const DialogsContainer = props => {
//   let state = props.store.getState();

//   let newMessageBody = state.newMessageBody;
//   let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageActionCreator());
//   };
//   let onNewMessageChange = body => {
//     props.store.dispatch(updateNewMessageBodyCreator(body));
//   };

//   return (
//     <Dialogs
//       addEditMessage={onNewMessageChange}
//       addMessage={onSendMessageClick}
//       dialog={state.dialogsReducer.dialogData}
//       message={state.dialogsReducer.messageData}
//       editChangeMessage={state.dialogsReducer.editChangeMessage}
//     />
//   );
// };
let mapStateToProps = state => {
  return {
    dialog: state.dialogsReducer.dialogData,
    message: state.dialogsReducer.messageData,
    editChangeMessage: state.dialogsReducer.editChangeMessage
  };
};
let mapDispatchToProps = dispatch => {
  return {
    addMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    addEditMessage: body => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  };
};
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
