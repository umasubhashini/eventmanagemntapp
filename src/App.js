import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import Register from './register';
import TodoApp from './todoApp';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the token exists in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle login by saving the token and updating the login state
  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  // Handle logout by removing the token and updating the login state
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Protected route for TodoApp, redirects to login if not authenticated */}
          {isLoggedIn ? (
            <Route path="/" element={<TodoApp onLogout={handleLogout} />} />
          ) : (
            <Route path="/" element={<Navigate to="/login" />} />
          )}

          {/* Login Route */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Register Route */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
