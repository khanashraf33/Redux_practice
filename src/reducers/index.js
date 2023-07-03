// this is basically all the reducer which we 
//combine and store inside the store
//counter: counterReducer
//in above counter is work as a key kept inside store to call
//counterReducer function
//simmilarly
//isLoggedIn: loggedInReducer
//in above isLoggedIn is work as a key kept inside store to call
//loggedInReducer function

import counterReducer from "./counterReducer";
import loggedInReducer from "./loggedInReducer";

import { combineReducers } from 'redux'
import cartReducer from './cartReducer';

const reducers = combineReducers({
    counter: counterReducer,
    isLoggedIn: loggedInReducer,
    cart: cartReducer,  
})

export default reducers