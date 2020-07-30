import React, {Component} from 'react'
import Welcome from './GreetClassComponent'

//regular (not prefered)
// function Greet(){
//     return <h1>Hello World</h1>
// }

//with arrow function (prefered use)
const Greet = props => {
    console.log(props)
    return (
        <div>
            <p>Here is the inner component Welcome: <Welcome {...props}/></p>
            <p>Greet component: <h1>{props.name} and {props.secondAtt}</h1></p>
            {props.children}
        </div>
    )
}

export default Greet;