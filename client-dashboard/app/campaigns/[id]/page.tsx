"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

type CampaignStatus = "active" | "completed" | "pending";

interface Influencer {
  name: string;
  platform: string;
  profile: string;
  postLink: string;
  likes: number;
  comments: number;
  shares: number;
  views: number;
}

interface CampaignDetails {
  id: number;
  name: string;
  platform: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: CampaignStatus;
  influencers: Influencer[];
}

/**
 * MOCK DATA (no database)
 * ID must match campaigns/page.tsx IDs
 */
const mockCampaignDetails: CampaignDetails[] = [
  {
    id: 1,
    name: "Fashion Launch",
    platform: "Instagram",
    budget: 50000,
    startDate: "2025-06-01",
    endDate: "2025-06-20",
    status: "active",
    influencers: [
      {
        name: "Aarav Sharma",
        platform: "Instagram",
        profile: "https://instagram.com/aarav",
        postLink: "https://instagram.com/p/xyz",
        likes: 12000,
        comments: 430,
        shares: 210,
        views: 85000,
      },
    ],
  },
  {
    id: 2,
    name: "Fitness App Installs",
    platform: "YouTube",
    budget: 30000,
    startDate: "2025-04-01",
    endDate: "2025-04-15",
    status: "completed",
    influencers: [
      {
        name: "Rohit Verma",
        platform: "YouTube",
        profile: "https://youtube.com/@rohit",
        postLink: "https://youtube.com/watch?v=abc",
        likes: 8400,
        comments: 320,
        shares: 140,
        views: 62000,
      },
    ],
  },
];

export default function CampaignDetailsPage() {
  const params = useParams();
  const id = Number(params.id);

  const campaign = mockCampaignDetails.find(
    (c) => c.id === id
  );

  if (!campaign) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Campaign not found
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Back */}
      <Link
        href="/campaigns"
        className="text-sm text-gray-600 inline-block"
      >
        ← Back to Campaigns
      </Link>

      {/* Campaign Info */}
      <div className="bg-white p-6 rounded-xl border">
        <h1 className="text-2xl font-semibold mb-4">
          {campaign.name}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <p>📱 Platform: {campaign.platform}</p>
          <p>💰 Budget: ₹{campaign.budget.toLocaleString()}</p>
          <p>📌 Status: {campaign.status}</p>
          <p>📅 Start: {campaign.startDate}</p>
          <p>📅 End: {campaign.endDate}</p>
        </div>
      </div>

      {/* Influencer Performance */}
      <div className="bg-white p-6 rounded-xl border">
        <h2 className="text-xl font-semibold mb-4">
          Influencer Performance
        </h2>

        {campaign.influencers.map((inf, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 mb-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">
                  {inf.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Platform: {inf.platform}
                </p>
              </div>

              <a
                href={inf.postLink}
                target="_blank"
                className="text-blue-600 text-sm"
              >
                View Post →
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
              <p>👍 Likes: {inf.likes}</p>
              <p>💬 Comments: {inf.comments}</p>
              <p>🔁 Shares: {inf.shares}</p>
              <p>👀 Views: {inf.views}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
