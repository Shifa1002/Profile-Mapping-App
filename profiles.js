import React, { useState, useEffect } from "react";

const ProfileCard = ({ profile }) => (
  <div
    style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      width: "250px",
      textAlign: "center",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  >
    <img
      src={profile.photo}
      alt={`${profile.name}'s photo`}
      style={{ borderRadius: "50%", width: "100px", height: "100px", marginBottom: "16px" }}
    />
    <h3 style={{ margin: "8px 0" }}>{profile.name}</h3>
    <p style={{ margin: "4px 0", color: "#555" }}>{profile.address}</p>
    <p style={{ fontSize: "14px", color: "#777" }}>{profile.description}</p>
  </div>
);

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]); // State to hold fetched profiles
  const [search, setSearch] = useState(""); // State to handle search input

  // Fetch profiles from the server
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("http://localhost:5000/profiles");
        if (!response.ok) throw new Error("Failed to fetch profiles.");
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  // Filter profiles based on search input
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search profiles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))
        ) : (
          <p>No profiles found.</p>
        )}
      </div>
    </div>
  );
};

export default ProfileList;
