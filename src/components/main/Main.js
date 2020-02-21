import React from 'react';
import './Main.css';
import Empty from '../empty/Empty';
import ChatWindow from '../chatWindow/ChatWindow';

const Main = ({ userFake, activeChatUserId, user, userId }) => {
	const renderMainContent = () => {
		if (!activeChatUserId) {
			return <Empty
				userFake={userFake}
				activeChatUserId={activeChatUserId}
				user={user} />;
		} else {
			return <ChatWindow activeChatUserId={activeChatUserId} userId={userId} />;
		}
	}

	return (
		<main className="Main">
			{renderMainContent()}
		</main>
	)
};

export default Main