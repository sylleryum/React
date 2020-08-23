import React, {Component} from 'react';

class ParameterFromComponentToInvoker extends Component {
    render() {
        return (
            <div>
                the Propssssssss {this.props.toUpper()}
            </div>
        );
    }
}

export default ParameterFromComponentToInvoker;