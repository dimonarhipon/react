import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.js";
import Message from "./Message/Message.js";

let Dialogs = props => {
  let onMessage = () => {
    props.addMessage();
  };
  let onEditMessage = event => {
    let body = event.target.value;
    props.addEditMessage(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItem}>
        {props.dialog.map(({ id, name }) => (
          <DialogItem key={id} name={name} id={id} />
        ))}
      </div>
      <div className={classes.messages}>
        {props.message.map(({ id, message }) => (
          <Message key={id} message={message} id={id} />
        ))}
      </div>
      <div className={classes.on_messages}>
        <textarea onChange={onEditMessage} value={props.editChangeMessage} />
        <button onClick={onMessage}>Добавить сообщение</button>
      </div>
    </div>
  );
};

export default Dialogs;

// import {updateNewMessageBodyCreator, sendMessageActionCreator} from "../../redux/dialogs_reducer.js";

// const Dialogs = (props) => {

// 	let state = props.dialogPage;

// 	let dialogsElements = state.dialogsData.map(dialog =>
// 		<DialogItem name={dialog.name} id={dialog.id} /> );

// 	let messagesElements = state.messagesData.map(message =>
// 		<Message message={message.message} /> );

// 	let newMessageBody = state.newMessageBody;
// 	let onSendMessageClick = () => {
// 		props.sendMessageActionCreator();
// 	}
// 	let onNewMessageChange = (e) => {
// 		let body = e.target.value;
// 		props.updateNewMessageBodyCreator(body);
// 	}

// return (
//   <div className={clasess.dialogs}>
//     <div className={clasess.dialogsItem}>{dialogsElements}</div>
//     <div className={clasess.messages}>{messagesElements}</div>
//     <div>
//       <div>
//         <textarea
//           value={newMessageBody}
//           onChange={onNewMessageChange}
//           placeholder="Enter youe message"
//         />
//       </div>
//       <div>
//         <button onClick={onSendMessageClick}>Send</button>
//       </div>
//     </div>
//   </div>
// );
