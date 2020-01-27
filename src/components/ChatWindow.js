import React from "react";
import Header from './Header'
import Chats from './Chats'
import store from '../store/store'
import _ from 'lodash'
import './ChatWindow.css'
import MessageInput from '../containers/MessageInput'

//take in the defined activeuserid as a prop
const ChatWindow = ({ activeUserId }) => {

	//from the contact objects, select the contact with this particular activeUserId and assign it to a constant
	const activeUser = store.getState().contacts[activeUserId];

	//from the messages objects, select the messages with this particular activeUserId and assign it to a constant
	const activeMsgs = store.getState().messages[activeUserId];

	//using destructuring(since we want to use same names) get the state of typing and assign it to the constant typing
	const { typing } = store.getState()
	return (
		//pass all these defined constants as props into the needed components below
		//use lodash to convert the activemsgs from object to array. this is mainly because we want each of them to have a specific index(which an array gives to all its values)
		<div className="ChatWindow">
			<Header user={activeUser} activeUserId={activeUserId} />
			<Chats messages={_.values(activeMsgs)} />
			<MessageInput value={typing} />
		</div>
	);
};
export default ChatWindow;