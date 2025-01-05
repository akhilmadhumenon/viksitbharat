import React from 'react';
import { FeedbackForm } from '../components/feedback/FeedbackForm';

export function Feedback() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Submit Feedback</h1>
        <p className="text-gray-600 mb-8">
          Your feedback helps us improve sports infrastructure across India. Share your thoughts, suggestions, or concerns.
        </p>
        <FeedbackForm />
      </div>
    </div>
  );
}