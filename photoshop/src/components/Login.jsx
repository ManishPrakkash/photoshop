import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const [branch, setBranch] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Store data in local storage
    localStorage.setItem('branch', branch);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    // Perform login logic here
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form">
          <h1>Branch Login</h1>
          <p>Enter your email and password to log in!</p>
          <select value={branch} onChange={(e) => setBranch(e.target.value)}>
            <option value="">Select your Branch...</option>
            <option value="branch1">Branch 1</option>
            <option value="branch2">Branch 2</option>
            {/* Add more branches as needed */}
          </select>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <a href="#" className="forgot-password">Forgot password?</a>
          <div className="keep-logged-in">
            {/* <input type="checkbox" id="keep-logged-in" />
            <label htmlFor="keep-logged-in">Keep me logged in</label> */}
          </div>
          <div className="mt-auto" style={{ marginTop: '10px' }}>
            <button className="rounded-bl-full" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
      <div className="login-right rounded-bl-100px">
        <img src="photoshop/src/assets/Logo.png" alt="Logo" />
        <h1>NAME</h1>
      </div>
    </div>
  );
};

export default Login;
