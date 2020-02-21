import React from 'react';
import './Main.css';
import Empty from '../empty/Empty';
import ChatWindow from '../chatWindow/ChatWindow';

const Main = ({ user, receiverId, currentUser }) => {

	const renderMainContent = () => {
		if (!receiverId) {
			return <Empty
				user={user}
				receiverId={receiverId}
				currentUser={currentUser} />;
		} else {
			return <ChatWindow receiverId={receiverId} />;
		}
	}

	return (
		<main className="Main">
			{renderMainContent()}
		</main>
	)
};

export default Main