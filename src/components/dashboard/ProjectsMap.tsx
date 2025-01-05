import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet styles
import 'leaflet-css'; // If you installed leaflet-css separately
import L from 'leaflet';

// Fix marker icons
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

export function ProjectsMap() {
  // Example infrastructure projects
  const projects = [
    {
      id: 1,
      name: 'Bridge Construction',
      lat: 28.7041,
      lng: 77.1025,
    },
    {
      id: 2,
      name: 'Road Expansion',
      lat: 19.076,
      lng: 72.8777,
    },
    {
      id: 3,
      name: 'Water Supply System',
      lat: 13.0827,
      lng: 80.2707,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Infrastructure Projects</h2>
      <div className="aspect-video rounded overflow-hidden">
        {/* Map Container */}
        <MapContainer
          center={[20.5937, 78.9629]} // India's coordinates
          zoom={5}
          style={{ height: '100%', width: '100%' }}
        >
          {/* Add a tile layer (map visuals) */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Add markers for each project */}
          {projects.map((project) => (
            <Marker key={project.id} position={[project.lat, project.lng]}>
              <Popup>
                <strong>{project.name}</strong>
                <br />
                Latitude: {project.lat}, Longitude: {project.lng}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
