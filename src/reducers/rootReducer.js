import user from './user'
import contacts from './contacts'
import typing from './typing'
import messages from './messages'
import details from './details'
import selectedMessage from './selectedMessage'
import activeUserId from './activeUserId'
import {combineReducers} from 'redux'

export default combineReducers({
	user,
	contacts,
	messages,
	typing,
	activeUserId,
	selectedMessage,
	details
})