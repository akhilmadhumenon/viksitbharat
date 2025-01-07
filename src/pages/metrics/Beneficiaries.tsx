import React from 'react';
import { Users, Trophy, Target, Activity } from 'lucide-react';

const beneficiaryData = {
  totalBeneficiaries: "1.2M",
  activeAthletes: "250K",
  youthPrograms: "450K",
  communityUsers: "500K",
  yearOverYearGrowth: 15
};

const stateWiseBeneficiaries = [
  { state: "Maharashtra", count: "250K", growth: 18 },
  { state: "Karnataka", count: "180K", growth: 15 },
  { state: "Tamil Nadu", count: "160K", growth: 12 },
  { state: "Gujarat", count: "140K", growth: 14 },
  { state: "Delhi", count: "120K", growth: 16 }
];

const programImpact = [
  { program: "Youth Sports Development", beneficiaries: "450K", growth: 20 },
  { program: "Elite Athlete Training", beneficiaries: "50K", growth: 15 },
  { program: "Community Sports", beneficiaries: "500K", growth: 12 },
  { program: "School Sports Programs", beneficiaries: "200K", growth: 18 }
];

export function Beneficiaries() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Program Beneficiaries</h1>
        <p className="mt-2 text-gray-600">Impact analysis of sports infrastructure development</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Beneficiaries</p>
              <p className="text-2xl font-bold">{beneficiaryData.totalBeneficiaries}</p>
            </div>
            <Users className="h-8 w-8 text-indigo-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Athletes</p>
              <p className="text-2xl font-bold">{beneficiaryData.activeAthletes}</p>
            </div>
            <Trophy className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Youth Programs</p>
              <p className="text-2xl font-bold">{beneficiaryData.youthPrograms}</p>
            </div>
            <Target className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Community Users</p>
              <p className="text-2xl font-bold">{beneficiaryData.communityUsers}</p>
            </div>
            <Activity className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">State-wise Distribution</h2>
          <div className="space-y-4">
            {stateWiseBeneficiaries.map((state) => (
              <div key={state.state} className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-700">{state.state}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-600">{state.count}</span>
                    <span className="ml-2 text-xs text-green-600">+{state.growth}%</span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${(parseInt(state.count) / 250000) * 100}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Program Impact</h2>
          <div className="space-y-6">
            {programImpact.map((program) => (
              <div key={program.program} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">{program.program}</h3>
                  <span className="text-green-600 text-sm">+{program.growth}%</span>
                </div>
                <p className="text-2xl font-bold text-indigo-600">{program.beneficiaries}</p>
                <p className="text-sm text-gray-600">beneficiaries</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}