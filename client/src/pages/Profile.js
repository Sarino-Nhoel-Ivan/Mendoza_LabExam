import React from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">Profile</h1>
          </div>
          <div className="profile-content">
            <div className="profile-info">
              <div className="profile-item">
                <label>Username:</label>
                <p>{user?.username}</p>
              </div>
              <div className="profile-item">
                <label>Email:</label>
                <p>{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

