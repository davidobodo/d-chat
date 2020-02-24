import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./MessageInput.css";
import { sendMessageStart } from "../../actions/action";
import uuidv4 from 'uuid';

const MessageInput = ({ value, activeChatUserId, userId }) => {
	const [message, setMessage] = useState();
	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		setMessage(e.target.value)
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const messageId = uuidv4();
		dispatch(sendMessageStart(message, messageId, userId, activeChatUserId))
		setMessage('')
		// const { typing, activeUserId, selectedMessage } = state;

		// if (selectedMessage !== null) {
		// 	store.dispatch(editedMessage(typing, activeUserId, selectedMessage))
		// } else (
		// 	store.dispatch(sendMessageStart(typing, activeUserId))
		// )
	};

	return (
		<form className="Message" onSubmit={handleOnSubmit}>
			<input
				className="Message__input"
				onChange={handleOnChange}
				value={message}
				placeholder="write a message"
			/>
		</form>
	)
}


export default MessageInput