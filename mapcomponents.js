import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ location }) => {
  const mapCenter = { lat: 47.6062, lng: -122.3321 }; // Example coordinates for Seattle

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        center={mapCenter}
        zoom={10}
        mapContainerStyle={{ height: "400px", width: "800px" }}
      >
        <Marker position={mapCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
