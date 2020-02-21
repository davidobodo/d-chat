import React from 'react';
import './Main.css';
import Empty from '../empty/Empty';
import ChatWindow from '../chatWindow/ChatWindow';

const Main = ({ userFake, receiverId, user, userId }) => {
	const renderMainContent = () => {
		if (!receiverId) {
			return <Empty
				userFake={userFake}
				receiverId={receiverId}
				user={user} />;
		} else {
			return <ChatWindow receiverId={receiverId} userId={userId} />;
		}
	}

	return (
		<main className="Main">
			{renderMainContent()}
		</main>
	)
};

export default Main