import React from 'react';
import './Main.css';
import Empty from '../empty/Empty';
import ChatWindow from '../chatWindow/ChatWindow';

const Main = ({ user, activeUserId, currentUser }) => {

	const renderMainContent = () => {
		if (!activeUserId) {
			return <Empty
				user={user}
				activeUserId={activeUserId}
				currentUser={currentUser} />;
		} else {
			return <ChatWindow activeUserId={activeUserId} />;
		}
	};

	return (
		<main className="Main">
			{renderMainContent()}
		</main>
	)
};

export default Main