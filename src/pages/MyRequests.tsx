import React from 'react';
import { motion } from 'framer-motion';
import { RequestDetails } from '../components/requests/RequestDetails';
import { useAuthStore } from '../stores/authStore';

const demoRequests = [
  {
    id: 1,
    title: "Indoor Stadium Development",
    location: "Jhansi, Uttar Pradesh",
    amount: "₹2.5 Cr",
    status: "pending",
    submittedBy: "Jhansi Sports Club",
    date: "2024-03-15",
    workflow: [
      {
        id: "1",
        stage: "Initial Review",
        status: "completed",
        assignedTo: "Dr. Rajesh Kumar",
        startDate: "2024-03-15",
        endDate: "2024-03-16"
      },
      {
        id: "2",
        stage: "Technical Assessment",
        status: "pending",
        assignedTo: "Mrs. Priya Sharma",
        startDate: "2024-03-16"
      }
    ]
  }
];

export function MyRequests() {
  const { user } = useAuthStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-gray-900">My Fund Requests</h1>
        <p className="text-gray-600 mt-2">Track the status of your funding requests</p>
      </motion.div>

      <div className="space-y-8">
        {demoRequests.map(request => (
          <motion.div
            key={request.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <RequestDetails request={request} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}