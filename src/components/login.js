import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import homeImage from '../assets/coffee.jpg';
import { Eye, EyeOff } from 'lucide-react';
import './login.css';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false); //  for toggle

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password, rememberMe });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <div className="logo-wrapper">
            <img src={logo} alt="Logo" className="circle-logo" />
          </div>
          <h2>Welcome Back</h2>
          <p>Please Enter Your Details To Log In.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group password-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                    <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    <span
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                </div>
            </div>

            <div className="forgot-password">
            <a href="/reset-password"></a>
          </div>
            <button type="submit" className="login-button">Log In</button>
          </form>

          <div className="signup-link">
                Don’t have an account? <a href="/signup">Sign up</a>
        </div>

        </div>

        <div
          className="login-image"
          style={{ backgroundImage: `url(${homeImage})` }}
        >
          <div className="brand-logo"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
