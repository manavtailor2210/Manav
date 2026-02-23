// export default function Reports() {
//   return <h1 className="text-2xl font-bold">Reports</h1>;
// }

"use client";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const summaryData = [
  { title: "Total Campaigns", value: 12521 },
  { title: "Active Campaigns", value: 10289 },
  { title: "Completed Campaigns", value: 2232 },
  { title: "Total Spend", value: "₹22,45,000" },
];

const campaignPerformance = [
  { name: "Campaign A", engagement: 4200 },
  { name: "Campaign B", engagement: 3100 },
  { name: "Campaign C", engagement: 5400 },
  { name: "Campaign D", engagement: 2900 },
];

const budgetData = [
  { name: "Spent", value: 65 },
  { name: "Remaining", value: 35 },
];

const COLORS = ["#2563eb", "#93c5fd"];

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reports & Analytics</h1>
        <button className="px-4 py-2 bg-black text-white rounded-lg">
          Download Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow"
          >
            <p className="text-gray-500">{item.title}</p>
            <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">
            Campaign Engagement
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={campaignPerformance}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="engagement" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">
            Budget Utilization
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={budgetData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {budgetData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Campaign Report Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Campaign</th>
              <th className="p-4">Status</th>
              <th className="p-4">Engagement</th>
              <th className="p-4">Spend</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-4">Campaign A</td>
              <td className="p-4 text-green-600">Active</td>
              <td className="p-4">4,200</td>
              <td className="p-4">₹65,000</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">Campaign B</td>
              <td className="p-4 text-gray-500">Completed</td>
              <td className="p-4">3,100</td>
              <td className="p-4">₹48,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
