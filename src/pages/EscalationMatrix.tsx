import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, CheckCircle } from 'lucide-react';

interface Department {
  name: string;
  avgResponseTime: string;
  status: 'normal' | 'delayed' | 'critical';
  pendingTasks: number;
}

const departments: Department[] = [
  {
    name: "Technical Assessment",
    avgResponseTime: "2 days",
    status: "normal",
    pendingTasks: 5
  },
  {
    name: "Financial Review",
    avgResponseTime: "5 days",
    status: "delayed",
    pendingTasks: 12
  },
  {
    name: "Legal Compliance",
    avgResponseTime: "7 days",
    status: "critical",
    pendingTasks: 8
  }
];

function getStatusIcon(status: Department['status']) {
  switch (status) {
    case 'normal':
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    case 'delayed':
      return <Clock className="w-6 h-6 text-yellow-500" />;
    case 'critical':
      return <AlertTriangle className="w-6 h-6 text-red-500" />;
  }
}

function getStatusClass(status: Department['status']) {
  switch (status) {
    case 'normal':
      return 'bg-green-100 text-green-800';
    case 'delayed':
      return 'bg-yellow-100 text-yellow-800';
    case 'critical':
      return 'bg-red-100 text-red-800';
  }
}

export function EscalationMatrix() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-gray-900">Escalation Matrix</h1>
        <p className="text-gray-600 mt-2">Monitor department response times and pending tasks</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <motion.div
            key={dept.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{dept.name}</h3>
              {getStatusIcon(dept.status)}
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Average Response Time</p>
                <p className="text-lg font-medium">{dept.avgResponseTime}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Pending Tasks</p>
                <p className="text-lg font-medium">{dept.pendingTasks}</p>
              </div>
              
              <div>
                <span className={`inline-block px-2 py-1 rounded-full text-sm ${getStatusClass(dept.status)}`}>
                  {dept.status.charAt(0).toUpperCase() + dept.status.slice(1)}
                </span>
              </div>
            </div>

            {dept.status !== 'normal' && (
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                Escalate Issue
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}