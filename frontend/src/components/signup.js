import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import homeImage from '../assets/coffee.jpg';
import { Eye, EyeOff } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.css'

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
    } else {
      toast.success('Account created successfully!');
      console.log({ fullName, phone, email, password });
      // Add your signup logic here
    }
  };

  // Style object for consistent placeholder styling
  const inputStyles = {
    borderRadius: '12px', 
    padding: '8px 12px', 
    borderColor: '#c0c9c9',
    color: '#495057', // Dark gray for input text
    backgroundColor: '#f8f9fa' // Light gray background
  };

  const placeholderStyles = {
    color: '#8E9292', // Bootstrap's secondary text color
    opacity: '1' // Ensure full visibility
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center p-3" 
         style={{background: 'linear-gradient(135deg, #EBF5F6, #abdfe7, #65b2c2, #90bfc7)'}}>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} />
      <div className="row g-0 w-100 shadow-lg" style={{maxWidth: '850px', borderRadius: '18px', overflow: 'hidden'}}>
        {/* Form Column */}
        <div className="col-md-6 bg-white p-4 p-lg-4 d-flex flex-column justify-content-center">
          <div className="text-center mb-3">
            <img src={logo} alt="Logo" className="rounded-circle" style={{width: '70px', height: '70px', objectFit: 'cover'}} />
          </div>
          <h2 className="text-center mb-1 fs-4" style={{color: '#5EA5B3', fontWeight: '700'}}>Create Account</h2>
          <p className="text-center mb-3 fs-6" style={{color: '#5BA7B4', fontWeight: '300'}}>Please fill in your details to sign up.</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="fullName" className="form-label mb-1 fs-6" style={{color: '#5EA5B3', fontWeight: '500'}}>Full Name</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="fullName"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                style={inputStyles}
                onFocus={(e) => e.target.placeholder = ''}
                onBlur={(e) => e.target.placeholder = 'Enter your full name'}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="phone" className="form-label mb-1 fs-6" style={{color: '#5EA5B3', fontWeight: '500'}}>Phone</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={inputStyles}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="form-label mb-1 fs-6" style={{color: '#5EA5B3', fontWeight: '500'}}>Email</label>
              <input
                type="email"
                className="form-control form-control-sm"
                id="email"
                placeholder="Sample@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyles}
              />
            </div>

            <div className="mb-2 position-relative">
              <label htmlFor="password" className="form-label mb-1 fs-6" style={{color: '#5EA5B3', fontWeight: '500'}}>Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control form-control-sm"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={inputStyles}
                />
                <button 
                  className="btn btn-outline-secondary position-absolute end-0 top-50 translate-middle-y"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{border: 'none', background: 'transparent'}}
                >
                  {showPassword ? <EyeOff size={18} color="#5BA7B4" /> : <Eye size={18} color="#5BA7B4" />}
                </button>
              </div>
            </div>

            <div className="mb-3 position-relative">
              <label htmlFor="confirmPassword" className="form-label mb-1 fs-6" style={{color: '#5EA5B3', fontWeight: '500'}}>Confirm Password</label>
              <div className="input-group">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="form-control form-control-sm"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={inputStyles}
                />
                <button 
                  className="btn btn-outline-secondary position-absolute end-0 top-50 translate-middle-y"
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{border: 'none', background: 'transparent'}}
                >
                  {showConfirmPassword ? <EyeOff size={18} color="#5BA7B4" /> : <Eye size={18} color="#5BA7B4" />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn w-100 mt-2" 
              style={{
                backgroundColor: '#4B929D', 
                color: 'white', 
                borderRadius: '15px', 
                padding: '8px',
                border: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#3d7d87'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#4B929D'}
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-3">
            <small className="text-muted fs-6">
              Already have an account? <a href="/login" style={{color: '#4B929D', fontWeight: '500', textDecoration: 'none'}}>Log in</a>
            </small>
          </div>
        </div>

        {/* Image Column */}
        <div 
          className="col-md-6 d-none d-md-block" 
          style={{
            backgroundImage: `url(${homeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '500px'
          }}
        ></div>
      </div>
    </div>
  );
};

export default Signup;
