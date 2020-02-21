import user from './user'
import contacts from './contacts'
import typing from './typing'
import messages from './messages'
import details from './details'
import selectedMessage from './selectedMessage'
import receiverId from './recieverId'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducers';

export default combineReducers({
	user,
	contacts,
	messages,
	typing,
	receiverId,
	selectedMessage,
	details,
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	authReducer
})