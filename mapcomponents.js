import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ location }) => {
  // Set the map center, defaulting to Seattle if no location is provided
  const mapCenter = location || { lat: 47.6062, lng: -122.3321 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAtNFdT2eQrM27SHKGyxrnp-gP992tDo5g">
      {/* Render the Google Map */}
      <GoogleMap
        center={mapCenter} // Center the map
        zoom={10} // Set zoom level
        mapContainerStyle={{ height: "400px", width: "800px" }} // Map container styling
      >
        {/* Place a marker at the center */}
        <Marker position={mapCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
