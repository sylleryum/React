import React, {Component} from 'react';
import withCounter from './withCounter'

class ClickCounter extends Component {

    render(){
        const {count, incrementCount, toChild} = this.props
        return(
            <button onClick={incrementCount}>
                {toChild} Clicked {count}
            </button>
        )
    }
}

export default withCounter(ClickCounter)