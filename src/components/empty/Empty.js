import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import "./Empty.css";
import { signOutStart } from '../../actions/authActions';
import { postUserStatusStart } from '../../actions/action'


const Empty = ({ userFake, user, userId }) => {
	const [userStatus, setUserStatus] = useState('');
	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		setUserStatus(e.target.value);
	}

	const handleOnSubmit = (e) => {
		e.preventDefault();
		dispatch(postUserStatusStart(userStatus, userId))
	}


	const handleUserSignOut = () => {
		dispatch(signOutStart())
	}

	const { name, profile_pic, status } = userFake;

	const { firstName, lastName } = user;

	return (
		<div className="Empty">
			<button className="Empty__logout-button" onClick={handleUserSignOut}>Logout</button>
			<h1 className="Empty__name">Welcome, {firstName} {lastName} </h1>
			<img src={profile_pic} alt={firstName} className="Empty__img" />
			{/* <p className="Empty__status">
				<b>Status:</b> {status}
			</p> */}
			<form onSubmit={handleOnSubmit}>
				<input
					type="text"
					placeholder="what's on your mind?"
					onChange={handleOnChange}
					value={userStatus} />
			</form>
			<button className="Empty__btn">Start a conversation</button>
			<p className="Empty__info">
				Search for someone to start chatting with or go to Contacts
				to see who
				is available
			</p>
		</div>
	);
};
export default Empty;