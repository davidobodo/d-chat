import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import "./Empty.css";
import { signOutStart } from '../../actions/authActions';
import { postUserStatusStart, postProfilePictureStart } from '../../actions/action';
import { firestoreConnect } from 'react-redux-firebase';


const Empty = ({ userFake, user, userId }) => {
	const [userStatus, setUserStatus] = useState('');
	const dispatch = useDispatch();
	const allStatus = useSelector(state => state.firestore.ordered.status, shallowEqual);
	let _userStatus;
	if (allStatus) {
		_userStatus = allStatus.filter(status => status.statusUserId == userId);
	}

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

	const handleUploadPicture = (e) => {
		const file = e.target.files[0];

		const reader = new FileReader();
		reader.onload = function () {
			dispatch(postProfilePictureStart(reader.result, userId))
		}

		reader.readAsDataURL(file);
	}

	const { name, profile_pic, status } = userFake;

	const { firstName, lastName } = user;

	return (
		<div className="Empty">
			<button className="Empty__logout-button" onClick={handleUserSignOut}>Logout</button>
			<h1 className="Empty__name">Welcome, {firstName} {lastName} </h1>
			<img src={profile_pic} alt={firstName} className="Empty__img" />
			<input
				type="file"
				accept=".jpg, .jpeg, .png, .pdf"
				onChange={handleUploadPicture} />
			{_userStatus && _userStatus[0] ?
				<p className="Empty__status">
					<b>Status:</b> {_userStatus[0].userStatus}
				</p>
				: <form onSubmit={handleOnSubmit}>
					<input
						type="text"
						placeholder="what's on your mind?"
						onChange={handleOnChange}
						value={userStatus} />
				</form>
			}
			<button className="Empty__btn">Click on a user to start a conversation</button>
			<p className="Empty__info">
				Search for someone to start chatting with or go to Contacts
				to see who
				is available
			</p>
		</div>
	);
};

export default firestoreConnect(() => ['status'])(Empty);