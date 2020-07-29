import React, {Component} from 'react'

//regular (not prefered)
// function Greet(){
//     return <h1>Hello World</h1>
// }

//with arrow function (prefered use)
const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>{props.name} and {props.secondAtt}</h1>
            {props.children}
        </div>
    )
}

export default Greet;