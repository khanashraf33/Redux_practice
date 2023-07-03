
import './App.css';
import { BrowserRouter as Router, Route,  Routes  } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import CounterScreen from './screens/CounterScreen';
import DummyCounterScreen from './screens/DummyCounterScreen';
import Navigation from './components/Navigation';
import ProductListScreen from './screens/ProductListScreen';

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <div className="container">
        <Routes>
          <Route path="/home" Component={HomeScreen}></Route>
          <Route path="/about" Component={AboutScreen}></Route>
          <Route path="/counter" Component={CounterScreen}></Route>
          <Route path="/dummy-counter" Component={DummyCounterScreen}></Route>
          <Route path="/products" Component={ProductListScreen}></Route>
          </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;
