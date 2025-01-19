import React from "react";
import MapComponent from "./MapComponent"; // Adjust the path if MapComponent is in a different directory
import "./App.css"; // Import the CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Map Integration Example</h1>
        <p>
          Explore the map below using React and Google Maps API integration.
        </p>
      </header>
      <main>
        <MapComponent /> {/* MapComponent renders the map */}
      </main>
    </div>
  );
}

export default App;
