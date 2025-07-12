// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'; 
import LandingPage from './pages/LandingPage'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route
          path="/"
          element={
            <div className="home">
              <h1>ReWear - Community Clothing Exchange</h1>
              <p>Welcome to the platform! Start swapping your clothes sustainably 🌱</p>
            </div>
          }
        /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
