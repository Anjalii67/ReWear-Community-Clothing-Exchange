import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../assets/logo.jpg';

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const toggleMode = () => setDarkMode(!darkMode);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert('Login Successful ✅');
        navigate('/dashboard'); // ✅ redirect on success
      } else {
        alert(`Login Failed ❌: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  return (
    <div className={`login-body ${darkMode ? 'dark' : ''}`}>
      <div className="toggle-icons">
        <span onClick={toggleMode} style={{ display: !darkMode ? 'inline' : 'none' }}>☀</span>
        <span onClick={toggleMode} style={{ display: darkMode ? 'inline' : 'none' }}>🌙</span>
      </div>

      <div className="login-container">
        <div className="logo-circle">
          <img src={logo} alt="Rewear Logo" />
        </div>
        <div className="app-title">Rewear</div>
        <div className="subtitle">Community Clothing Exchange</div>

        <div className="card">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="btn" onClick={handleLogin}>Login</button>
          <div className="links">
            <a href="#">Forgot password?</a>
            <span
              onClick={() => navigate('/register')}
              style={{ cursor: 'pointer', color: 'var(--primary-color)', textDecoration: 'underline' }}
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
