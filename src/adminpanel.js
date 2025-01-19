import React, { useState } from "react";

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({ name: "", address: "", photo: "" });

  const handleAddProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}
      />
      <button onClick={handleAddProfile}>Add Profile</button>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>{profile.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
