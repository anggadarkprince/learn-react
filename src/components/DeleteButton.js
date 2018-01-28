import React from "react";

class DeleteButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Delete {this.props.label}
            </button>
        );
    }
}

export default DeleteButton;