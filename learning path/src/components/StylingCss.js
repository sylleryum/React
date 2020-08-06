import React, {Component} from 'react';
import './StylingCss.css'

const heading = {
    textDecoration: "underline",
    color: 'red'
}

function StylingCss (props) {
    let theClass = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${theClass} font-xl underline`}>Stylesheet</h1>

            <h1 style={heading}>inline</h1>
        </div>
    );
};

export default StylingCss;

