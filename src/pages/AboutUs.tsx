import React from 'react';
import { motion } from 'framer-motion';

interface Official {
  name: string;
  position: string;
  image: string;
  contact: string;
}

const officials: Official[] = [
  {
    name: "Dr. Mansukh L. Mandaviya",
    position: "Hon'ble Minister Of Youth Affairs and Sports",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mansukh_Mandaviya_Photo.jpg",
    contact: "office-moyas@gov.in"
  },
  {
    name: "Smt. Raksha Nikhil Khadse",
    position: "Hon'ble Minister of State for Youth Affairs & Sports",
    image: "https://media.assettype.com/newindianexpress%2F2024-06%2Fe9f5be56-f8dc-4316-a525-413d2c339c1d%2FRaksha_Khadse.jpg",
    contact: "mos-yas21@gov.in"
  }
];

export function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
        <p className="text-lg text-gray-600">
          Meet the dedicated officials working towards developing sports infrastructure across India
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {officials.map((official, index) => (
          <motion.div
            key={official.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={official.image}
              alt={official.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {official.name}
              </h3>
              <p className="text-indigo-600 font-medium mb-1">{official.position}</p>
              {/* <p className="text-gray-600 mb-4">{official.department}</p> */}
              <a
                href={`mailto:${official.contact}`}
                className="text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                {official.contact}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}