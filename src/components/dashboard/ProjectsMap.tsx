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
      name: 'Stadium Development',
      lat: 18.516726,
      lng: 73.856255,
    },
    {
      id: 2,
      name: 'Swimming Complex',
      lat: 26.9124,
      lng: 75.7873,
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
