import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <p>{item.name}</p>
                        <p>${item.price.toFixed(2)}</p>
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
