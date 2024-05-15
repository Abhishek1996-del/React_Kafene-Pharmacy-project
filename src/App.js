import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Login from './components/Login';
import OrderListing from './components/OrderListing';
import ProductListing from './components/ProductListing';
import UserListing from './components/UserListing';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route exact path="/" element={<Login handleLogin={handleLogin} />} />
          <Route path="/orders" element={<OrderListing />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/users" element={<UserListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
