import React, {Component} from 'react';
import HOCCount from "./HOCCount";

const Button = (props) => {
    console.log(props)
    return(
        <button onClick={props.increment}> Count:{props.count}</button>
    )
}

export default HOCCount(Button)