import userFake from './user'
import contacts from './contacts'
import typing from './typing'
import messages from './messages'
import details from './details'
import selectedMessage from './selectedMessage'
import activeChatUserId from './recieverId'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducers';

export default combineReducers({
	userFake,
	contacts,
	messages,
	typing,
	activeChatUserId,
	selectedMessage,
	details,
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	authReducer
})