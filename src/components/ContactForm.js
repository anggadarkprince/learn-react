import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requisite: 'question',
            name: '',
            email: '',
            message: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        if(target.type === 'text' || target.type === 'email') {
            value = value.toUpperCase();
        }
        const key = event.target.id;
        this.setState({
            [key]: value,
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name + ' asking about ' + this.state.message);
        if(this.fileInput.files[0]) {
            alert(`Selected file - ${this.fileInput.files[0].name}`);
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        Requisite:
                        <select value={this.state.requisite} onChange={this.handleChange} id="requisite" className="form-control">
                            <option value="">-- Select Requisite --</option>
                            <option value="question">Question</option>
                            <option value="report">Report</option>
                            <option value="complain">Complain</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Name:
                        <input type="text" placeholder="Input your name" id="name" className="form-control"
                                     value={this.state.name} onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Email:
                        <input type="email" placeholder="Email address" id="email" className="form-control"
                               onChange={this.handleChange} value={this.state.email}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Message:
                        <textarea placeholder="Content message" rows={2} id="message" className="form-control" onChange={this.handleChange}
                                           value={this.state.message}></textarea>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Attachment:
                        <input className="form-control" id="attachment"
                            type="file"
                            ref={input => {
                                this.fileInput = input;
                            }}
                        />
                    </label>
                </div>
                <input type="submit" className="form-control" value="Submit"/>
            </form>
        );
    }
}

export default ContactForm;