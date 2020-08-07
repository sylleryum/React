import React, {Component} from 'react';

class HotelBookingFormSingleEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameValue: '',
            emailValue: '',
            nameOfHotelsValue: 'Comfortable Hotels',
            locationValue: 'California'
        };
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;

        if (name === 'nameValue'){
            value = value.toUpperCase();
        }
        this.setState({[name]: value}, () => console.log(`Current state ${this.state[name]}`))
        //console.log(`current state ${this.state.[name]}`)
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
                          name="nameValue"
                          onChange={this.handleInputChange}/>

                <div>Email Id:</div>
                <input type='text'
                       value={this.state.emailValue}
                       name="emailValue"
                       onChange={this.handleInputChange}/>

                <div>Name of Hotels</div>
                <select
                    value={this.state.nameOfHotelsValue}
                    name="nameOfHotelsValue"
                    onChange={this.handleInputChange}>
                    <option value="Fantastic Hotels">Fantastic Hotels</option>
                    <option value="Wonderful Hotels">Wonderful Hotels</option>
                    <option value="Comfortable Hotels">Comfortable Hotels</option>
                    <option value="Pretentious Hotels">Pretentious Hotels</option>
                </select>

                <div>Location:</div>
                <input type='text'
                       value={this.state.locationValue}
                       name="locationValue"
                       onChange={this.handleInputChange}/>
                <input type='submit' value='submit hotel'/>
            </form>
        );
    }
}

export default HotelBookingFormSingleEvent;