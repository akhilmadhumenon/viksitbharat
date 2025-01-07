import React from 'react';
import { IndianRupee, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const fundData = {
  totalAllocation: "₹2.5B",
  utilized: "₹847.2M",
  committed: "₹1.1B",
  remaining: "₹552.8M",
  utilizationRate: 76,
  yearOverYearGrowth: 15
};

const stateWiseUtilization = [
  { state: "Maharashtra", allocated: "₹400M", utilized: "₹280M", rate: 70 },
  { state: "Karnataka", allocated: "₹350M", utilized: "₹245M", rate: 70 },
  { state: "Tamil Nadu", allocated: "₹300M", utilized: "₹240M", rate: 80 },
  { state: "Gujarat", allocated: "₹250M", utilized: "₹175M", rate: 70 },
  { state: "Delhi", allocated: "₹200M", utilized: "₹160M", rate: 80 }
];

export function FundUtilization() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Fund Utilization</h1>
        <p className="mt-2 text-gray-600">Track and analyze the utilization of allocated funds</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Allocation</p>
              <p className="text-2xl font-bold">{fundData.totalAllocation}</p>
            </div>
            <IndianRupee className="h-8 w-8 text-indigo-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Utilized Funds</p>
              <p className="text-2xl font-bold">{fundData.utilized}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Utilization Rate</p>
              <p className="text-2xl font-bold">{fundData.utilizationRate}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-indigo-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">YoY Growth</p>
              <p className="text-2xl font-bold">+{fundData.yearOverYearGrowth}%</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Fund Distribution</h2>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                  Utilized
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-green-600">
                  {fundData.utilized}
                </span>
              </div>
            </div>
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
                  Committed
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-yellow-600">
                  {fundData.committed}
                </span>
              </div>
            </div>
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                  Remaining
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-gray-600">
                  {fundData.remaining}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">State-wise Utilization</h2>
          <div className="space-y-4">
            {stateWiseUtilization.map((state) => (
              <div key={state.state} className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      {state.state}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-600">
                      {state.rate}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${state.rate}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}