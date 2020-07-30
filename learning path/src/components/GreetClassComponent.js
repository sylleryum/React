import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.nameWelcome} and {this.props.secondAttWelcome}</h1>
    }
}

export default Welcome