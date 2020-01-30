import user from './user'
import contacts from './contacts'
import typing from './typing'
import messages from './messages'
import details from './details'
import selectedMessage from './selectedMessage'
import activeUserId from './activeUserId'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducers';

export default combineReducers({
	user,
	contacts,
	messages,
	typing,
	activeUserId,
	selectedMessage,
	details,
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	authReducer
})