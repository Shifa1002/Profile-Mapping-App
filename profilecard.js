import React from "react";

const ProfileCard = ({ profile }) => (
  <div>
    <h3>{profile.name}</h3>
    <img src={profile.photo} alt={profile.name} />
    <p>{profile.description}</p>
    <button>View Details</button>
  </div>
);

export default ProfileCard;
