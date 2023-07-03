const counterReducer = (state = 0, action) =>{
 switch (action.type) {
    case 'increament':
        return state + 1
    case 'decrement':
        return state - 1
    case 'reset':
        return 0

        //if not use default it give error
        //The slice reducer for key "counter" returned undefined during initialization. 
        //If the state passed to the reducer is undefined, you must explicitly return the initial state. 
        //The initial state may not be undefined. 
        //If you don't want to set a value for this reducer, you can use null instead of undefined.
    default:
        return state
 }
}

export default counterReducer