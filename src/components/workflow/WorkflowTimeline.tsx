import React from 'react';
import { motion } from 'framer-motion';
import { RequestWorkflow } from '../../types/request';
import { Clock, CheckCircle, AlertTriangle } from 'lucide-react';

interface WorkflowTimelineProps {
  workflow: RequestWorkflow[];
}

export function WorkflowTimeline({ workflow }: WorkflowTimelineProps) {
  return (
    <div className="space-y-4 p-4">
      {workflow.map((stage, index) => (
        <motion.div
          key={stage.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start space-x-4"
        >
          <div className="flex-shrink-0 mt-1">
            {stage.status === 'completed' ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : stage.status === 'delayed' ? (
              <AlertTriangle className="w-6 h-6 text-red-500" />
            ) : (
              <Clock className="w-6 h-6 text-yellow-500" />
            )}
          </div>
          <div className="flex-grow">
            <h3 className="font-medium text-gray-900">{stage.stage}</h3>
            <p className="text-sm text-gray-500">Assigned to: {stage.assignedTo}</p>
            <p className="text-sm text-gray-500">
              {new Date(stage.startDate).toLocaleDateString()}
              {stage.endDate && ` - ${new Date(stage.endDate).toLocaleDateString()}`}
            </p>
            {stage.comments && (
              <p className="text-sm text-gray-600 mt-1">{stage.comments}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}