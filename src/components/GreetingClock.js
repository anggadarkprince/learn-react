import React from "react";
import ButtonDelete from "./ButtonDelete";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: Math.round(Math.random() * 100),
            date: new Date()
        };

        // This binding is necessary to make `this` work in the callback
        this.handleDeleteClock = this.handleDeleteClock.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((prevState, props) => ({
            counter: prevState.counter + props.increment,
            date: new Date()
        }));
        /*
        this.setState({
            counter: this.state.counter + this.props.increment,
            date: new Date()
        });
        */
    }

    handleDeleteClock() {
        var element = document.getElementById(this.props.id);
        element.parentElement.removeChild(element);
    }

    render() {
        return (
            <div id={this.props.id}>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <p>Counter {this.state.counter}.</p>
                <ButtonDelete label={this.props.id} onClick={this.handleDeleteClock} />
            </div>
        );
    }
}


export default Clock;