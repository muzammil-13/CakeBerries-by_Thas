// Login.jsx
import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import './Login.css'; // Import your Login CSS


function Login() {
  return (
    <div className="login-container"> {/* Add a container */}
      <h2>Login to Cakeberries</h2>
        <LoginForm/>

    </div>
  );
}

export default Login;

