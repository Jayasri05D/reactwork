import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart, onAddToFavorites, onBuyNow }) {
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleBuyNowClick = () => {
    if (onBuyNow) {
      onBuyNow(product, paymentMethod); // Trigger the buy process and navigate to payment
    } else {
      console.error('onBuyNow is not defined');
    }
  };
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Rs {product.price.toFixed(2)}</p>
      <div className="buttons-container">
        <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>
          🛒 
        </button>
        <button className="add-to-favorites-button" onClick={() => onAddToFavorites(product)}>
          ❤️ 
        </button>
      </div>

      {/* Payment Method Selection */}
      { <div className="payment-method-container">
        <label htmlFor="payment-method">Choose Payment Method:</label>
        <select
          id="payment-method"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Net Banking">Net Banking</option>
        </select>
      </div> }

      <button className="buy-now-button" onClick={handleBuyNowClick}>
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
