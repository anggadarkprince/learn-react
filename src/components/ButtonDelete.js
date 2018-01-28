import React from "react";

class ButtonDelete extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.onClick}>
                Delete {this.props.label}
            </button>
        );
    }
}

export default ButtonDelete;