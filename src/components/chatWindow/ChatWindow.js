import React from "react";
import PropTypes from "prop-types";
import {
	useSelector,
	shallowEqual,
} from "react-redux";
import Header from "../header/Header";
import Chats from "../chats/Chats";
import store from "../../store/store";
import "./ChatWindow.css";
import MessageInput from "../messageInput/MessageInput";
import {firestoreConnect} from "react-redux-firebase";

const ChatWindow = (props) => {
	const {activeChatUserId, userId} = props;
	const {
		allUsers,
		firestoreMessages,
	} = useSelector(
		(state) => ({
			allUsers:
				state.firestore.ordered.users,
			allMessages: state.messages,
			firestoreMessages:
				state.firestore.ordered.messages,
		}),
		shallowEqual
	);

	const activeChat = allUsers.filter(
		(user) => user.id === activeChatUserId
	);

	const {typing} = store.getState();

	return (
		<div className="ChatWindow">
			<Header
				activeChat={activeChat}
				activeChatUserId={
					activeChatUserId
				}
			/>
			<Chats
				messages={firestoreMessages}
				userId={userId}
				activeChatUserId={
					activeChatUserId
				}
			/>
			<MessageInput
				value={typing}
				activeChatUserId={
					activeChatUserId
				}
				userId={userId}
			/>
		</div>
	);
};
// export default firestoreConnect(() => ['users', 'messages'])(ChatWindow);

ChatWindow.propTypes = {
	activeChatUserId: PropTypes.any,
	userId: PropTypes.any,
};

export default firestoreConnect([
	{collection: "users"},
	{
		collection: "messages",
		orderBy: ["time", "desc"],
	},
])(ChatWindow);
