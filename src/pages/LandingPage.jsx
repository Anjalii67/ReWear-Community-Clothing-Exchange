// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-body">
      <div className="top-bar">
        <div className="logo">ReWear</div>
        <div className="nav-buttons">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Register</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <h1>Give Your Clothes a Second Life</h1>
        <p>Join the community that swaps and saves fashion 🌿</p>
        <div className="cta-buttons">
          <button>Start Swapping</button>
          <button>Browse Items</button>
          <button>List an Item</button>
        </div>
      </div>

      {/* Featured Items Carousel Placeholder */}
      <div className="section-title">🌟 Featured Items</div>
      <div className="carousel-placeholder">[ Featured items carousel here ]</div>
    </div>
  );
};

export default LandingPage;
