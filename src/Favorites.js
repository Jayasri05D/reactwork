import React from 'react';
import ProductCard from './ProductCard';
import './Favorites.css';

function Favorites({ favoriteItems }) {
  return (
    <div className="favorites">
      <h1>Your Favorites</h1>
      <div className="favorites-list">
        {favoriteItems.length === 0 ? (
          <p>No favorite items yet!</p>
        ) : (
          favoriteItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
