import React, { useState } from 'react';
import { Search } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "National Cricket Stadium",
    state: "Maharashtra",
    city: "Mumbai",
    sport: "Cricket",
    status: "Operational",
    capacity: "45,000",
    facilities: ["Main Ground", "Practice Nets", "Indoor Academy", "Gym"]
  },
  {
    id: 2,
    name: "Badminton Training Center",
    state: "Karnataka",
    city: "Bangalore",
    sport: "Badminton",
    status: "Operational",
    capacity: "2,000",
    facilities: ["Courts", "Training Area", "Fitness Center"]
  },
  {
    id: 3,
    name: "Olympic Swimming Complex",
    state: "Delhi",
    city: "New Delhi",
    sport: "Swimming",
    status: "Under Construction",
    capacity: "3,000",
    facilities: ["Olympic Pool", "Training Pool", "Diving Pool"]
  },
  {
    id: 4,
    name: "Indoor Sports Arena",
    state: "Tamil Nadu",
    city: "Chennai",
    sport: "Multi-sport",
    status: "Operational",
    capacity: "12,000",
    facilities: ["Basketball Court", "Volleyball Court", "Table Tennis"]
  },
  {
    id: 5,
    name: "Athletics Stadium",
    state: "Punjab",
    city: "Chandigarh",
    sport: "Athletics",
    status: "Operational",
    capacity: "25,000",
    facilities: ["Running Track", "Field Events Area", "Training Facilities"]
  }
];

const states = [
  "All States",
  "Maharashtra",
  "Karnataka",
  "Delhi",
  "Tamil Nadu",
  "Punjab"
];

const sports = [
  "All Sports",
  "Cricket",
  "Badminton",
  "Swimming",
  "Multi-sport",
  "Athletics"
];

export function InfrastructureProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedSport, setSelectedSport] = useState("All Sports");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "All States" || project.state === selectedState;
    const matchesSport = selectedSport === "All Sports" || project.sport === selectedSport;
    
    return matchesSearch && matchesState && matchesSport;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Sports Infrastructure Projects</h1>
        <p className="mt-2 text-gray-600">Explore sports facilities across India</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <select
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <select
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
          >
            {sports.map(sport => (
              <option key={sport} value={sport}>{sport}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Location:</span> {project.city}, {project.state}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Sport:</span> {project.sport}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Status:</span>{' '}
                  <span className={`inline-block px-2 py-1 text-sm rounded-full ${
                    project.status === 'Operational' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Capacity:</span> {project.capacity}
                </p>
                <div>
                  <span className="font-medium text-gray-600">Facilities:</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.facilities.map((facility, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}