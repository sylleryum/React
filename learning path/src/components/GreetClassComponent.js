import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.nameWelcome || "defaultValue"} 
        and {this.props.secondAttWelcome || "default2ndValue"}</h1>
        
        
    }
}


export default Welcome