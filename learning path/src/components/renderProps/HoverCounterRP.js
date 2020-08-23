import React, {Component} from 'react';

class HoverCounterRP extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <h2 onMouseOver={incrementCount}> Hovered render props: {count} times</h2>
        );
    }
}

export default HoverCounterRP;