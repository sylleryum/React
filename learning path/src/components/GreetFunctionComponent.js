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
            <p>Greet component: <h1>{props.name || "defaultValueForGreet"} and {props.secondAtt||  "defaultValueForGreet2nd"}</h1></p>
            {props.children}
        </div>
    )
}

export default Greet;