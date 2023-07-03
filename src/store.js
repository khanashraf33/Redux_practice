//we create only one store and all the reducer are
//put inside it
//now we import the combined reducer and put inside the store

import { createStore , applyMiddleware} from 'redux'

import reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

let store = createStore(reducers, composeWithDevTools(applyMiddleware()))

export default store


// to use this store we need to support it in index.js 
//from where the store be called