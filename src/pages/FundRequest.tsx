import React from 'react';
import { FundRequestForm } from '../components/funding/FundRequestForm';

export function FundRequest() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Request Funds</h1>
        <p className="text-gray-600 mb-8">
          Submit your funding request for sports infrastructure development. Please provide detailed information to help us evaluate your proposal.
        </p>
        <FundRequestForm />
      </div>
    </div>
  );
}