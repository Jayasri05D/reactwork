import React, { useState } from 'react';
import './Login.css';

function Login({ onSignUpClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const style = {
    backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/06/14/07/96/1000_F_614079630_jOkK1NeAgFKy97p8GHOOAmUfdcM2qEWP.jpg')`,
    backgroundSize: 'cover', // Adjust the image size
    backgroundPosition: 'center', // Center the image
    width: '200px', // Set width as needed
    height: '300px', // Set height as needed
    padding: '20px',
    color: 'white', // Text color for contrast
};

  return (
    
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="sign-up-text">
        Don't have an account? <a href="#sign-up" onClick={onSignUpClick}>Sign Up</a>
      </p>
     

    </div>
   
  );
}

export default Login;
