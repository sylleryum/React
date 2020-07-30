import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // },  //call back function to be ran after state is updated
        //     ()=>console.log(this.state.count)
        // )
        //setState is Async, therefore to run a function after updating state, needs to be on the above setState
        //console.log(this.state.count);
        

        //use like this if previous state will be updated, second parameter (after prevState<)
        this.setState((prevState)=>({
            count:prevState.count+1
        }),
        //callback
        ()=>console.log("success? "+this.props.theProps))
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                {/* <button onClick={()=>this.increment()}>Increment</button> */}
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter