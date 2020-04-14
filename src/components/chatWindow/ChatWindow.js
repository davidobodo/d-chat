import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Header from '../header/Header'
import Chats from '../chats/Chats'
import store from '../../store/store'
import './ChatWindow.css'
import MessageInput from '../messageInput/MessageInput';
import { firestoreConnect } from 'react-redux-firebase';

const ChatWindow = ({ activeChatUserId, userId }) => {
	const { allUsers, firestoreMessages } = useSelector(state => ({
		allUsers: state.firestore.ordered.users,
		allMessages: state.messages,
		firestoreMessages: state.firestore.ordered.messages
	}), shallowEqual)

	const activeChat = allUsers.filter(user => user.id === activeChatUserId);

	const { typing } = store.getState()



	return (
		<div className="ChatWindow">
			<Header activeChat={activeChat} activeChatUserId={activeChatUserId} />
			<Chats
				messages={firestoreMessages}
				userId={userId}
				activeChatUserId={activeChatUserId} />
			<MessageInput value={typing} activeChatUserId={activeChatUserId} userId={userId} />
		</div>
	);
};
// export default firestoreConnect(() => ['users', 'messages'])(ChatWindow);

export default firestoreConnect([
	{ collection: 'users' },
	{ collection: 'messages', orderBy: ['time', 'asc'] }
])(ChatWindow);