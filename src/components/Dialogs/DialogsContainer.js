import React from 'react';
import clasess from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.js';
import Message from './Message/Message.js';
import Dialogs from './Dialogs.js';
import {NavLink} from 'react-router-dom';
import {updateNewMessageBodyCreator, sendMessageActionCreator} from "../../redux/dialogs_reducer.js";


const DialogsContainer = (props) => {

	let state = props.store.getState().dialogPage;

	let newMessageBody = state.newMessageBody;
	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageActionCreator() );
	}
	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	}
				
	return (
		<Dialogs 
			updateNewMessageBodyCreator={onNewMessageChange}
			sendMessageActionCreator={onSendMessageClick}
			dialogPage={state}
			/>
	);
};	

export default DialogsContainer;