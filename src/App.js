import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/GreetingClock';
import Welcome from './components/GreetingElement';
import Mailbox from "./components/Mailbox";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Welcome name="Angga" age="25" />
                <Mailbox unreadMessages={['React', 'Re: React', 'Re:Re: React']} />
                <Clock id="clock1" increment={3} />
                <Clock id="clock2" increment={2} />
            </div>
        );
    }
}

export default App;