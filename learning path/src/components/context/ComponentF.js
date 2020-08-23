import React, {Component} from 'react';
import {UserConsumer} from "./userContextParentComponent";

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    //destructuring, this puts the variables of userContextParentComponent inside two different
                    //variables
                    ({secondValue, firstValue}) => {
                        return <div>Component F: {firstValue+" "+secondValue}</div>
                    }
                }
            </UserConsumer>
        );
    }
}

export default ComponentF;