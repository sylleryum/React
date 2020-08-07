import React, {Component} from 'react';

class TextInput extends Component {

    //this is a "dummy" method, the onChange of this component generates an event, this event is passed on this call
    //it is then passed to the true event handler method (this.props.handleInputChange) in parent who called this component
    //with the event property (event)
    handleInputInnerChange = (event) => {
        this.props.handleInputChange(event);
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.label}
                </div>
                <input type="text"
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.handleInputInnerChange}
                />
            </div>


        );
    }
}

export default TextInput;