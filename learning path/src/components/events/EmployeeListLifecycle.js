import React, { Component } from 'react'
import EmployeeCyclePhases from './EmployeeCyclePhases';


class EmployeeListLifecycle extends Component{
    constructor(props){
        super(props);

        this.state={
            names: props.initialNames,
        };

        console.log('1st - constructor ' + props.initialNames); 
    }

    deleteRandom = () => {
        var index = Math.floor(Math.random() * this.state.names.length);

        this.setState(function(prevState){
            var names = prevState.names.concat();

            names.splice(index, 1);

            return{
                names: names
            }
        });
    }

    render (){
        var index = 0;
        return(
            <div>
                {this.state.names.map(
                    (name) => <EmployeeCyclePhases key={index++}
                                                    name={name}
                                                    deleteRandom={this.deleteRandom}/>
                )}
                <button onClick={this.deleteRandom}>Delete random employee</button>
            </div>
        )
    }
}

export default EmployeeListLifecycle
