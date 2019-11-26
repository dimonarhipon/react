import React from 'react';
import clasess from '../Dialogs.module.css';

const Message = (props) =>  {
	return (
		<div className={clasess.message}>
			{props.message}
		</div>
	);
}

export default Message;