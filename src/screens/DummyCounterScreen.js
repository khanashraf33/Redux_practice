import Header from "../components/Header"
import { useSelector } from 'react-redux';




const DummyCounterScreen = (props) => {



    const counter = useSelector((state)=> state.counter)

    return (
        <div>
            <Header title="DummyCounter"/>
            <h3>counter={counter}</h3>
        </div>
    )
}

export default DummyCounterScreen