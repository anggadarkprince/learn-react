import React from "react";

function MailCounter(props) {
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

function Mailbox(props) {
    const mails = props.data;
    const listItems = mails.map((mail) =>
        <li key={mail.id.toString()}>
            {mail.content}
        </li>
    );
    return (
        <ul className="list">{listItems}</ul>
    );
}

export default {Mailbox, MailCounter};