"[]" 
[
    {
      "id": 1,
      "name": "Alice Doe",
      "photo": "https://via.placeholder.com/150",
      "address": "Seattle, USA",
      "description": "Software Engineer with 5 years of experience in full-stack development."
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "photo": "https://via.placeholder.com/150",
      "address": "Boston, USA",
      "description": "UI/UX Designer specializing in creating user-friendly web interfaces."
    }
  ]
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com"
    }
  ]
  import React, { useState, useEffect } from "react";
  import ProfileCard from "./ProfileCard";
  
  const ProfileList = () => {
    const [profiles, setProfiles] = useState([]);
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      fetch("http://localhost:5000/profiles")
        .then((res) => res.json())
        .then((data) => setProfiles(data));
    }, []);
  
    const filteredProfiles = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search profiles..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          {filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProfileList;
  