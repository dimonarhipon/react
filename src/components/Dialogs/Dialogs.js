import React from 'react';
import clasess from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.js';
import Message from './Message/Message.js';
import {NavLink} from 'react-router-dom';
import {updateNewMessageBodyCreator, sendMessageActionCreator} from "../../redux/dialogs_reducer.js";


const Dialogs = (props) => {

	let state = props.dialogPage;


	let dialogsElements = state.dialogsData.map(dialog => 
		<DialogItem name={dialog.name} id={dialog.id} /> );
	let messagesElements = state.messagesData.map(message => 
		<Message message={message.message} /> );


	let newMessageBody = state.newMessageBody;
	let onSendMessageClick = () => {
		props.sendMessageActionCreator();
	}
	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBodyCreator(body);
	}
				
	debugger;
	return (
		<div className={clasess.dialogs}>
			<div className={clasess.dialogsItem}>
				{dialogsElements}
			</div>
			<div className={clasess.messages}>
				{messagesElements}
			</div>
			<div>
				<div>
					<textarea value={newMessageBody}
							  onChange={onNewMessageChange}
							  placeholder="Enter youe message" />
				</div>
				<div>
					<button onClick={onSendMessageClick}>Send</button>
				</div>
				</div>
		</div>
	);
};	

export default Dialogs;