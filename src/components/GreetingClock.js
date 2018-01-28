import React from "react";
import ButtonDelete from "./ButtonDelete";
import AlertBanner from "./Alert";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            alertType: 'success',
            counter: Math.round(Math.random() * 10),
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
            date: new Date(),
            showAlert: prevState.counter > 30 ? true : false
        }));

        if (this.state.counter > 50) {
            this.setState({
                alertType: 'danger'
            });
        }
    }

    handleDeleteClock() {
        var element = document.getElementById(this.props.id);
        element.parentElement.removeChild(element);
    }

    render() {
        return (
            <div id={this.props.id}>
                <h1>Hello, world!</h1>
                <AlertBanner isShow={this.state.showAlert} alertType={this.state.alertType}
                             alertMessage={"Counter reach " + this.state.counter}/>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <p>Counter {this.state.counter}.</p>
                <ButtonDelete label={this.props.id} onClick={this.handleDeleteClock}/>
            </div>
        );
    }
}


export default Clock;