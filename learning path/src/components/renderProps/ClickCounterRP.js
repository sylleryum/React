import React, {Component} from 'react';

class ClickCounterRP extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <button onClick={incrementCount}> Clicked render props: {count} times </button>
        );
    }
}

export default ClickCounterRP;