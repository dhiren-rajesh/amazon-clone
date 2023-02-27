import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header/><Home/></>}/>
          <Route path="/checkout" element={<><Header/><Checkout/></>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/payment" element={<><Header/><Payment/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
