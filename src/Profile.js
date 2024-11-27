import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> Jayasri</p>
        <p><strong>Delivery Location:</strong> [Your Delivery Location]</p>
        <p><strong>Order Details:</strong></p>
        <ul>
          <li>Order #1: Item Name - Quantity - Price</li>
          <li>Order #2: Item Name - Quantity - Price</li>
          {/* Add more order details as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
