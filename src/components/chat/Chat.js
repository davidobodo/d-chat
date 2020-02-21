import React from 'react';

const Chat = ({ message, clicked }) => {

    return (
        <span
            // className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}
            className={`Chat`}
            onClick={clicked}
        >
            {message}
        </span>
    )
};

export default Chat