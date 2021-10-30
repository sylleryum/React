import React from 'react';
import {
    configureStore,
    getDefaultMiddleware,
    createAction,
    createReducer,
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import Counter from "./Counter";
import axios from 'axios';


const incrementAction = createAction("INCREMENT");
const loginSuccess = createAction("LOGIN_SUCCESS");
const loginFailed = createAction("LOGIN_FAILED");
const fetchLinksRequest = createAction("FETCH_LINKS_REQUEST");
const fetchLinksSuccess = createAction("FETCH_LINKS_SUCCESS");

// AUTH STATE
const authState = {
    value: 0,
    fetchFromApi: []
};

// const authReducer = createReducer(authState, {
//     [incrementAction]: (state, action) => {
//         state.value = state.value + 1
//     },
//     [loginFailed]: (state, action) => {
//         // return the next state
//     },
// });

// First, create the thunk
export const fetchUser = createAsyncThunk(
    'users/fetchUserById',
    async (userId, thunkAPI) => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        return data
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        incrementerAction: (state, action) => {
            state.value = state.value + 1
        },
        loginFailed: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {
            // Add user to the state array
            console.log('test');
            state.fetchFromApi.push(action.payload)
        }
    }

});

//NANA (next>action>next>action)
function loggerMiddleware(store) {
    return function (next) {
        return function (action) {
            console.log("loggerMiddleware: ")
            console.log(action);
            console.log(store.getState());
            return next(action);
        }
    }
}

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
    middleware: [...getDefaultMiddleware(), loggerMiddleware],
});

const App = () => {
    return (
        <div>
            <Counter/>
        </div>
    );
};

export default App;
