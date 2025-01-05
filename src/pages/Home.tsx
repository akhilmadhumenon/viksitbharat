import React from 'react';
import { FeedbackForm } from '../components/feedback/FeedbackForm';

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* News cards will go here */}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Submit Feedback</h2>
        <FeedbackForm />
      </section>
    </div>
  );
}