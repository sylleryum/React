import React, {Component} from 'react';

var HOCCount = (BasicComponent) => class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            text:"hello world"
        }
        this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount(){
        this.setState((prevState)=>(
            {
                count:prevState.count+1
            }
        ))
    }
    render() {
        return(
            <div>
                <BasicComponent {...this.state} increment={this.incrementCount}/>
            </div>
        )
    }
}

export default HOCCount;