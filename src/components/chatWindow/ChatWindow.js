import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Header from '../header/Header'
import Chats from '../chats/Chats'
import store from '../../store/store'
import _ from 'lodash'
import './ChatWindow.css'
import MessageInput from '../messageInput/MessageInput';
import { firestoreConnect } from 'react-redux-firebase';

const ChatWindow = ({ receiverId, userId }) => {
	const allUsers = useSelector(state => state.firestore.ordered.users, shallowEqual)
	const activeChat = allUsers.filter(user => user.id === receiverId);

	const allMessages = useSelector(state => state.messages, shallowEqual)
	const { typing } = store.getState()



	return (
		<div className="ChatWindow">
			<Header activeChat={activeChat} receiverId={receiverId} />
			<Chats messages={Object.values(allMessages)} />
			<MessageInput value={typing} receiverId={receiverId} userId={userId} />
		</div>
	);
};
export default firestoreConnect(() => ['users'])(ChatWindow);