import React, {useState} from 'react';

const UseState2 = () => {
    const [name, setName] = useState({firstName:'', lastName:''})
        return (
        <form>
            <input type="text"
            value={name.firstName}
            onChange={event => setName({...name, firstName:event.target.value})}/>

            <input type="text"
                   value={name.lastName}
                   onChange={event => setName({...name, lastName:event.target.value})}/>
            <h2>your first name is - {name.firstName}</h2>
            <h2>your first name is - {name.lastName}</h2>
        </form>

    );
};

export default UseState2;
