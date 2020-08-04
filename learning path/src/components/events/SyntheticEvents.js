import React, { Component } from 'react'

class SyntheticEvents extends Component {

    // constructor(props){
    //     super(props)
    ///////this bind can be used to bind the event, instead arrow function will be used (incrementCount)
    //     this.incrementCount = this.incrementCount.bind(this)
    // }

    state = {
        counter:0
    }
    incrementCount = (e)=>{
        //this is used to ensure default event 
        //from browser won't be triggered so it has an unexpected behaviour
        e.preventDefault();

        let increment =1;
        if(e.shiftKey){
            increment = 10;
        }
        if(e.altKey){
            increment = 100;
        }
        this.setState((prevState,props)=>{
            return{
                counter: prevState.counter + increment
            }
        })
    }
    render() {
        return (
            <div>
                <div> {this.state.counter}</div>
                <button onClick={this.incrementCount}>+</button>
            </div>
        )
    }
}
export default SyntheticEvents
