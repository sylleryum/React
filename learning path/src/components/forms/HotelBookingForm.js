import React, {Component} from 'react';

class HotelBookingForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameValue: '',
            emailValue: '',
            nameOfHotelsValue: 'Comfortable Hotels',
            locationValue: 'California'
        };
    }

    handleNameChange = (event) => {
        this.setState({nameValue: event.target.value.toUpperCase()})
    }

    handleEmailChange = (event) => {
        this.setState({emailValue: event.target.value})
    }

    handleNameOfHotelChange = (event) => {
        this.setState({nameOfHotelsValue: event.target.value})
    }

    handleLocationChange = (event) => {
        this.setState({locationValue: event.target.value})
    }

    handleSubmit = (event) => {
        alert(`name ${this.state.nameValue}
        email ${this.state.emailValue}
        name of hotel ${this.state.nameOfHotelsValue}
        location ${this.state.locationValue}`)

        // console.log(`"name ${this.state.nameValue}`)
        // console.log(`"email ${this.state.emailValue}`)
        // console.log(`"name of hotel ${this.state.nameOfHotelsValue}`)
        // console.log(`"location ${this.state.locationValue}`)

        this.setState({
            nameValue: '',
            emailValue: '',
            nameOfHotelsValue: 'Comfortable Hotels',
            locationValue: 'California'
        })
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>Name:</div>
                <textarea value={this.state.nameValue}
                          onChange={this.handleNameChange}/>

                <div>Email Id:</div>
                <input type='text'
                       value={this.state.emailValue}
                       onChange={this.handleEmailChange}/>

                <div>Name of Hotels</div>
                <select
                    value={this.state.nameOfHotelsValue}
                    onChange={this.handleNameOfHotelChange}>
                    <option value="Fantastic Hotels">Fantastic Hotels</option>
                    <option value="Wonderful Hotels">Wonderful Hotels</option>
                    <option value="Comfortable Hotels">Comfortable Hotels</option>
                    <option value="Pretentious Hotels">Pretentious Hotels</option>
                </select>

                <div>Location:</div>
                <input type='text'
                       value={this.state.locationValue}
                       onChange={this.handleLocationChange}/>
                <input type='submit' value='submit hotel'/>
            </form>
        );
    }
}

export default HotelBookingForm;