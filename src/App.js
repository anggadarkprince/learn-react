import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/GreetingClock';
import Welcome from './components/GreetingElement';
import Mail from "./components/Mailbox";
import ContactForm from "./components/ContactForm";

class App extends Component {
    render() {
        const messages = [
            {id:1, content:'React'},
            {id:2, content:'Re: React'},
            {id:3, content:'Re:Re: React'}
        ];
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Welcome name="Angga" age="25">
                    <h3>My React App</h3>
                    <ul className={'list-inline'}>
                        <li>Home</li>
                        <li>Mailbox</li>
                        <li>Account</li>
                        <li>Settings</li>
                    </ul>
                </Welcome>
                <Mail.MailCounter unreadMessages={messages} />
                <Mail.Mailbox data={messages} />
                <Clock id="clock1" increment={3} />
                <Clock id="clock2" increment={2} /><br/>
                <ContactForm/>
            </div>
        );
    }
}

export default App;
