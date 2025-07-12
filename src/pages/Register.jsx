import React from 'react';
import '../styles/Register.css';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Placeholder: implement form validation or API call
    navigate('/dashboard');
  };

  return (
    <div className="register-body">
      <div className="register-container">
        <div className="register-left">
          <div className="logo-circle">
            <img src={logo} alt="Rewear Logo" />
          </div>
          <form className="register-form" onSubmit={handleRegister}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="btn">Register</button>
          </form>
        </div>

        <div className="register-right">
          <div className="info-card">
            <p><strong>Form-based login/signup</strong></p>
            <p>Option for social login</p>
            <p>Redirects to dashboard upon success</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;