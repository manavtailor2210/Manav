"use client";

import { useState } from "react";
import Link from "next/link";

type CampaignStatus = "active" | "completed" | "pending";

interface Campaign {
  id: number;
  name: string;
  type: string;
  category: string;
  startDate: string;
  endDate: string;
  budget: number;
  status: CampaignStatus;
}

const mockCampaigns: Campaign[] = [ 
  {
    id: 1,
    name: "Fashion Launch",
    type: "Product Promotion",
    category: "Fashion",
    startDate: "2025-06-01",
    endDate: "2025-06-20",
    budget: 50000,
    status: "active",
  },
  {
    id: 2,
    name: "Fitness App Installs",
    type: "App Install",
    category: "Fitness",
    startDate: "2025-04-01",
    endDate: "2025-04-15",
    budget: 30000,
    status: "completed",
  },
  {
    id: 3,
    name: "Brand Awareness Q2",
    type: "Brand Awareness",
    category: "Tech",
    startDate: "2025-05-10",
    endDate: "2025-05-30",
    budget: 45000,
    status: "pending",
  },
];

export default function ClientCampaignsPage() {
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [filter, setFilter] = useState<"all" | CampaignStatus>("all");

  const filteredCampaigns =
    filter === "all"
      ? campaigns
      : campaigns.filter((c) => c.status === filter);

  const deleteCampaign = (id: number) => {
    if (!confirm("Are you sure you want to delete this campaign?")) return;
    setCampaigns((prev) => prev.filter((c) => c.id !== id));
  };

  const completeCampaign = (id: number) => {
    if (!confirm("Mark this campaign as completed?")) return;

    setCampaigns((prev) =>  
      prev.map((c) =>
        c.id === id ? { ...c, status: "completed" } : c
      )
    );
  };

  const badgeColor = (status: CampaignStatus) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "completed":
        return "bg-blue-100 text-blue-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">My Campaigns</h1>
        <Link
          href="/create-campaign"
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          + Create Campaign
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        {["all", "active", "completed", "pending"].map((status) => (
          <button
            key={status}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick={() => setFilter(status as any)}
            className={`px-4 py-2 rounded-lg border ${
              filter === status
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {status.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Campaign List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCampaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white p-5 rounded-xl shadow-sm border"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-lg">
                  {campaign.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {campaign.type} • {campaign.category}
                </p>
              </div>

              <span
                className={`px-3 py-1 text-sm rounded-full ${badgeColor(
                  campaign.status
                )}`}
              >
                {campaign.status}
              </span>
            </div>

            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>
                📅 {campaign.startDate} → {campaign.endDate}
              </p>
              <p>💰 Budget: ₹{campaign.budget.toLocaleString()}</p>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-4">
              <Link
                href={`/campaigns/${campaign.id}`}
                className="text-sm px-4 py-1 border rounded-lg"
              >
                View
              </Link>

              {campaign.status === "active" && (
                <button
                  onClick={() => completeCampaign(campaign.id)}
                  className="text-sm px-4 py-1 border border-green-500 text-green-600 rounded-lg"
                >
                  Complete
                </button>
              )}

              {campaign.status !== "active" && (
                <button
                  onClick={() => deleteCampaign(campaign.id)}
                  className="text-sm px-4 py-1 border border-red-400 text-red-600 rounded-lg"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredCampaigns.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No campaigns found.
        </p>
      )}
    </div>
  );
}
