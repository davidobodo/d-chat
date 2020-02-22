import React from 'react';
import './User.css';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setactiveChatUserId } from '../../actions/action';
import { firestoreConnect } from 'react-redux-firebase';

const User = ({ user }) => {
	const { firstName, lastName, id } = user;

	const dispatch = useDispatch();
	const allStatus = useSelector(state => state.firestore.ordered.status, shallowEqual);
	let _userStatus;
	if (allStatus) {
		_userStatus = allStatus.filter(status => status.statusUserId == id);
	}

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
				{_userStatus && _userStatus[0] && <p className="User__details">{_userStatus[0].userStatus}</p>}
			</div>
		</div>
	)
}

export default firestoreConnect(() => ['status'])(User);