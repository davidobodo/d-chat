import React from 'react';

const Chat = ({ message, clicked, senderId, userId }) => {
    console.log(senderId, userId)
    let is_user_msg;

    if (senderId == userId) {
        is_user_msg = true;
    } else {
        is_user_msg = false;
    }

    return (
        <span
            className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}
            onClick={clicked}
        >
            {message}
        </span>
    )
};

export default Chat