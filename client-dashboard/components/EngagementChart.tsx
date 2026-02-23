"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const pieData = [
  { name: "Likes", value: 80 },
  { name: "Comments", value: 90 },
  { name: "Shares", value: 121 },
];

const COLORS = ["#2563eb", "#60a5fa", "#93c5fd"];

export default function EngagementPieChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-semibold mb-4">
        Active Campaign Engagement 
      </h3>

      <PieChart width={350} height={250}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="value"
          label
        >
          {pieData.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
