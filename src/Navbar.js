import React from 'react';
import './Navbar.css';

function Navbar({ onLoginClick, onCartClick, onFavoritesClick, onHomeClick, cartCount, favoritesCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Sports Store</div>
      <div className="navbar-search">
        <input type="text" placeholder="Search products..." />
      </div>
      <div className="navbar-links">
        <a href="#home" onClick={onHomeClick}>Home</a>
        <a href="#login" onClick={onLoginClick}>Login</a>
       
        <a href="#cart" onClick={onCartClick}>Cart ({cartCount})</a>
        <a href="#favorites" onClick={onFavoritesClick}>Favorites ({favoritesCount})</a>
      </div>
    </nav>
  );
}

export default Navbar;
