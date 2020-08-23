import React, {useState, useEffect} from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    useEffect(() => {
        console.log(`useEffect - updating document tile`)
        document.title = 'you clicked ' + count + ' times'

        
    },[count])

    return (
        <div>
            <input type={'text'} value={name} onChange={e => {
                setName(e.target.value)
            }
            }/>
            <button onClick={() => setCount(
                (prevCount) => prevCount+1)
            }>Click {count} times</button>
        </div>
    );
};

export default UseEffect;