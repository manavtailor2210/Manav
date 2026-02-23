"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const campaignData = [
  { name: "Jan", campaigns: 5 },
  { name: "Feb", campaigns: 8 },
  { name: "Mar", campaigns: 6 },
  { name: "Apr", campaigns: 10 },
];

const platformData = [
  { name: "Instagram", value: 60 },
  { name: "YouTube", value: 25 },
  { name: "Twitter", value: 15 },
];

const COLORS = ["#3B82F6", "#10B981", "#F59E0B"];

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

      {/* Bar Chart */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">
          Monthly Campaigns
        </h3>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={campaignData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="campaigns" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">
          Influencer Platforms
        </h3>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={platformData}
              dataKey="value"
              outerRadius={90}
              label
            >
              {platformData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
