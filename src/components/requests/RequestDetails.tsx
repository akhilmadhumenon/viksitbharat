import React from 'react';
import { motion } from 'framer-motion';
import { WorkflowTimeline } from '../workflow/WorkflowTimeline';
import { FundRequest } from '../../types/request';
import { FileText, AlertTriangle, MessageSquare } from 'lucide-react';

interface RequestDetailsProps {
  request: FundRequest;
  onEscalate?: () => void;
  onAnalyze?: () => void;
}

export function RequestDetails({ request, onEscalate, onAnalyze }: RequestDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{request.title}</h2>
        <p className="text-gray-600">Submitted by {request.submittedBy}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Request Details</h3>
          <div className="space-y-3">
            <p><span className="font-medium">Location:</span> {request.location}</p>
            <p><span className="font-medium">Amount:</span> {request.amount}</p>
            <p><span className="font-medium">Status:</span> {request.status}</p>
            <p><span className="font-medium">Date:</span> {request.date}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Actions</h3>
          <div className="space-y-3">
            {onAnalyze && (
              <button
                onClick={onAnalyze}
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                <FileText className="w-4 h-4" />
                <span>Analyze with AI</span>
              </button>
            )}
            {onEscalate && (
              <button
                onClick={onEscalate}
                className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Escalate Issue</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Workflow Timeline</h3>
        <WorkflowTimeline workflow={request.workflow} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Comments</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-start space-x-3 mb-4">
            <MessageSquare className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">Add your comment...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}