import React, { useState } from 'react'
import './Chats.css'
import store from '../../store/store'
import { details } from '../../actions/action'
import DelEdit from '../delEdit/DelEdit'
import Chat from '../chat/Chat'
import { editMessage } from '../../actions/action'
import { deleteMessage } from '../../actions/action'


const Chats = ({ messages, userId }) => {
	const [editDel, setEditDel] = useState(false)
	return (
		<div
			className="Chats"
		// ref={this.chatsRef}
		>
			{messages && messages.map(mes => {
				const { messageId, message, receiverId, senderId, id } = mes
				return <Chat
					message={message}
					key={id}
					senderId={senderId}
					userId={userId}
					clicked={(e) => { this.myFunction(message.number, message.text, message.is_user_msg) }} />
			})}
		</div>
	)
};

export default Chats;
// class Chats extends Component {
	//this code is to make sure the chat scrolls to the bottom when there is a submission of any message
	//starts here...
	// constructor(props) {
	// 	super(props);
	// 	this.chatsRef = React.createRef();
	// }

	// componentDidMount() {
	// 	this.scrollToBottom();
	// }

	// componentDidUpdate() {
	// 	this.scrollToBottom();
	// }

	// scrollToBottom = () => {
	// 	this.chatsRef.current.scrollTop =
	// 		this.chatsRef.current.scrollHeight;
	// };
	//ends here

	// state = {
	// 	editDel: false
	// }

	// showEditDeleteBox = () => {
	// 	this.setState({ editDel: true })

	// }

	// removeEditDeleteBox = () => {
	// 	this.setState({ editDel: false })
	// }

	//this is the function that gets run due to clicking any of the span tags
	// myFunction = (number, text, is_user_msg) => {
	// 	this.showEditDeleteBox();
	// 	//examine is_user_msg
	// 	//if its true diaplay a new component, by changing its display style property from none to flex
	// 	if (is_user_msg === true) {
	// 		//get activeuserId from store i.e the user whose chats are currently displayed
	// 		const activeUserId = store.getState().activeUserId;

	// 		// dispatch this action , passing in the properties of the particular message that was clicked and the activeUserId
	// 		store.dispatch(details(number, text, is_user_msg, activeUserId))
	// 	}
	// 	else {
	// 		return null
	// 	}
	// }

	//These are the functions receiving the number and text
	// handleEdit = (number, text) => {
	// 	this.removeEditDeleteBox();
	// 	//we need the owner of this particular chat so we dont use the number and text in just any conversation
	// 	const { activeUserId } = store.getState().details;
	// 	store.dispatch(editMessage(number, text, activeUserId))
	// }

	// handleDelete = (number) => {
	// 	this.removeEditDeleteBox();
	// 	const { activeUserId } = store.getState().details;
	// 	store.dispatch(deleteMessage(number, activeUserId))

	// }


	// render() {
	// 	const details = store.getState().details;
	// 	const { number, text } = details
	// 	return (
	// 		//pass in this.chatRef into entire div to enable automatic scrolling of cha component
	// 		//chats has received messages as a prop from its parent component, but we want each to be rendered separately so we map
	// 		//we use the message number property as key(means of react identifying each component individually)
	// 		//we pass each message into a new component called Chat(i.e individual chat) so it can be rendered seperately

	// 		// <div className="Chats" ref={this.chatsRef}>
	// 		// 	<DelEdit
	// 		// 		show={this.state.editDel}
	// 		// 		edit={() => { this.handleEdit(number, text) }}
	// 		// 		delete={() => { this.handleDelete(number) }} />
	// 		// 	{this.props.messages.map(mes => {
	// 		// 		const { messageId, message, receiverId, senderId } = mes
	// 		// 		console.log(mes)
	// 		// 		return <Chat
	// 		// 			message={message}
	// 		// 			key={messageId}
	// 		// 			clicked={(e) => { this.myFunction(message.number, message.text, message.is_user_msg) }} />
	// 		// 	})}
	// 		// </div>
	// 	)
// 	}
// }



