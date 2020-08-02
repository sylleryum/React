import React, { Component } from 'react'

class EmployeeCyclePhases extends Component {
    constructor(props){
        super(props);
        console.log('1st - constructor '+this.props.name);
    }


    render() {
        console.log('2nd - render '+this.props.name);
        return (
            <div>
                <div>
                    {this.props.name}
                </div>
            </div>
        );
    }
    componentDidMount(){
        console.log('3rd - componentDidMount '+this.props.name);
        
    }

    componentWillUnmount(){
        console.log('4th - componentDidUnmount '+this.props.name);
        
    }
}

export default EmployeeCyclePhases;
