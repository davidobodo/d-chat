import React from 'react';
import './User.css';
import { useDispatch } from 'react-redux';
import { setactiveChatUserId } from '../../actions/action'

const User = ({ user }) => {
	const dispatch = useDispatch();
	const { firstName, lastName, id } = user;

	const handleUserClick = (e) => {
		dispatch(setactiveChatUserId(id));
	}

	return (
		<div className="User" onClick={handleUserClick}>
			{/* <img
				src={profile_pic}
				alt={name}
				className="User__pic" /> */}
			<div className="User__details">
				<p className="User__details">{firstName} {lastName}</p>
				{/* <p className="User__details">{status}</p> */}
			</div>
		</div>
	)
}

export default User