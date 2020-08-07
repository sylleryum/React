import React, {Component} from 'react';

class SelectInput extends Component {
    handleInputInnerChange = (event) => {
        this.props.handleInputChange(event);
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.label}
                </div>
                <select value={this.props.value}
                        name={this.props.name}
                        onChange={this.handleInputInnerChange}>
                    {this.props.options.map(
                        (option) => <option key={option} value={option}>
                            {option}
                        </option>)}

                </select>

            </div>
        );
    }
}

export default SelectInput;

