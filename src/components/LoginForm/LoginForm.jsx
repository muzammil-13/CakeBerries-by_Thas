import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!username || !password) {
      setError('Please fill in both username and password.');
      return;
    }

    // In a real application, you would send a request to a backend service for authentication.
    // For this example, we'll just simulate a successful login.
    console.log('Submitted:', { username, password });

    // Simulate successful login - in a real app replace with API call and navigation
    if (username === 'test' && password === 'password') {
        setError('');
        console.log('Successful login'); // In a real app, redirect to protected route
    } else {
        setError('Invalid username or password');
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

