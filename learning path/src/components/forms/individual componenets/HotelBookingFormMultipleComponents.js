import React, {Component} from 'react';
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import SelectInput from "./SelectInput";

class HotelBookingFormMultipleComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameValue: '',
            emailValue: '',
            phoneValue:0,
            nameOfHotelValue: 'Comfortable Hotels',
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
        phone ${this.state.phoneValue}
        name of hotel ${this.state.nameOfHotelValue}`)

        // console.log(`"name ${this.state.nameValue}`)
        // console.log(`"email ${this.state.emailValue}`)
        // console.log(`"name of hotel ${this.state.nameOfHotelsValue}`)
        // console.log(`"location ${this.state.locationValue}`)

        this.setState({
            nameValue: '',
            emailValue: '',
            phoneValue:0,
            nameOfHotelValue: 'Comfortable Hotels'
        })
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextInput label={"Name: "}
                           name={"nameValue"}
                           value={this.state.nameValue}
                           handleInputChange={this.handleInputChange}/>
                <TextInput label={"Email ID: "}
                           name={"emailValue"}
                           value={this.state.emailValue}
                           handleInputChange={this.handleInputChange}/>
                <NumberInput label={"Phone number: "}
                           name={"phoneValue"}
                           value={this.state.phoneValue}
                           options={this.props.hotelNamesOptions}
                           handleInputChange={this.handleInputChange}/>
                <SelectInput label={"Name of hotels: "}
                             name={"nameOfHotelValue"}
                             value={this.state.nameOfHotelValue}
                             options={this.props.hotelNamesOptions}
                             handleInputChange={this.handleInputChange}/>
                             <input type="submit" value="submit"/>

            </form>
        );
    }
}

HotelBookingFormMultipleComponents.defaultProps = {
    hotelNamesOptions:['Fantastic Hotels',
        'Wonderful Hotels',
        'Comfortable Hotels',
        'Pretentious Hotels']
};

export default HotelBookingFormMultipleComponents;