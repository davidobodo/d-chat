import React from 'react';
import moment from 'moment';

const Chat = ({ message, clicked, senderId, userId, time }) => {
	let is_user_msg;

	if (senderId === userId) {
		is_user_msg = true;
	} else {
		is_user_msg = false;
	}

	console.log(time.toDate());

	return (
		<span className={`Chat__wrapper ${is_user_msg ? 'is-user-msg' : ''}`} onClick={clicked}>
			<span className={`Chat__message ${is_user_msg ? 'is-user-msg' : ''}`}>{message}</span>
			<span className="Chat__time">{moment(time.toDate()).calendar()}</span>
		</span>
	);
};

export default Chat;
