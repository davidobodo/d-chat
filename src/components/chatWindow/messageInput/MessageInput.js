import React from "react";
import store from "../../store/store";
import { setTypingValue, sendMessage, editedMessage } from "../../actions/action";

import "./MessageInput.css";

const MessageInput = ({ value }) => {
	const state = store.getState();

	const handleChange = (e) => {
		//dispatch this action when something is being inputted
		store.dispatch(setTypingValue(e.target.value))
	};

	const handleSubmit = (e) => {
		//do not let the page reload
		e.preventDefault();

		//go to the state of the app, and take the present values of these properties
		const { typing, activeUserId, selectedMessage } = state;

		//if i didnt select any message before editing
		if (selectedMessage !== null) {
			store.dispatch(editedMessage(typing, activeUserId, selectedMessage))
		} else (
			//if i am newly typing this, and this message has not existed before
			store.dispatch(sendMessage(typing, activeUserId))
		)

	};
	return (
		//onsubmitting this field run handlesubmit function
		<form className="Message" onSubmit={handleSubmit}>
			<input
				className="Message__input"
				onChange={handleChange}
				value={value}
				placeholder="write a message"
			/>
		</form>
	)
}


export default MessageInput