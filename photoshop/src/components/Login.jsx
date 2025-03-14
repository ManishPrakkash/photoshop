import React from 'react';
import "../App.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form">
          <h1>Branch Login</h1>
          <p>Enter your email and password to log in!</p>
          <select>
            <option>Select your Branch...</option>
          </select>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#" className="forgot-password">Forgot password?</a>
          <div className="keep-logged-in">
            <input type="checkbox" id="keep-logged-in" />
            <label htmlFor="keep-logged-in">Keep me logged in</label>
          </div>
          <button className="rounded-bl-full">Login</button>
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
