import React from "react";

const UserProfile = ({ name, age, location }) => {
  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
};

export default UserProfile;
