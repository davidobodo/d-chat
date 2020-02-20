import React from 'react'

//Chat receives the prop passed into it
const Chat = (props) => {
    //all the props of message are gotten through destructuring
        const { text, is_user_msg} = props.message;
        //for the sake of different styling...Use ternary operator to check if is_user_msg is true or false...depending on the outcome, either add more string to the current className or leave the className as it is
        //this newly added className sure has some styles of its own which makes sure it displays differently
        //on clicking any of the span tags run the on click event with the usual syntax
        return(
            <span 
                className={`Chat ${is_user_msg ? "is-user-msg" : ""}`} 
                onClick={props.clicked}
            >{text}</span>
        )
    };

export default Chat