import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header"
import { reset, increament, decrement } from './../actions/counterAction';


//to get value from store we use useSelector
//it give all the value of state bur we need only counter value
//so we use state.counter


//now to change the value of state we use action
//for that we need to call action function
//which is called with the help of dispatch function

const CounterScreen = (props) => {

   //read the current value from the store
   const counter = useSelector((state) => state.counter)

   
    //get the dispatch function reference
    // used to perform an action
    const dispatch = useDispatch()


    const onIncrement = () => {
        dispatch(increament())
    }


    const onDecrement = () => {
        dispatch(decrement())
    }


    const onReset = () => {
        dispatch(reset())
    }



    return (
        <div>
            <Header title="Counter"/>
            <h3>current counter = {counter} </h3>
            <button onClick={onIncrement}>+1</button>
            <button onClick={onDecrement}>-1</button>
            <button onClick={onReset}>reset</button>
        </div>
    )
}

export default CounterScreen