import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css'

function Header({ isLoggedIn, handleLogout }){
    const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogoutClick = () => {
    handleLogout(); // Call handleLogout function to clear login status
    navigate('/'); // Redirect to login page
  };

  const handleDisabledLinkClick = () => {
    alert('Please login first'); // Display alert when disabled link is clicked
  };

  return (
    <header>
      <nav className="navbar">
        <div className="left-section">
          <div className="logo">
            <img src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png" alt="Logo" />
            <p>Kafene</p>
          </div>
          <ul className="pages">
            <li>
              {isLoggedIn ? (
                <Link to="/orders" className={location.pathname === '/orders' ? 'active' : ''}>Orders</Link>
              ) : (
                <span style={{ color: 'gray', cursor: 'pointer' }} onClick={handleDisabledLinkClick}>Orders</span>
              )}
            </li>
            <li>
              {isLoggedIn ? (
                <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link>
              ) : (
                <span style={{ color: 'gray', cursor: 'pointer' }} onClick={handleDisabledLinkClick}>Products</span>
              )}
            </li>
            <li>
              {isLoggedIn ? (
                <Link to="/users" className={location.pathname === '/users' ? 'active' : ''}>Users</Link>
              ) : (
                <span style={{ color: 'gray', cursor: 'pointer' }} onClick={handleDisabledLinkClick}>Users</span>
              )}
            </li>
          </ul>
        </div>
        <div className="right-section">
          {isLoggedIn ? (
            <button className="logout-btn" onClick={handleLogoutClick}>Logout</button>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

export default Header;