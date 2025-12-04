import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Home.css';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Sports Task Manager</h1>
          <p className="hero-subtitle">
            Organize your sports activities and tasks with our powerful PWA
          </p>
          {user ? (
            <Link to="/tasks" className="btn btn-primary btn-large">
              Go to Tasks
            </Link>
          ) : (
            <div className="hero-actions">
              <Link to="/login" className="btn btn-primary btn-large">
                Get Started
              </Link>
              <Link to="/register" className="btn btn-secondary btn-large">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="features">
        <div className="container">
          <h2 className="features-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚽</div>
              <h3>Sports-Focused</h3>
              <p>Organize tasks by sport type including Football, Basketball, Soccer, and more</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Progressive Web App</h3>
              <p>Install as a native app and use offline with full functionality</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Secure Authentication</h3>
              <p>Login with email/password or Google OAuth for secure access</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Real-Time Updates</h3>
              <p>Get instant updates when tasks are created, edited, or deleted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

