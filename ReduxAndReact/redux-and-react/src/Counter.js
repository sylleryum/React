import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {authSlice, fetchUser} from "./App";

const Counter = () => {
    const { incrementerAction } = authSlice.actions;
    const dispatch = useDispatch()
    let value = useSelector(state => {
        return state.auth.value
    });
    let fetchFromApi = useSelector(state => {
        return state.auth.fetchFromApi
    });

    return (
        <div>
            value: {value}
            <button onClick={()=>dispatch(incrementerAction())}>+</button>
            <button onClick={()=>dispatch(fetchUser())}>Fetch</button>
            <br/> Fetched results: <br/>
            {JSON.stringify(fetchFromApi)}
            {/*<button onClick={() => onDecrement("Decrementing")}>Decrement</button>*/}

        </div>
    );
};

export default Counter