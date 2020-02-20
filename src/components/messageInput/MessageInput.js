import React, { useState } from "react";
import { useDispatch } from "react-redux";
import store from "../../store/store";
import { setTypingValue, sendMessage, editedMessage } from "../../actions/action";

import "./MessageInput.css";

const MessageInput = ({ value }) => {
	console.log("message input")
	const [message, setMessage] = useState();
	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		console.log("hello")
		setMessage(e.target.value)
		console.log(message)
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("HELLO")
		// dispatch(sendMessage())
		// const { typing, activeUserId, selectedMessage } = state;

		// if (selectedMessage !== null) {
		// 	store.dispatch(editedMessage(typing, activeUserId, selectedMessage))
		// } else (
		// 	store.dispatch(sendMessage(typing, activeUserId))
		// )
	};

	console.log(message);
	return (
		<form className="Message" onSubmit={handleSubmit}>
			<input
				className="Message__input"
				onChange={(e) => console.log("hello")}
				placeholder="write a message"
			/>
		</form>
	)
}


export default MessageInput