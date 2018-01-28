import React from "react";
import AgeChecker from './AgeChecker';

function Welcome(props) {
    return (
        <div>
            {props.children}
            <p>
                Welcome <strong>{props.name}</strong> to my club,
                see another world of computer programming with React.js.<br/>
                <small>
                    <AgeChecker age={props.age}/>
                </small>
            </p>
        </div>
    );
}

export default Welcome;