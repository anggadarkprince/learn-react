import React from "react";

function AlertBanner(props) {
    if (!props.isShow) {
        return null;
    }

    return (
        <div className={props.alertType}>
            {props.alertMessage}
        </div>
    );
}

export default AlertBanner;