import React from 'react';
import './CategoryNavbar.css';

function CategoryNavbar() {
  return (
    <nav className="category-navbar">
      <ul className="category-links">
        <li className="dropdown">
          <a href="#men" className="dropbtn">Men</a>
          <div className="dropdown-content">
            <a href="#men-clothing">Clothing</a>
            <a href="#men-shoes">Shoes</a>
            <a href="#men-accessories">Accessories</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#women" className="dropbtn">Women</a>
          <div className="dropdown-content">
            <a href="#women-clothing">Clothing</a>
            <a href="#women-shoes">Shoes</a>
            <a href="#women-accessories">Accessories</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#kids" className="dropbtn">Kids</a>
          <div className="dropdown-content">
            <a href="#kids-clothing">Clothing</a>
            <a href="#kids-shoes">Shoes</a>
            <a href="#kids-accessories">Accessories</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#sports-equipment" className="dropbtn">Sports Equipment</a>
          <div className="dropdown-content">
            <a href="#football">Indoor Equipments</a>
            <a href="#basketball">Outdoor Equipments</a>
           
          </div>
        </li>
        <li className="dropdown">
          <a href="#sports-accessories" className="dropbtn">Sports Accessories</a>
          <div className="dropdown-content">
            <a href="#bags">Bags</a>
            <a href="#hats">Hats</a>
            <a href="#gloves">Gloves</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default CategoryNavbar;
