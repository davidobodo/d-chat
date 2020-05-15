import React, { useRef, useEffect } from 'react'
import './Chats.css'
// import { details } from '../../actions/action'
// import DelEdit from '../delEdit/DelEdit'
import Chat from '../chat/Chat'
// import { editMessage } from '../../actions/action'
// import { deleteMessage } from '../../actions/action'


const Chats = ({ messages, userId, activeChatUserId }) => {
	// const [editDel, setEditDel] = useState(false)
	const inputEl = useRef(null);

	const scrollToBottom = () => {
		inputEl.current.scrollTop = inputEl.current.scrollHeight
	}

	useEffect(() => {
		scrollToBottom();
	})
	return (
		<div
			className="Chats"
			ref={inputEl}
		>
			{messages && messages.filter(mes => {
				return (mes.senderId === userId && mes.receiverId === activeChatUserId) || (mes.senderId === activeChatUserId && mes.receiverId === userId)
			}).map(mes => {
				const { message, senderId, id, time } = mes
				return <Chat
					message={message}
					key={id}
					senderId={senderId}
					userId={userId}
					time={time}
					clicked={(e) => { this.myFunction(message.number, message.text, message.is_user_msg) }} />
			})}
		</div>
	)
};

export default Chats;



