import React from 'react';
import { CheckCircle, Clock, AlertTriangle, Calendar } from 'lucide-react';

const completionData = {
  overallRate: 76,
  onTime: 82,
  delayed: 12,
  ahead: 6,
  totalProjects: 142
};

const projectTypes = [
  { type: "Stadiums", rate: 85, count: 28 },
  { type: "Swimming Pools", rate: 72, count: 15 },
  { type: "Sports Complexes", rate: 68, count: 45 },
  { type: "Training Centers", rate: 80, count: 34 },
  { type: "Athletic Tracks", rate: 78, count: 20 }
];

export function CompletionRate() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Project Completion Rate</h1>
        <p className="mt-2 text-gray-600">Analysis of project completion metrics and timelines</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Overall Completion</p>
              <p className="text-2xl font-bold">{completionData.overallRate}%</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">On-Time Projects</p>
              <p className="text-2xl font-bold">{completionData.onTime}%</p>
            </div>
            <Clock className="h-8 w-8 text-indigo-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Delayed Projects</p>
              <p className="text-2xl font-bold">{completionData.delayed}%</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Ahead of Schedule</p>
              <p className="text-2xl font-bold">{completionData.ahead}%</p>
            </div>
            <Calendar className="h-8 w-8 text-green-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Completion by Project Type</h2>
          <div className="space-y-6">
            {projectTypes.map((project) => (
              <div key={project.type} className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      {project.type} ({project.count} projects)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold inline-block text-indigo-600">
                      {project.rate}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${project.rate}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Timeline Analysis</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-green-800">On Track</p>
                <p className="text-2xl font-bold text-green-600">{completionData.onTime} Projects</p>
              </div>
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-yellow-800">Delayed</p>
                <p className="text-2xl font-bold text-yellow-600">{completionData.delayed} Projects</p>
              </div>
              <AlertTriangle className="h-12 w-12 text-yellow-500" />
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-blue-800">Ahead of Schedule</p>
                <p className="text-2xl font-bold text-blue-600">{completionData.ahead} Projects</p>
              </div>
              <Calendar className="h-12 w-12 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}