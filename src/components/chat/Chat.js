import React from 'react';
import moment from 'moment';

const Chat = ({ message, clicked, senderId, userId, time }) => {
    console.log(time)
    let is_user_msg;

    if (senderId == userId) {
        is_user_msg = true;
    } else {
        is_user_msg = false;
    }

    // className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}

    return (
        <span className={`Chat__wrapper ${is_user_msg ? "is-user-msg" : ""}`} onClick={clicked}>
            <span className={`Chat__message ${is_user_msg ? "is-user-msg" : ""}`} >
                {message}
            </span>
            <span className="Chat__time">20:22pm</span>
        </span>
    )
};

export default Chat