import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; 
import Nav from './components/Nav/Nav'; // Import Nav component directly
import './App.css'; // Import your global CSS (if needed)

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> {/* Place the Nav component outside the Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
