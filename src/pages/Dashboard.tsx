import React from 'react';
import { Link } from 'react-router-dom';
import { StatCard } from '../components/dashboard/StatCard';
import { ProjectsMap } from '../components/dashboard/ProjectsMap';
import { Building2, TrendingUp, Users, IndianRupee } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Sports Infrastructure Tracker
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Active Projects"
          value={142}
          icon={<Building2 className="h-6 w-6" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Fund Utilization"
          value="₹847.2M"
          icon={<IndianRupee className="h-6 w-6" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Completion Rate"
          value="76%"
          icon={<TrendingUp className="h-6 w-6" />}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Beneficiaries"
          value="1.2M"
          icon={<Users className="h-6 w-6" />}
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectsMap />
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">
            <Link to="/updates">
            Recent Updates</Link>
            </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-600 pl-4">
              <p className="font-medium">New Stadium Approved in Pune</p>
              <p className="text-sm text-gray-600">Fund allocated: ₹120M</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4">
              <p className="font-medium">
                Swimming Complex Completed in Jaipur
              </p>
              <p className="text-sm text-gray-600">
                Project completed ahead of schedule
              </p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4">
              <p className="font-medium">Sports Policy Update</p>
              <p className="text-sm text-gray-600">
                New guidelines for facility maintenance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
