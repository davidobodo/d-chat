import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./MessageInput.css";
import { sendMessage } from "../../actions/action";
import uuidv4 from 'uuid';

const MessageInput = ({ value, receiverId }) => {
	const [message, setMessage] = useState();
	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		setMessage(e.target.value)
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const messageId = uuidv4();
		dispatch(sendMessage(message, messageId, receiverId))
		// const { typing, activeUserId, selectedMessage } = state;

		// if (selectedMessage !== null) {
		// 	store.dispatch(editedMessage(typing, activeUserId, selectedMessage))
		// } else (
		// 	store.dispatch(sendMessage(typing, activeUserId))
		// )
	};

	return (
		<form className="Message" onSubmit={handleOnSubmit}>
			<input
				className="Message__input"
				onChange={handleOnChange}
				placeholder="write a message"
			/>
		</form>
	)
}


export default MessageInput