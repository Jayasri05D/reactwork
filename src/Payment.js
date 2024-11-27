import React from 'react';
import './Payment.css';
function Payment({ product, paymentMethod, onConfirmPayment }) {
  const handlePaymentConfirmation = () => {
    // Handle the payment confirmation logic here
    alert(`Payment confirmed for ${product.name} using ${paymentMethod}`);
    onConfirmPayment();
  };

  return (
    <div className="payment-container">
      <h2>Payment for {product.name}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Payment Method: {paymentMethod}</p>
      <button className="confirm-payment-button" onClick={handlePaymentConfirmation}>
        Confirm Payment
      </button>
    </div>
  );
}

export default Payment;
