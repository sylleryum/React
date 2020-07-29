import React from "react";

function Button(props) {
  return (
    <div>
      <p>{props.current ? "You are logged" : "Not logged"}</p>
      <button onClick={props.onClicking}>
        {props.current ? "You are logged" : "Not logged"}
      </button>
    </div>
  );
}

export default Button;
