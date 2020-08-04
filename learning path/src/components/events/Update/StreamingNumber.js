import React, { Component } from 'react'
import EvenNumber from './EvenNumber'
import Number from './Number'

class StreamingNumber extends Component {
    state = {
        index:0
    }

    next = () => {
        this.setState((prevState)=>{
            return{
                index:prevState.index + 1
            }
        })
    }
    
    
    render() {           //default props, a simple variable could be used instead
                                    //     \/
        let nextNumber = this.props.numbers||[3,2,5,4,11,12,9,16,13,14,12,20,19,23,
            26,35,29,27,1,2,45][this.state.index];
            
        return (
            <div>
                Current Props if shouldComponentUpdate: (no odd number): 
                <EvenNumber number={nextNumber}/>
                Current Props: <Number number={nextNumber}/>
                <button onClick={this.next}>Get next</button>
            </div>
        )
    }

    
}

// StreamingNumber.defaultProps = {
//     numbers:[3,2,5,4,11,12,9,16,13,14,12,20,19,23,26,35,29,27,1,2,45]
// }
export default StreamingNumber
