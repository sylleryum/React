import React, {useState} from 'react';

function UseState(){

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount((prevCount)=>prevCount+1)}>
                Click me
            </button>
        </div>
    );
};

export default UseState;
