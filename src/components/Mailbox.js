import React from "react";

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h4>Hi fellas,
                {unreadMessages.length > 0 &&
                <small>
                    You have {unreadMessages.length} unread messages.
                </small>
                }
            </h4>
        </div>
    );
}

export default Mailbox;