import React, { useState } from 'react';
import './Login.css';  // Styling file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Info:", email, password);
    alert("Login successful (dummy)");
    // Future: Add real login logic here
  };

  return (
    <div className="login-container">
      <h2>Login to ReWear</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit">Login</button>
      </form>
      <p className="note">Don't have an account? <a href="#">Sign up</a></p>
    </div>
  );
};

export default Login;
