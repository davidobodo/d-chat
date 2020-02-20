import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Header from '../header/Header'
import Chats from '../chats/Chats'
import store from '../../store/store'
import _ from 'lodash'
import './ChatWindow.css'
import MessageInput from '../messageInput/MessageInput';
import { firestoreConnect } from 'react-redux-firebase';

const ChatWindow = ({ activeUserId }) => {
	const allUsers = useSelector(state => state.firestore.ordered.users)

	const activeChat = allUsers.filter(user => user.id === activeUserId);

	const activeUser = store.getState().contacts[activeUserId];

	const activeMsgs = store.getState().messages[activeUserId];

	const { typing } = store.getState()
	return (
		//pass all these defined constants as props into the needed components below
		//use lodash to convert the activemsgs from object to array. this is mainly because we want each of them to have a specific index(which an array gives to all its values)
		<div className="ChatWindow">
			<Header activeChat={activeChat} activeUserId={activeUserId} />
			<Chats messages={_.values(activeMsgs)} />
			<MessageInput value={typing} />
		</div>
	);
};
export default firestoreConnect(() => ['users'])(ChatWindow);