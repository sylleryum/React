import React, {Component} from 'react'

class Message extends Component{

    constructor(){
        super()//needed as we extend component from react
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changeMessage(){
        this.setState({message:"Message changed"})
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Click to change state</button>
            </div>
        )
    }
}

export default Message