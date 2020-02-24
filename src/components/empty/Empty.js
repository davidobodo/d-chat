import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import "./Empty.css";
import { signOutStart } from '../../actions/authActions';
import { postUserStatusStart, postProfilePictureStart } from '../../actions/action';
import { firestoreConnect } from 'react-redux-firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Empty = ({ userFake, user, userId }) => {
	const [userStatus, setUserStatus] = useState('');
	const dispatch = useDispatch();
	const allStatus = useSelector(state => state.firestore.ordered.status, shallowEqual);
	const allPictures = useSelector(state => state.firestore.ordered.pictures, shallowEqual);

	let _userStatus;
	let _userPicture;

	if (allStatus) {
		_userStatus = allStatus.filter(status => status.statusUserId == userId);
	}

	if (allPictures) {
		_userPicture = allPictures.filter(picture => picture.pictureUserId == userId);
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
			{_userPicture && _userPicture[0] ?
				<img src={_userPicture[0].picture} alt={firstName} className="Empty__img" />
				: <div className="Empty__fileUpload-wrapper">
					<FontAwesomeIcon icon={faUser} />
					<input
						type="file"
						accept=".jpg, .jpeg, .png, .pdf"
						onChange={handleUploadPicture} />
				</div>

			}
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

export default firestoreConnect(() => ['status', 'pictures'])(Empty);