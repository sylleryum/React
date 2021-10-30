import React from 'react';
import {createStore, applyMiddleware} from 'redux'
import {connect} from "react-redux";

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//the state
const initialState = {
    value: 10
}

//reducer = state + action (actions are string constants that will tell what to do based on the action received)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            console.log("entro")
            return { ...state, value: state.value + 1 };
        case DECREMENT:
            return { ...state, value: state.value - 1 };
        default:
            return state
    }
}

//store receives the reducer (if there are more than one, a combine can be used)
export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
    //store.subscribe(() => console.log('Look ma, Redux!!'))
    return (
        <CounterMapped/>
    );
};
export default App;

//==================Counter==================
//dispatcher = a function that sends an action to the reducer, payload is the data to be worked/used inside reducer's action
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });



const Counter = ({theValueProps, incrementDispatch, decrementDispatch}) => {
    return (
        <div>
            value: {theValueProps}<br/>
            <button onClick={incrementDispatch}>+</button><button onClick={decrementDispatch}>-</button>
            {/*<button onClick={() => onDecrement("Decrementing")}>Decrement</button>*/}

        </div>
    );
};

//mapStateToProps maps the piece of state desired to the component specified on connect
const mapStateToProps = state => {
    return {theValueProps: state.value}
}
//mapDispatchToProps
const mapDispatchToProps = dispatch => ({
    decrementDispatch: () => dispatch(decrement()),
    incrementDispatch: () => dispatch(increment())
})
const CounterMapped = connect(mapStateToProps, mapDispatchToProps)(Counter)
