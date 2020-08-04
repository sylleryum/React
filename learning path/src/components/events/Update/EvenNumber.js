import React, { Component } from 'react'

class EvenNumber extends Component {

    constructor(props){
        super(props);
        console.log('1st - constructor');
        
    }

    //idea is to decide if we want the new passed props/state (nextProps, nextState), if returns true
    //this props/state isn't added
    shouldComponentUpdate(nextProps, nextState){
        console.log('2nd - shouldComponentUpdate', nextProps, nextState);
        if (nextProps.number % 2===0){
            console.log('shouldComponentUpdate returns true');
            return true;            
        }
        //by default always returns true
        console.log('shouldComponentUpdate returns false');
        return false;        
    }

    render() {
        console.log('3rd - render');
        
        return (
            <div>
                {this.props.number}
            </div>
        )
    }

    //if shouldComponentUpdate returns true (will be updated) this method can be invoked to 
    //capture the previous state before it is updated, if this is used, componentDidUpdate NEEDS
    //to be implemented
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('4th getSnapshotBeforeUpdate ',prevProps);
        return prevProps.number
    }

                                            //snapshot from getSnapshotBeforeUpdate
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('5h - componentDidUpdate');
        
        console.log('the previous number was: '+snapshot);
        
    }
}

export default EvenNumber
