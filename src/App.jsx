// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="home">
            <h1>ReWear - Community Clothing Exchange</h1>
            <p>Welcome to the platform! Start swapping your clothes sustainably 🌱</p>
          </div>
        } />
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
