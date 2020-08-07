import React, {Component} from 'react';

class NumberInput extends Component {
    handleInputInnerChange = (event) => {
        this.props.handleInputChange(event);
    }
    render() {
        return (
            <div>
                <div>
                    {this.props.label}
                </div>
                <input type="number"
                       value={this.props.value}
                       name={this.props.name}
                       onChange={this.handleInputInnerChange}
                />
            </div>
        );
    }
}

export default NumberInput;