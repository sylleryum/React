import React, {Component} from 'react';
import ButtonParent from "./ButtonParent";

const Button = (props) => {
    console.log(props)
    return(
        <button onClick={props.increment}> {props.toChild} Count:{props.count}</button>
    )
}

export default ButtonParent(Button, 5)