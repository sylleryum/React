import React, {Component} from 'react';

class EmailForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailValue: ''
        }

    }

    handleEmailChange = (e) => {
        this.setState({emailValue: e.target.value});
        console.log(`current state ${this.state.emailValue}`)

    }

    handleSubmit = (e) => {
        console.log(`Email address submitted ${this.state.emailValue}`);
        alert('here is the email address you submitted ' + this.state.emailValue);

        this.setState({emailValue: ''});
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    Email address:
                </div>
                <input
                    value={this.state.emailValue}
                    onChange={this.handleEmailChange}/>
                <input type='submit' value='submit email'/>

            </form>
        );
    }
}

export default EmailForm;