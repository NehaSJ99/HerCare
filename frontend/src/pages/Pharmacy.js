import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

// Haversine formula to calculate distance between two lat/lng points
const getDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceKm = R * c; // Distance in km
  const distanceMiles = distanceKm * 0.621371; // Convert km to miles
  return {
    km: distanceKm.toFixed(2), // Distance in kilometers
    miles: distanceMiles.toFixed(2), // Distance in miles
  };
};

// Define custom icons
const userIcon = icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png",
  iconSize: [25, 41],   // slightly smaller or match your preference
  iconAnchor: [12, 41], // so that the icon's tip is at the marker's location
  popupAnchor: [1, -34],
});

const pharmacyIcon = icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Pharmacy = () => {
  const [location, setLocation] = useState(null);
  const [pharmacies, setPharmacies] = useState([]);
  const [error, setError] = useState(null);

  // Get the user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });

          try {
            // Query OpenStreetMap for pharmacies using Overpass API
            const response = await axios.get(
              `https://overpass-api.de/api/interpreter?data=[out:json];(node["amenity"="pharmacy"](around:5000,${latitude},${longitude}););out;`
            );

            // Set pharmacies state with the nearby pharmacies data
            setPharmacies(response.data.elements);
          } catch (err) {
            setError("Unable to fetch nearby pharmacies.");
          }
        },
        () => setError("Location access denied!")
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  // Function to extract the address from available tags
  const getAddress = (tags) => {
    // Check for different possible address fields in the tags
    const street = tags["addr:street"] || "Street not available";
    const city = tags["addr:city"] || tags["addr:town"] || "City not available";
    const postcode = tags["addr:postcode"] || "Postcode not available";
    return `${street}, ${city}, ${postcode}`;
  };

  return (
    <div className="p-0 m-0 h-screen">
      <h2 className="text-2xl font-bold my-4 text-center">Nearby Pharmacies</h2>

      {error ? (
        <p className="text-center">{error}</p>
      ) : location ? (
        <MapContainer
          center={location}
          zoom={14}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Marker for user location */}
          <Marker position={location} icon={userIcon}>
            <Popup>Your location</Popup>
          </Marker>

          {/* Markers for nearby pharmacies */}
          {pharmacies.map((pharmacy) => {
            const { km, miles } = getDistance(
              location.lat,
              location.lng,
              pharmacy.lat,
              pharmacy.lon
            ); // Get distance in km and miles

            const pharmacyName = pharmacy.tags.name || "Pharmacy";
            const address = getAddress(pharmacy.tags); // Get address from available tags

            // Create a Google Maps link for directions
            const googleMapsLink = `https://www.google.com/maps/dir/?api=1&origin=${location.lat},${location.lng}&destination=${pharmacy.lat},${pharmacy.lon}`;

            return (
              <Marker
                key={pharmacy.id}
                position={{ lat: pharmacy.lat, lng: pharmacy.lon }}
                icon={pharmacyIcon}
              >
                <Popup>
                  <div>
                    <strong>{pharmacyName}</strong>
                    <br />
                    <i>{address}</i>
                    <br />
                    <strong>Distance:</strong> {km} km / {miles} miles
                    <br />
                    <a
                      href={googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      ) : (
        <p className="text-center">Loading map...</p>
      )}
    </div>
  );
};

export default Pharmacy;
