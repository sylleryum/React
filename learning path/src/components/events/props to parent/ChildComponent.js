import React from 'react'

function ChildComponent(props) {
    return (
        <div>               {/*arrow used to pass parameter*/}
            <button onClick={()=> 
                props.greetHandler("childComponent")}>
                    Greet Parent
            </button>
        </div>
    )
}

export default ChildComponent
