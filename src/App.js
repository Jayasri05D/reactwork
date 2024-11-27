import React, { useState } from 'react';
import Navbar from './Navbar';
import Login from './Login';
import SignUp from './SignUp';
import ProductList from './ProductList';
import Cart from './Cart';
import Favorites from './Favorites';
import CategoryNavbar from './CategoryNavbar';
import Payment from './Payment';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [currentView, setCurrentView] = useState('productList'); // Tracks the current view
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products] = useState([
    { id: 1, name: 'Football', price: 350, image: 'https://media.istockphoto.com/id/610241662/photo/soccer-ball-isolated-on-the-white-background.jpg?s=612x612&w=0&k=20&c=f7EWJti8x_JFmDxA8CMJvi1ulMlPjTdDP69HBWy9Hb4=' },
    { id: 2, name: 'Basketball', price: 450, image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png' },
    { id: 3, name: 'Tennis Racket', price: 300, image: 'https://cdn.nwscdn.com/media/wysiwyg/3kf/tennis/Vermont_Colt_Mini_Tennis_25in_Racket_Tennis_Ball_Set.jpg' },
    { id: 4, name: 'Running Shoes', price: 400, image: 'https://www.verywellfit.com/thmb/3kIfNjrvzQJRWEInF0zcPhkON5s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vwt-product-brooks-launch-10-jjuliao-14574-2716edc585704872b8cf3680187422cb.jpeg' },
    { id: 5, name: 'Baseball Bat', price: 670, image: 'https://www.tabletenniscoach.me.uk/wp-content/uploads/2019/09/baseball-bat.jpg' },
    { id: 6, name: 'Table Tennis Racket', price: 400, image: 'https://www.tabletenniscoach.me.uk/wp-content/uploads/2024/06/Winning-Loop-800px.jpg' },
    { id: 7, name: 'Swimming Goggles', price: 500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcdZ1CuEKivQG8b2izLz-tq6me6qKXkWXEg&s' },
    { id: 8, name: 'Yoga Mat', price: 670, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SOuT-HCqaswcNfiQE0C16T_rGO-I89acag&s' },
    { id: 9, name: 'Boxing Gloves', price: 2240, image: 'https://www.sportswing.in/wp-content/uploads/2022/07/Xpeed-Xp101-Contest-boxing-Gloves-Red-p2.jpeg' },
    { id: 10, name: 'Cricket Bat', price: 850, image: 'https://m.media-amazon.com/images/I/317VTY6RngL._AC_UF894,1000_QL80_.jpg' },
  ]);
 
  const handleLoginClick = () => {
    setCurrentPage('login');
  };

  const handleSignUpClick = () => {
    setCurrentPage('signup');
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleAddToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  const handleCartClick = () => {
    setCurrentPage('cart');
  };

  const handleFavoritesClick = () => {
    setCurrentPage('favorites');
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
  };
 
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(item => item.id !== productToRemove.id));
};
const handleConfirmPayment = () => {
  setCurrentView('productList'); // Return to the product list after payment
};

const handleBuyNow = (product, paymentMethod) => {
  setSelectedProduct(product);
  setSelectedPaymentMethod(paymentMethod);
  setCurrentView('payment'); // Navigate to the Payment view
};

  return (
   
    <div className="app">
      <Navbar 
        cartCount={cart.length} 
        favoritesCount={favorites.length} 
        onLoginClick={handleLoginClick} 
        onCartClick={handleCartClick}
        onFavoritesClick={handleFavoritesClick}
        onHomeClick={handleHomeClick} 
        
      />
      {currentPage === 'login' && <Login onSignUpClick={handleSignUpClick} />}
      {currentPage === 'signup' && <SignUp />}
      {currentPage === 'cart' && <Cart cartItems={cart} removeFromCart={removeFromCart}/>}
      {currentPage === 'favorites' && <Favorites favoriteItems={favorites} />}
      {currentPage === 'home' && (
        <>
        <CategoryNavbar />
          <h1>Sports Store</h1>
          <ProductList 
            products={products} 
            onAddToCart={handleAddToCart} 
            onAddToFavorites={handleAddToFavorites} 
          />
          
        </>
      )}
      {currentView === 'payment' && selectedProduct && (
        <Payment
          product={selectedProduct}
          paymentMethod={selectedPaymentMethod}
          onConfirmPayment={handleConfirmPayment}
        />
      )}
    </div>
   
  );
}

export default App;
