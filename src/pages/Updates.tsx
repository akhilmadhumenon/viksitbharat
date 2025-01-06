import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

interface Update {
  id: string;
  title: string;
  type: 'project' | 'policy';
  date: string;
  description: string;
  timeline?: {
    date: string;
    event: string;
  }[];
  documents?: {
    name: string;
    url: string;
  }[];
}

const updates: Update[] = [
  {
    id: '1',
    title: 'New Stadium Development in Pune',
    type: 'project',
    date: '2024-03-15',
    description: 'Construction of a new multi-purpose stadium with state-of-the-art facilities.',
    timeline: [
      { date: '2024-03-15', event: 'Project Approved' },
      { date: '2024-04-01', event: 'Construction Begins' },
      { date: '2024-12-31', event: 'Expected Completion' }
    ]
  },
  {
    id: '2',
    title: 'Updated Sports Infrastructure Guidelines',
    type: 'policy',
    date: '2024-03-10',
    description: 'New guidelines for maintenance and operation of sports facilities.',
    documents: [
      { name: 'Guidelines 2024', url: '#' },
      { name: 'Implementation Manual', url: '#' }
    ]
  }
];

export function Updates() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Recent Updates</h1>
      
      <div className="space-y-6">
        {updates.map(update => (
          <motion.div
            key={update.id}
            layout
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <motion.button
              onClick={() => setExpandedId(expandedId === update.id ? null : update.id)}
              className="w-full text-left p-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">{update.title}</h2>
                <span className="text-sm text-gray-500">
                  {new Date(update.date).toLocaleDateString()}
                </span>
              </div>
            </motion.button>

            <AnimatePresence>
              {expandedId === update.id && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="overflow-hidden border-t border-gray-200"
                >
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{update.description}</p>

                    {update.type === 'project' && update.timeline && (
                      <div className="space-y-4">
                        <h3 className="font-medium text-gray-900">Project Timeline</h3>
                        {update.timeline.map((event, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-24 text-sm text-gray-500">
                              {new Date(event.date).toLocaleDateString()}
                            </div>
                            <div className="flex-grow text-gray-900">{event.event}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {update.type === 'policy' && update.documents && (
                      <div className="space-y-4">
                        <h3 className="font-medium text-gray-900">Documents</h3>
                        <div className="space-y-2">
                          {update.documents.map((doc, index) => (
                            <a
                              key={index}
                              href={doc.url}
                              className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
                            >
                              <FileText className="w-4 h-4" />
                              <span>{doc.name}</span>
                              <Download className="w-4 h-4" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}